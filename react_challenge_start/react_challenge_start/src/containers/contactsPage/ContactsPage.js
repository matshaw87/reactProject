import { createSerializableStateInvariantMiddleware } from "@reduxjs/toolkit";
import { setUseProxies } from "immer";
import React from "react";
import { useState, useEffect } from "react";
import {ContactForm} from '../../compenents/contactForm/ContactForm';
import {TileList} from '../../components/tileList/TileList';

export const ContactsPage = () => {
  
  const contacts = props.contacts;
  const addContact = props.addContact;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setMail] = useState('');
  const [duplicate, setDuplicate] = useState('falese');


  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!duplicate) {

      addContact(name, phone, email);

      setName('');
      setPhone('');
      setEmail('');

    }
  };

  useEffect( () => {
    for (const contact of contacts) {
      if(name === contact.name) {
        setDuplicate(true);
      }
    }
  })
  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
        name={name}
        phone={phone}
        email={email}
        setEmail={setEmail}
        setName={setName}
        setPhone={setPhone}
        handleSubmit={handleSubmit} 
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList
        objArr={props.contacts}
        />
      </section>
    </div>
  );
};
