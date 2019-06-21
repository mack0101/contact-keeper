import React, {useReducer} from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Person One',
        email: 'person@one.test',
        phone: '111-111-1121',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Person Two',
        email: 'person@two.test',
        phone: '111-111-1221',
        type: 'personal'
      },
      {
        id: 3,
        name: 'Person Three',
        email: 'person@three.test',
        phone: '111-111-1321',
        type: 'professional'
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // add contact
  const addContact = contact => {
    contact.ad = uuid.v4();
    dispatch({type: ADD_CONTACT, payload: contact});
  };

  // delete contact
  const deleteContact = id => {
    dispatch({type: DELETE_CONTACT, payload: id});
  };

  // set current contact

  // clear current contact

  // update contact

  // filter contacts

  // clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
        deleteContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
