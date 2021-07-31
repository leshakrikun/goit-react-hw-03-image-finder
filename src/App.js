
import React from 'react';
import './App.css'
import axios from 'axios';
import Searchbar from './components/Searchbar/searchbar'
import ImageGallery from './components/ImageGallery/imageGallery'
import ImageGalleryItem from './components/ImageGalleryItem/imageGalleryItem'
import Loader from 'react-loader-spinner'
import API from '../src/components/Fetch/fetch';
import Button from './components/Button/button'
import Modal from './components/Modal/modal'



const CustomLoader = () => (
  <Loader
  type="Grid"
  color="#00BFFF"
  height={100}
  width={100}
  timeout={3000}
  />
);


export default class App extends React.Component {
   
  state = {photos: [], errors:  null, imageStatus:'', loading: true, search: '', showModal: false, largeImage:''}

  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
    const form = e.target

    API.FetchPhoto(this.state.search)
      .then(photos => {
        this.setState({
          photos: photos.hits,
        });
      })
      .catch(error => this.setState({ error}));
      form.reset();
  };
    
  


  handleChange = (e) => {
    this.setState({ search: e.target.value });
  }

  onClick = () => {
    API.FetchPhoto(this.state.search)
    .then(photos => {
      this.setState({
        photos: photos.hits,
       
      });
    })
    .catch(error => this.setState({ error })

    ); 
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
  const { showModal } = this.state;
  
    return (
    <>
    {showModal &&  (
          <Modal onChange={this.handleKeyDown} state={this.state}>
            {/* {imageStatus === "loading" && <Loader />} */}
            {/* <img src={largeImage} alt="tags" onLoad={this.onImageLoaded} /> */}
          </Modal>
        )}
    <Searchbar handleSubmit = {this.handleSubmit}  handleChange={this.handleChange} />
    <div className='container'>
    <ImageGallery>
    <ImageGalleryItem photos= {this.state.photos} onClick={this.handleOpenModal}/>
    </ImageGallery>
    {(this.state.photos[1]) && <Button onClick={this.onClick}/>}
    </div>
    </>
  )}}
