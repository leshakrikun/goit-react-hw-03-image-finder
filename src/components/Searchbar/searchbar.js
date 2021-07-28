import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './searchbar.module.css';

function Searchbar ({handleSubmit,  handleChange, /* searchValue */ })  {
    return(
        <header className={s.searchbar}>
  <form onSubmit={handleSubmit} className={s.searchForm}>
    <button type="submit" className={s.searchFormButton}>
      <span className={s.searchFormButtonLabel}>Search</span>
    </button>
    <input
      className={s.searchFormInput}
      type="text"
      onChange={handleChange} 
      /* value={searchValue} */
      
      /* autocomplete="off" */
      /* autofocus */
      placeholder="Search images and photos"
    />
  </form>
</header>
    )
}
export default  Searchbar;