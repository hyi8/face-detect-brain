import React, {useState, useEffect, useRef} from 'react';
import ParticlesBg from 'particles-bg';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import * as faceapi from "face-api.js";
import './App.css';


const Main=()=> {
  
  const [input, setInput] = useState('')
  const [imageUrl, setImageUrl] = useState('https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA16HrfA.img?w=1920&h=1080&q=60&m=2&f=jpg')


  const OnInputChange = (event) => {
    setInput(event.target.value)
  };

  const onSubmit = () => {
    console.log('click')
    if(input != ""){
      setImageUrl(input)
      handleImage()
    }
  }
  
  const imgRef = useRef();
  const canvasRef = useRef();


  const handleImage = async () => {
    console.log(imgRef)
    const detections = await faceapi
        .detectAllFaces(imgRef.current, new faceapi.TinyFaceDetectorOptions())
        //.withFaceLandmarks()
        //.withFaceExpressions();
        
        console.log(detections)

        canvasRef.current.innerHtml=faceapi.createCanvasFromMedia(imgRef.current);
        faceapi.matchDimensions(canvasRef.current,{
          width: 600,
          height: document.getElementById("image").height
        })
        const resized = faceapi.resizeResults(detections,{
          width: 600,
          height: document.getElementById("image").height
        })
        faceapi.draw.drawDetections(canvasRef.current, resized);
        //faceapi.draw.drawFaceExpressions(canvasRef.current, resized);
        //faceapi.draw.drawFaceLandmarks(canvasRef.current, resized);

  };
  useEffect(()=>{
    const loadModels =()=> {
    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri('./models'),
      //faceapi.nets.faceLandmark68Net.loadFromUri('./models'),
      //faceapi.nets.faceExpressionNet.loadFromUri('./models')
    ]).then (handleImage)
      .catch((e)=>console.log(e));
    };
    imgRef.current && loadModels();
  },[]);
 
  
  return (
    <div className="App">
     <ParticlesBg   color= "#7fffd4" num={70} type="cobweb" bg={true} />
     <Logo />
     <ImageLinkForm OnInputChange={OnInputChange} 
      onSubmit={onSubmit}/>
      <FaceRecognition  imgRef={imgRef}
       imageUrl={imageUrl} canvasRef={canvasRef} /> 
    </div>
  );
}

export default Main;