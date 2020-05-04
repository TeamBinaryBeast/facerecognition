import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm =({onInputChange,onButtonSubmit}) =>{
    return(
        <div className='tc nij'>
        <p className='f4 white b'>
            {'This Magic Robot Will detect face in your picture .Give it a try!'}
        </p>
            <div className='center'>
            <div className='form center pa4 br3 shadow-3 patt'>
                <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange} />
                <button className='w-30 grow f4 link pa2 pv2 dib white bg-light-purple'
                onClick={onButtonSubmit}
                >Detect</button>
            </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;