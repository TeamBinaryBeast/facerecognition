import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import './App.css';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Owner from './components/Owner/Owner';

const app = new Clarifai.App({
  apiKey: '9db18ae0a1f14727b73653a6c09da2e5'
 });
const particlesOption={
  particles:{
    number:{
      value: 40,
      density:{
        enable:true,
        value_area:700
      }
    }
  }
}
class App extends React.Component{
  constructor(){
    super();
    this.state={
      input: '',
      imageUrl: '',
      box: {}
    }
  }

  calculateFaceLocation=(data)=>{
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image= document.getElementById('inputimage');
    const width = Number(image.width);
    const height= Number(image.height);
    return {
      leftCol: clarifaiFace.left_col *width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width -(clarifaiFace.right_col * width),
      bottomRow: height -(clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox=(boxo)=>{
    console.log('aito',boxo);
    this.setState({box : boxo});
  }

  onInputChange=(event) =>{
    this.setState({input:event.target.value});
  }

  onButtonSubmit=() =>{
    this.setState({ imageUrl:this.state.input });
    app.models.predict
    ( Clarifai.FACE_DETECT_MODEL,
      this.state.input)
      .then(response=>this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err=>console.log(err));
  }
  render(){
    return (
      <div className="App">
      <Particles 
      style={{position: 'absolute',top: '0',right: '0',bottom: '0',left: '0',zIndex: '-1'}} 
        params={particlesOption}/>
        <Navigation/>
          <Logo />
          <Rank />
          <ImageLinkForm 
          onInputChange={this.onInputChange}
            onButtonSubmit={this.onButtonSubmit}
          />
          <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
          <Owner />
      </div>
    );
  }
  }
  

export default App;
