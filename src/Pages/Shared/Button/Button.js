import React from 'react';

const Button = ({children}) => {
    return (
        <button className="btn btn-primary bg-gradient-to-l from-secondary to-primary text-white font-bold">{children}</button>
    );
};

export default Button;