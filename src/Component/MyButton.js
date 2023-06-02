import React from 'react'

const MyButton = (props) => {
    return (
        <>
            <div className="cm_button">
                <a href="#0" className="wow animate__animated animate__fadeInUp" data-wow-delay="0.7s">
                    {props.btn_title}
                </a>
            </div>
        </>
    )
}

export default MyButton
