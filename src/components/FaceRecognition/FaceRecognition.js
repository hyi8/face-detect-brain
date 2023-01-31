import React from "react";
import './FaceRecognition.css'

const FaceRecognition = (props) => {
    return (
        <div className="imgbox">
            <img id="image" crossOrigin="anonymous" ref={props.imgRef} alt="Invalid, please provide a proper url image link." width='600px'
              src={props.imageUrl}/>
             <canvas id="myCanvas" ref={props.canvasRef}/>
        </div>
    )
}

export default FaceRecognition;