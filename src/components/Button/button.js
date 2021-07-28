import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './button.module.css';

export default  function Button ({onClick})  {

return(
  
  <button onClick={onClick} className={s.Button} id="more">
  Load more
</button>
  
  )
}