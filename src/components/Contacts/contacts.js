import React from 'react';
import s from './contacts.module.css';

const Contacts  = ({contacts, onDelete}) => {
     return (
         <div className={s.contactListformat}>
        <ul className={s.contactList}>
        {contacts.map(state =>(
            <li key={state.id}>
                {state.name}: { }
                {state.number}
                <button
          type="button"
          className={s.contactItem__btn}
          onClick={() => onDelete(state.id)}>
          Удалить
        </button>
            </li>
        ))}
        </ul>
        </div>
    )}
export default  Contacts;