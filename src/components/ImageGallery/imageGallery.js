import React from 'react';
import s from './imageGallery.module.css';

export default function ImageGallery ({children})  {
return(
<ul className={s.imageGallery} >
 {children}
</ul>
)}