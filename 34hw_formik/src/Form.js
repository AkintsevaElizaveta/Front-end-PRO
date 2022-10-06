import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import style from './App.module.css'

export default function Form () {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone:'',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Field cannot be empty')
                .min(2, 'Name must be > 2 symbols'),
            email: Yup.string()
                .required('Field cannot be empty')
                .email('Invalid email address'),
            phone: Yup.string()
                .required('Field cannot be empty')
                .min(12, 'Enter valid phone number' )
                .matches(/^[380]/,'Invalid number, required format 380*********' )
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form
            className={style.form}
            onSubmit={formik.handleSubmit}
        >
            <div className={style.field_box}>
                <label
                    className={style.title}
                    htmlFor="name">Name</label>
                <input
                    className={style.input}
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
            </div>
            <strong className={style.error}>{formik.errors.name}</strong>
            <div className={style.field_box}>
                <label
                    className={style.title}
                    htmlFor="email">Email</label>
                <input
                    className={style.input}
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
            </div>
            <strong className={style.error}>{formik.errors.email}</strong>
            <div className={style.field_box}>
                <label
                    className={style.title}
                    htmlFor="phone">Telephone number</label>
                <input
                    className={style.input}
                    id="phone"
                    name="phone"
                    type="tel"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                />
            </div>
            <strong className={style.error}>{formik.errors.phone}</strong>
            <button type="submit" disabled={!formik.isValid}>Send</button>
        </form>
    );
}