import React from 'react';
import classes from './Wrapper.module.css';
const Wrapper = ({children, style, className}) => {
    return (
        <div style={style} className={[classes.wrapper, className].join(' ')}>
            {children}
        </div>
    );
};

export default Wrapper;