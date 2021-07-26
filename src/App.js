import './App.css';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import Searchbar from './components/Searchbar/searchbar'
import ImageGallery from './components/ImageGallery/imageGallery'
import ImageGalleryItem from './components/ImageGalleryItem/imageGalleryItem'
import Loader from 'react-loader-spinner'


const CustomLoader = () => (
  <Loader
  type="Grid"
  color="#00BFFF"
  height={100}
  width={100}
  timeout={3000}
  />
);
let car='cat'

const fetchPhoto = async () => {
  return await axios.get(
    `https://pixabay.com/api/?q=${car}&page=1&key=21938998-67fd96e5d4868b12a769f8729&image_type=photo&orientation=horizontal&per_page=12`
  );
};
let value
export default class App extends React.Component {
   
  state = {photos: [], errors:  null, loading: true, search: "car"}
 

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target.value
    console.log(2, form);
    /* const result = this.state.contacts.find( ({ name }) => name === this.state.name ); */
   /*  if(result){
      alert(this.state.name + ` is already in contact`)
    } else { */
      this.setState((state) => { 
       
        return {
          search:value
        }
      })
   /*  form.reset(); */
  } 


  handleChange = (e) => {
    return value = e.target.value  
  }



componentDidUpdate(){
  console.log("this.search", this.search);
  car = this.state.search
  console.log("this.search", car);
  
}



  componentDidMount(){
 
    (async () => {
      try {
        const photo = await fetchPhoto();
        console.log("photo",photo); 
        this.setState({photos: photo.data.hits})
    } catch (error) {
       console.log("error",); 
      
    }
  
  })()
}

render() {
  const getPhoto = fetchPhoto();
  /* const {loading} = this.state */
  console.log("getPhoto", this.getPhoto);
  
    return (
     <>
    <Searchbar handleSubmit = {this.handleSubmit}  handleChange={this.handleChange} />
{!this.state.search ? (<p>жду запрос</p> ) : (
    <ImageGallery>
    <ImageGalleryItem photos= {this.state.photos} />
    </ImageGallery>)

    }
    </>
  )}}













 /*  {loading ? (<CustomLoader />) :( */