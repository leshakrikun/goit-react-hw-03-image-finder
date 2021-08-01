import React from 'react';
import {createPortal} from 'react-dom'
import s from './modal.module.css';

const modalRoot = document.querySelector('#modal-root')

export default  function Modal ({onChange, state})  {
   const {largeImage, photos:{tags} } = state

    return(
        createPortal(
            <div className={s.overlay}  >
            <div className={s.modal} onChange={onChange}>
              <img src={largeImage} alt={tags}  />
            </div>
            </div>, modalRoot)
      )
    }




