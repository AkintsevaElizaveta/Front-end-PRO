import React, {useEffect, useState} from "react";
import ContactsList from './ContactList';
import {useDispatch, useSelector} from "react-redux";
import NewContactForm from "./NewContactForm";
import {fetchList} from "../store/actions/contact";


export default function Contacts() {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts);
    const [editContact, setEditContact] = useState();

    useEffect(() => {
        dispatch(fetchList());
    }, [])

    return (
        <>
            <NewContactForm
                key={editContact?.id}
                editContact={editContact}
                clearEditContact={() => setEditContact}
            />
            <ContactsList
                contacts={contacts}
                onEdit={setEditContact}
            />
        </>
    )
}