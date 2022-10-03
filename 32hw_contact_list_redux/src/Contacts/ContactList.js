import React from "react";
import style from './Contacts.module.css'
import {useDispatch} from "react-redux";
import {deleteItem} from "../store/actions/contact";

export default function List({ contacts }) {
    const dispatch = useDispatch();

    function onDeleteClick(e, contact) {
        e.stopPropagation();

        dispatch(deleteItem(contact.id));
    }

    return (
    <ul className={style.contacts_list} id="contactsList">
        {contacts.map((contact, i) => (

            <li key={contact.id}
                className={style.contacts_item}
            >
                <span>{contact.firstName}</span>
                <span>{contact.lastName}</span>
                <span>{contact.phone}</span>
                <button
                    className={style.contacts_form_btn}
                    onClick={e => onDeleteClick(e, contact)}
                >Видалити</button>
            </li>
        ))}
    </ul>
    );
}