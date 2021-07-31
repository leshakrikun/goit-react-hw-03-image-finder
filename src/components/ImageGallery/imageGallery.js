import React from 'react';
import s from './imageGallery.module.css';

export default function ImageGallery ({children, modal, onClick})  {
return(
<ul className={s.imageGallery} >
 {children}
</ul>
)}