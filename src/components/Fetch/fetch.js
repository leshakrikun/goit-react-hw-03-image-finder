const key = '21938998-67fd96e5d4868b12a769f8729'
let page = 0
function FetchPhoto(search) {
  
incrementPage()
    return fetch(`https://pixabay.com/api/?q=${search}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`).then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error(`Нет покемона с именем ${search}`));
    });
    
  }
  
  const api = {
    FetchPhoto,
    resetPage,
    page
  };
  function incrementPage() {
    page += 1;
    console.log('page', page);
  }
  
 function resetPage() {
    page = 0;
  }
  export default api;