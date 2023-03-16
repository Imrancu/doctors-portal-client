import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const { createUser, updateUser, googleSignIn } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();
    
    if(token){
        navigate('/')
    }
    
    const handleSignUp = (data, e) => {
        setSignUpError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully');
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email);
                    })
                    .catch(err => console.error(err));
            })
            .catch(error => {
                console.error(error)
                setSignUpError(error.message)
            });
        e.target.reset();
    }
    const saveUser = (name, email) => {
        const user = {name, email};
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            setCreatedUserEmail(email);
        })
    }

    

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(err => console.error(err));
    }
    return (
        <div className='flex justify-center items-center'>
            <div className='w-96 border p-5 rounded-lg shadow-xl'>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input
                            {...register("name")}
                            type="text"
                            className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input
                            {...register("email", { required: "Email is Required" })}
                            type="email"
                            className="input input-bordered w-full" />
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input
                            {...register("password", {
                                required: "Password is Required",
                                minLength: { value: 6, message: 'Password must be 6 character or longer' },
                            })}
                            type="password"
                            className="input input-bordered w-full" />
                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                    </div>
                    {
                        signUpError && <p className='text-red-600'>{signUpError}</p>
                    }
                    <input
                        className='btn border-none mt-2 text-white font-bold bg-gradient-to-r from-secondary to-primary w-full'
                        type="submit"
                        value='Sign Up'
                    />
                </form>
                <p className='mt-3'>Already Have an Account? <Link to='/login' className='text-secondary'>Please Login Here</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn bg-transparent text-accent w-full border border-secondary hover:bg-transparent'>Continue With Google</button>
            </div>
        </div>
    );
};

export default SignUp;