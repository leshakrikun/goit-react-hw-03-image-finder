import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './imageGalleryItem.module.css';

export default function ImageGalleryItem ({photos})  {
return(
<>


{photos.map (state =>(
<li className={s.imageGalleryItem} key={state.id}>
  <img src={state.webformatURL} alt={state.tags} className={s.imageGalleryItemImage}/>
</li>
))
}
</>
)}

