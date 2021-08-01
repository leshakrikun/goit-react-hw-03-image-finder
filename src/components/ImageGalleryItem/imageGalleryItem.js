import React from 'react';
import s from './imageGalleryItem.module.css';

export default function ImageGalleryItem ({photos, onClick})  {

return(
<>
{photos.map (state =>(
<li className={s.imageGalleryItem} key={state.id}  onClick={onClick}  >
  <img src={state.webformatURL} lowsrc={state.largeImageURL}  alt={state.tags} className={s.imageGalleryItemImage}/>
</li>
))}
</>
)}

