import { Button, makeStyles, TextField } from '@material-ui/core';
import React, { useEffect } from 'react';
import classes from './Register.module.css';
import { useTranslation } from "react-i18next";
import { useForm } from 'react-hook-form';
import Preloader from '../Preloader/Preloader';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { connect } from 'react-redux';
import { register, setIsRegistered } from '../../Redux/commonReducer';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root:{
        '& label.Mui-focused': {
            color: '#f27125'
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#f27125' 
        },
        '& .MuiOutlinedInput-root': {
            borderRadius: 0
        }
    }
}));

const Register = (props) => {
    const { t } = useTranslation();
    const material = useStyles();
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data, e) => {
        data.url = props.userURL;
        props.register(data);
        e.target.reset();
    }

    useEffect(() => {
        Aos.init({duration: 1000});
    })

    return(
        <div className={classes.main} data-aos="fade" data-aos-duration="300">
            {props.isFetching && <Preloader/>}
            <div className={classes.window} data-aos="zoom-in" data-aos-duration="200">
                <Button className={classes.close} onClick={()=>{props.setIsOpenRegisterModal(false)}}>
                    <NavLink to="/">&#x2715;</NavLink>
                </Button>
                {!props.isRegistered ? 
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={classes.field}>
                        <TextField inputRef={register({required: true})} error={errors.name ? true : false} classes={material} label={t("modal.name")} variant="outlined" name="name"/>
                    </div>
                    <div className={classes.field}>
                        <TextField inputRef={register({required: true})} error={errors.phone ? true : false} classes={material} label={t("modal.phone")} variant="outlined" name="phone"/>
                    </div>
                    <div className={classes.field}>
                        <TextField inputRef={register({required: true})} error={errors.email ? true : false} classes={material} label={t("modal.email")} variant="outlined" name="email"/>
                    </div>
                    <div className={classes.field}>
                        <TextField inputRef={register({required: true})} error={errors.job ? true : false} classes={material} label={t("modal.job")} variant="outlined" name="job"/>
                    </div>
                    <div className={classes.field}>
                        <TextField inputRef={register({required: true})} error={errors.why ? true : false} classes={material} multiline rows={5} label={t("modal.why")} variant="outlined" name="why"/>
                    </div>
                    <Button type="submit">{t("modal.submit")}</Button>
                </form> : 
                <form>
                    <p>{t("modal.thankyou")}</p>
                </form>}

            </div>
        </div>
    )
}

let mapStateToProps = (state) => ({
    isFetching: state.common.isFetching,
    isRegistered: state.common.isRegistered
});

export default connect(mapStateToProps, {
    register, setIsRegistered
})(Register);