import React, { useState } from 'react'
import Banner from '../../Component/Banner'
import contact_image from '../../Assets/Images/contact.jpg'
import './Contact.css'
import Accordian from '../../Component/Accordian'

const Contact = () => {
    const[enterName, setName] = useState('');
    const[enterNamevalid, setEnterNameValid] = useState(true);
    const [formIsValid, setformIsValid] = useState(false);
    const inputEventHandler = (event) =>{
        setName(event.target.value);
        if(enterNamevalid){
            setformIsValid(true)
        }else{
            setformIsValid(false)
        }
    } 
  
    const formSubmit = () =>{
        if(enterName.trim() === ''){
            setEnterNameValid(false);
            return;
        }
    }
    const formClass = enterNamevalid ? 'myform' : 'myform_invalid';
    return (
        <>
            <Banner banner_title="Contact" />
            <div className="contact_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12 order">
                            <div className="contact_form wow animate__animated animate__fadeInUp">
                                <form className={formClass}>
                                    <h3>Contact Us</h3>
                                    <div className="both_input d-flex justify-content-between">
                                        <div className="name_block input_block">
                                            <label htmlFor="Username">Enter Name {!enterNamevalid && <span className="text-danger fw-bold">*</span>}</label>
                                            <input onChange={inputEventHandler} type="text" id="Username" required placeholder="Enter Name"/>
                                        </div>
                                        <div className="name_block input_block">
                                            <label htmlFor="Surname">Enter Surname {!enterNamevalid && <span className="text-danger fw-bold">*</span>}</label>
                                            <input onChange={inputEventHandler} type="text" id="Surname" required placeholder="Enter Surname"/>
                                        </div>
                                    </div>
                                    <div className="name_block">
                                        <label htmlFor="eamil">Email {!enterNamevalid && <span className="text-danger fw-bold">*</span>}</label>
                                        <input onChange={inputEventHandler} type="email" id="eamil" required placeholder="abc@gmail.com"/>
                                    </div>
                                    <div className="textarea_block">
                                        <label htmlFor="message_here">Message {!enterNamevalid && <span className="text-danger fw-bold">*</span>}</label>
                                        <textarea onChange={inputEventHandler} name="message" id="message_here" required placeholder="Enter Message" rows="5"></textarea>
                                    </div>
                                    <div className="form_btn_block">
                                        <button onClick={formSubmit} disabled={!formIsValid} type="submit">Contact Us</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 contact_center">
                            <div className="contact_image wow animate__animated animate__fadeInUp">
                                <img src={contact_image} alt="contact" />
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
              <div className="accordian_section">
				<div className="container">
                    <h2 className="heading  wow animate__animated animate__fadeInUp">FAQ</h2>
        			<div className="accordian_inner">
                        <Accordian 
                            AccHeading="1. What is DCODE ?" 
                            accInfo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quod omnis ipsa, accusamus incidunt dolor, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Ad quod omnis ipsa, accusamus incidunt dolor, eaque aut, officia suscipit ut nostrum consequatur fuga nobis similique! Ipsa mollitia blanditiis vitae repellat nobis molestiae nulla laborum odit inventore." 
                        />
                        <Accordian 
                            AccHeading="2. How to use open source plateform ?" 
                             accInfo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quod omnis ipsa, accusamus incidunt dolor, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Ad quod omnis ipsa, accusamus incidunt dolor, eaque aut, officia suscipit ut nostrum consequatur fuga nobis similique! Ipsa mollitia blanditiis vitae repellat nobis molestiae nulla laborum odit inventore."
                        />
                        <Accordian 
                            AccHeading="3. Can we join DCODE usnig GitHub ?" 
                            accInfo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quod omnis ipsa, accusamus incidunt dolor, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Ad quod omnis ipsa, accusamus incidunt dolor, eaque aut, officia suscipit ut nostrum consequatur fuga nobis similique! Ipsa mollitia blanditiis vitae repellat nobis molestiae nulla laborum odit inventore."
                        />
                        <Accordian 
                            AccHeading="4. Which Code Editor we have to use ?" 
                            accInfo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quod omnis ipsa, accusamus incidunt dolor, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Ad quod omnis ipsa, accusamus incidunt dolor, eaque aut, officia suscipit ut nostrum consequatur fuga nobis similique! Ipsa mollitia blanditiis vitae repellat nobis molestiae nulla laborum odit inventore."
                        />
                        <Accordian 
                            AccHeading="4. Can we use DCODE Free ?" 
                            accInfo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quod omnis ipsa, accusamus incidunt dolor, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Ad quod omnis ipsa, accusamus incidunt dolor, eaque aut, officia suscipit ut nostrum consequatur fuga nobis similique! Ipsa mollitia blanditiis vitae repellat nobis molestiae nulla laborum odit inventore."
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact
