import React from 'react'

const Banner = (props) => {
    return (
        <>
            <div className="banner">
                <div className="banner_innner">
                    <div className="">
                        <h1 className="wow animate__animated animate__fadeInUp"> {props.banner_title}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
