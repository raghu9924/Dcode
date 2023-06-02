import React from 'react'
import MyButton from './MyButton'

const BoardBanner = (props) => {
    return (
        <div className="section_two">
        <div className="container">
            <div className="section_inner">
                <h4 className="wow animate__animated animate__fadeInUp">{props.heading}</h4>
                <p className="wow animate__animated animate__fadeIn" data-wow-delay="0.7s">At npm, Inc., we're proud to dedicate teams of full-time employees to operating the npm Registry, enhancing the CLI, improving JavaScript security, and other projects that support and nurture a vibrant open source community.</p>
                <MyButton btn_title="Let's Go" />
            </div>
        </div>
        </div>
    )
}

export default BoardBanner
