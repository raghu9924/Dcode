import React, {useState} from 'react'
import {Link} from 'react-router-dom';

const Header = () => {    
    const [modal, setModal] = useState(false);
    const showModal = () => {
        setModal(true);
        document.body.classList.add("bodyOver");
    }
    const CloseModal = () =>{
        setModal(false);
        document.body.classList.remove("bodyOver");
    }

   const storeStorage = () => {
        if (!window.localStorage.length) {
            var username_info = document.getElementsByClassName('username');
            for (var x = 0; x < username_info.length; x++) {
                var theVal = username_info[x].value;
                if(theVal === '') { 
                    alert("Enter Information Please"); 
                    return false; 
                }
                var storeName = username_info[x].className + [x];
                localStorage.setItem(storeName, theVal);
            }
            alert("Login Success !");
            let text = "Logout";
            document.getElementById('login_text').innerHTML = text;
        }else{
            alert("You Already Login !");
        }
    }


    const FormSubmit = (e) =>{
        e.preventDefault();
        setModal(false);
        document.body.classList.remove("bodyOver");            
    }

    const openModal = modal ? 'modal_show' : 'modal_hide';
    return (
        <>
            <div className="header_wrapper">
                <div className="container">
                    <div className="header">
                        <div className="logo">
                            <Link to="/Dhaval/dcode/"> <b> DCODE</b> </Link>
                        </div>
                        <ul className="menus">
                            <li> <Link to="/Dhaval/dcode/About"> About </Link> </li>
                            <li> <Link to="/Dhaval/dcode/Contact"> Contact </Link> </li>
                            <li className="login_btn" onClick={showModal}>
                                <span className="userIcon" id="login_text"> Login </span>
                            </li>
                        </ul>
                    </div>

                    <div className="container">
                        <div className="Mymodal">
                            <div className={openModal}>
                                <div className="modal_box">
                                    <div className="d-flex justify-content-end">
                                        <button onClick={CloseModal} className="closeBtn"> X</button>
                                    </div>
                                    <div className="modal_form">
                                        <div className="modal_inner">
                                            <form onSubmit={FormSubmit}>
                                                <h3>Login Here</h3>
                                                <div className="name_block">
                                                    <label htmlFor="LoginUsername">Username</label>
                                                    <input type="text" id="LoginUsername" className="username" autoComplete="off" required placeholder="Username"/>
                                                </div>
                                                <div className="name_block">
                                                    <label htmlFor="password">Password</label>
                                                    <input type="Password" id="password" required placeholder="Password"/>
                                                </div>
                                                <div className="text-center">
                                                    <button type="Submit" className="loginBtn" onClick={storeStorage}>Login</button>
                                                </div>
                                                <div className="text-center">
                                                    <a href="#0" className="text-dark mt-3 d-inline-block">Create New Account here</a>
                                                </div> 
                                            </form>
                                        </div>
                                    </div>                            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;
