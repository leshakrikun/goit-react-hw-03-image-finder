import React from 'react';
import s from './button.module.css';

export default  function Button ({onClick})  {

return(
  
  <button onClick={onClick} className={s.button} id="more">
  Load more
</button>
  
  )
}