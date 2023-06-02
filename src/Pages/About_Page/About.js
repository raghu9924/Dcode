import './About.css'
import React, {useState} from 'react'
import Banner from '../../Component/Banner'
import tabImg1 from '../../Assets/Images/p1.png'
import tabImg2 from '../../Assets/Images/p2.png'
import tabImg3 from '../../Assets/Images/p3.png'
import tabImg4 from '../../Assets/Images/p4.png'
import BoardBanner from '../../Component/BoardBanner'
import GallaryBox from '../../Component/GallaryBox'
import gallary_image1 from '../../Assets/Images/img1.png'
import gallary_image2 from '../../Assets/Images/img2.png'
import gallary_image3 from '../../Assets/Images/img3.png'
import gallary_image4 from '../../Assets/Images/img4.png'
import gallary_image5 from '../../Assets/Images/img5.png'
import gallary_image6 from '../../Assets/Images/img6.png'

const About = () => {
    const [tab, setTab] = useState('tab1');
	const get_text = (text, event) => {
        [...event.target.parentNode.children].forEach(element => {
            element.classList.remove('active');
        });
        event.target.classList.add('active');
	    setTab(text);
	}

    return (
        <>
            <Banner style={{ height: '300px' }} banner_title="About" />
            <div className="about_section">
                <div className="container">
                    <div className="about_title  wow animate__animated animate__fadeInUp">
                        <h2>Tabs Section</h2>
                    </div>
                    <div className="tab_section  wow animate__animated animate__fadeInUp">
                        <div className="tab_block">
                            <button className="active" onClick={(event) => {get_text('tab1', event)}} type="button"> Cards </button>
                            <button onClick={(event) => {get_text('tab2', event)}} type="button">Posts</button>
                            <button onClick={(event) => {get_text('tab3', event)}} type="button">Stories</button>
                            <button onClick={(event) => {get_text('tab4', event)}} type="button">Invites</button>
                        </div>
                    </div>
                    <div className="tab_inner  wow animate__animated animate__fadeInUp">
                        {tab === 'tab1' ? (
                        <div className="tab_content" id="tab2">
                            <div className="tab_image">
                                <img src={tabImg1} alt=""/>
                            </div>
                            <div className="tab_data">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur omnis voluptatum modi. Repellat laborum unde harum itaque quia iusto quas. Itaque, iste? Ducimus, incidunt commodi placeat dolore laudantium, vitae laborum quibusdam unde officia possimus reiciendis dignissimos.</p>
                            </div>
                        </div>
                        ) : ('')}

                        {tab === 'tab2' ? (
                        <div className="tab_content" id="tab2">
                        <div className="tab_image">
                                <img src={tabImg2} alt=""/>
                            </div>
                            <div className="tab_data">
                                <p>Lamet consectetur, adipisicing elit. Consectetur omnis voluptatum modi. Repellat laborum unde harum itaque quia iusto quas. Itaque, iste? Ducimus, incidunt commodi placeat dolore laudantium, vitae laborum quibusdam unde officia possimus reiciendis dignissimos ratione corporis dolor! Excepturi suscipit, fugiat dicta ipsum animi eligendi repudiandae dolore? Ipsa, dolorem.</p>
                            </div>
                        </div>
                        ) : ('')}

                        {tab === 'tab3' ? (
                        <div className="tab_content" id="tab2">
                        <div className="tab_image">
                                <img src={tabImg3} alt=""/>
                            </div>
                            <div className="tab_data">
                                <p> Ipsum adipisicing elit. Consectetur omnis voluptatum modi. Repellat laborum unde harum itaque quia iusto quas. Itaque, iste? Ducimus, incidunt commodi placeat dolore laudantium, vitae laborum quibusdam unde officia possimus reiciendis dignissimos ratione corporis dolor! Excepturi suscipit, fugiat dicta ipsum animi eligendi repudiandae dolore? Ipsa, dolorem.</p>
                            </div>
                        </div>
                        ) : ('')}

                        {tab === 'tab4' ? (
                        <div className="tab_content" id="tab2">
                        <div className="tab_image">
                                <img src={tabImg4} alt=""/>
                            </div>
                            <div className="tab_data">
                                <p>Opsum dolor sit amet consectetur, adipisicing elit. Consectetur omnis voluptatum modi. Repellat laborum unde harum itaque quia iusto quas. Itaque, iste? Ducimus, incidunt commodi placeat dolore laudantium, vitae laborum quibusdam unde officia possimus reiciendis dignissimos ratione corporis dolor! Excepturi suscipit, fugiat dicta ipsum animi eligendi repudiandae dolore? Ipsa, dolorem.</p>
                            </div>
                        </div>
                        ) : ('')}
                    </div>
                </div>
            </div>
            <BoardBanner heading="1.5 Million Users"/>
            <div className="gallary_section">
                <div className="container">
                    <h3 className="g_heading">Gallary Section</h3>
                    <div className="g_inner">
                        <GallaryBox Gimage={gallary_image2}/>
                        <GallaryBox Gimage={gallary_image1}/>
                        <GallaryBox Gimage={gallary_image3}/>
                        <GallaryBox Gimage={gallary_image4}/>
                        <GallaryBox Gimage={gallary_image5}/>
                        <GallaryBox Gimage={gallary_image6}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
