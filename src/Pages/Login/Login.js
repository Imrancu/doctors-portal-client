import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const {userLogin, googleSignIn, resetPassword} = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || "/";

    const { register, formState: { errors }, handleSubmit } = useForm()
    const handleLogin = (data, e) => {
        console.log(data);
        setLoginError('');
        userLogin(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true });
            e.target.reset();
        })
        .catch(err => {
            console.error(err.message)
            setLoginError(err.message)
        });

    }
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error));
    }
    const handlePassword = () => {
        resetPassword(userLogin.email)
        .then(() => {})
        .catch(err => console.error(err));
    }
    return (
        <div className='flex justify-center items-center'>
            <div className='w-96 border p-5 rounded-lg shadow-xl'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input
                            {...register("email", { required: "Email is Required" })}
                            type="text"
                            className="input input-bordered w-full" />
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input
                            {...register("password", { 
                                required: "Password is Required",
                                minLength: {value: 6, message: 'Password must be 6 character or longer'},
                            })}
                            type="password"
                            className="input input-bordered w-full" />
                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                        <label className="label"><p onClick={handlePassword} className="label-text">Forget Password?</p></label>
                    </div>
                    {loginError && <p className='text-red-600'>{loginError}</p>}
                    <input
                        className='btn border-none mt-2 text-white font-bold bg-gradient-to-r from-secondary to-primary w-full'
                        type="submit"
                        value='Login'
                    />
                </form>
                <p className='mt-3'>New to Doctors Portal? <Link to='/signUp' className='text-secondary'>Create an Account</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn bg-transparent text-accent w-full border border-secondary hover:bg-transparent'>Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;