import React from 'react';
import classes from './Preloader.module.css';
import preloader from '../../Assets/preloader.svg';

const Preloader = (props) => {
    return(
        <div className={classes.main}>
            <img src={preloader}/>
        </div>
    );
}

export default Preloader;