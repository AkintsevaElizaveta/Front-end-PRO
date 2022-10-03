import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { createContact } from "../store/actions/contact";
import style from './Contacts.module.css'


export default function NewItem({clearEditContact}) {

    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [phone, setPhone] = useState()

    function onFormSubmit(e) {
        e.preventDefault();

        const newContact = {
            firstName: firstName,
            lastName: lastName,
            phone:phone,
        };

        dispatch(createContact(newContact));
        clearEditContact(
            setFirstName(undefined),
            setLastName(undefined),
            setPhone(undefined)
        );

    }

    return (
        <form
            className={style.contacts_form}
            onSubmit={onFormSubmit}>

            <input className={style.input_field} value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="Ім'я"/>
            <input className={style.input_field} value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Прізвище"/>
            <input className={style.input_field} value={phone} onChange={e => setPhone(e.target.value)} placeholder="Номер телефону"/>
            <button className={style.contacts_form_btn}>Додати контакт</button>
        </form>
    )
}