import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = (props) => {
    return (
        <div>
            <p className="header">
                {'This Magic Brain will detect faces! Give it a try!'}
            </p>
            <div className="input-box">
                <div className='border'>
                    <input type="text" onChange={props.OnInputChange}/>
                    <button onClick={props.onSubmit}>Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm ;