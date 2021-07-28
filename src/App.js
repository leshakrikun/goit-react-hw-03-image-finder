import './App.css';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import Searchbar from './components/Searchbar/searchbar'
import ImageGallery from './components/ImageGallery/imageGallery'
import ImageGalleryItem from './components/ImageGalleryItem/imageGalleryItem'
import Loader from 'react-loader-spinner'
import API from '../src/components/Fetch/fetch';
import Button from './components/Button/button'


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
   
  state = {photos: [], errors:  null, loading: true, search: ''}

  Status = {
    IDLE: 'idle',
    PENDING: 'pending',
    RESOLVED: 'resolved',
    REJECTED: 'rejected',
  };

  handleSubmit = e => {
    e.preventDefault();
    API.resetPage()
    const form = e.target

    API.FetchPhoto(this.state.search)
      .then(photos => {
        this.setState({
          photos: photos.hits,
          status: 'resolved',
         /*  page: this.page +1 */
        });
      })
      .catch(error => this.setState({ error, status: 'rejected' }));
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
        status: 'resolved',
      });
    })
    .catch(error => this.setState({ error, status: 'rejected' })
    
    
    
    );
    
};

render() {
  /* const getPhoto = fetchPhoto(); */
  /* const {loading} = this.state */
 /*  console.log("getPhoto", this.getPhoto); */
  
    return (
     <>
    <Searchbar handleSubmit = {this.handleSubmit}  handleChange={this.handleChange} />
    <ImageGallery>
    <ImageGalleryItem photos= {this.state.photos} />
    </ImageGallery>
    {(this.state.photo) && <Button onClick={this.onClick}/>}
    

    
    </>
  )}}
