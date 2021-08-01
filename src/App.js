import React from 'react';
import './App.css'
import Searchbar from './components/Searchbar/searchbar'
import ImageGallery from './components/ImageGallery/imageGallery'
import ImageGalleryItem from './components/ImageGalleryItem/imageGalleryItem'
import Loader from 'react-loader-spinner'
import API from '../src/components/Fetch/fetch';
import Button from './components/Button/button'
import Modal from './components/Modal/modal'


export default class App extends React.Component {
   
  state = {photos: [], errors:  null, loading: false, search: '', showModal: false, largeImage:''}

 componentDidMount () {
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('click', this.handleMouseClick);
   } 

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    window.addEventListener('click', this.handleMouseClick);
  } 
 
handleKeyDown = (e) => {
   if (e.code === 'Escape') {
   this.toggleModal();
  }
}

handleMouseClick = (e) => {
  if (this.state.showModal && e.target.tagName==='DIV') {
    this.toggleModal();
   }
}

  toggleModal = () =>{
    this.setState({
      showModal: false
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    API.resetPage()
    this.setState({loading:true})
    const form = e.target

    API.FetchPhoto(this.state.search)
      .then(photos => {
        this.setState({
          photos: photos.hits,
          loading:false
        });
      })
      .catch(error => this.setState({
         errors: 'Повторите запрос',
         loading:false
        }));
      form.reset();
  };
    
   handleChange = (e) => {
    this.setState({ search: e.target.value });
  }

  onMoreClick = () => {
    API.FetchPhoto(this.state.search)
    .then(photos => {
      this.setState({
        photos: [...this.state.photos, ...photos.hits],
      });
    })
    .catch(errors => this.setState({ errors: 'Повторите запрос', loading:false })
    )
    .finally(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      })
};


handleOpenModal = e => {
  if (e.currentTarget.tagName === 'LI') {
    this.setState({
      showModal: !this.state.showModal,
      largeImage: e.target.lowsrc,
    });
  }
};

render() {
  const { showModal, photos, loading, errors } = this.state;
    return (
    <>
    {showModal &&  (
          <Modal onChange={this.handleKeyDown} state={this.state} />
        )}
    <Searchbar handleSubmit = {this.handleSubmit}  handleChange={this.handleChange} />
    {loading && <Loader 
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} className='loader'>
        </Loader>}
    <div className='container'>
    {errors && <h2>Ошибка запроса</h2>}
    <ImageGallery>
    <ImageGalleryItem photos= {photos} onClick={this.handleOpenModal}/>
    </ImageGallery>
    {(photos.length!==0 && photos.length %12===0) && <Button onClick={this.onMoreClick}/>}
    </div>
    </>
  )}}
