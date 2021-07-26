import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './imageGallery.module.css';

export default function ImageGallery ({children})  {
return(
<ul className={s.imageGallery} >
 {children}
</ul>
)}