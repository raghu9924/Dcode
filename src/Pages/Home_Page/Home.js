import './Home.css'
import React from 'react'
import Banner from '../../Component/Banner'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import circle_image from '../../Assets/Images/circle.png'
import slider_image1 from '../../Assets/Images/1.png'
import slider_image2 from '../../Assets/Images/2.png'
import slider_image3 from '../../Assets/Images/3.png'
import slider_image4 from '../../Assets/Images/4.png'
import slider_image5 from '../../Assets/Images/5.png'
import heroImage from '../../Assets/Images/Vector2.png'
import BoardBanner from '../../Component/BoardBanner'

const Home = () => {
   const options = {
        margin: 100,
        nav: false,
        loop : true,
        items: 6,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                margin: 40,
                dots: true
            },
            500: {
                items: 3,
                margin: 50,
                dots: true,
            },
            600: {
                items: 3,
                dots: true,
                margin: 50,
            },
            800: {
                items: 3,
                margin: 80,
            },
            1199: {
                items: 6,
                margin: 100,
            }
        },
    };  
    return (
        <>
            <Banner banner_title="Build amazing things" />
            <div className="section_one">
                <div className="container">
                    <div className="section_inner">
                        <div className="text-center wow animate__animated animate__fadeIn">
                            <img src={circle_image} alt="cir_image" />    
                        </div>
                        <h3 className="wow animate__animated animate__fadeInUp" >Bring the best of open source to you, your team, and your company</h3>
                        <p className="wow animate__animated animate__fadeIn text-center" data-wow-delay="0.7s" >Relied upon by more than 11 million developers worldwide, npm is committed to making JavaScript development elegant, productive, and safe. The free npm Registry has become the center of JavaScript code sharing, and with more than one million packages, the largest software registry in the world. Our other tools and services take the Registry, and the work you do around it, to the next level.</p>
                    </div>
                </div>
            </div>
            <BoardBanner heading="We love open source"/>
            <div className="container">
                <div className="section_three">
                    <div className="owl_slider">
                        <h3 className="wow animate__animated animate__fadeInUp">Our Partners</h3>
                        <OwlCarousel className='owl-theme' {...options}>
                            <div className="item">
                            <div className="owl_image">
                                <img src={slider_image1} alt="card_image" />
                            </div>
                            </div>
                            <div className="item">
                            <div className="owl_image">
                                <img src={slider_image2} alt="card_image" />
                            </div>
                            </div>
                            <div className="item">
                            <div className="owl_image">
                                <img src={slider_image3} alt="card_image" />
                            </div>
                            </div>
                            <div className="item">
                            <div className="owl_image">
                                <img src={slider_image4} alt="card_image" />
                            </div>
                            </div>
                            <div className="item">
                            <div className="owl_image">
                                <img src={slider_image5} alt="card_image" />
                            </div>
                            </div>
                            <div className="item">
                            <div className="owl_image">
                                <img src={slider_image3} alt="card_image" />
                            </div>
                            </div>
                            <div className="item">
                            <div className="owl_image">
                                <img src={slider_image2} alt="card_image" />
                            </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
            <div className="section_four">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12 hero_center">
                            <div className="hero_left wow animate__animated animate__fadeInLeft">
                                <h2>Let's Code</h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic aliquid ex odit inventore rem laudantium nemo alias sequi error, quisquam aspernatur vitae eligendi porro incidunt! Enim, consequuntur! Alias quia placeat eligendi deleniti, ipsam quo tempore cum asperiores, repudiandae molestias dolore hic distinctio quasi nobis laudantium veniam vel suscipit sunt voluptate.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="hero_right">
                                <div className="heroImage text-center wow animate__animated animate__fadeInRight">
                                    <img src={heroImage} alt="hero_image"  />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
