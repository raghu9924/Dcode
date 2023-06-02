import React from 'react'

const GallaryBox = (props) => {
    return (
        <>  
        <div className="imageBox">
            <img src={props.Gimage} alt="gallary"  />
        </div>
        </>
    )
}

export default GallaryBox
