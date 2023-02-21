import React from 'react'
import videoBanner from '../assets/videos/bannervideo.mp4'



const HeroBanner = () => {
    return (
        <section className='hero-banner container-fluid'>
            <div className="row">
                <div className="col-12 p-0">
                    <video src={ videoBanner } autoPlay loop muted className='video-banner'></video>
                    <div className='overlay'>
                        <div className="text-container d-flex flex-column align-items-center justify-content-center">
                            <h1 className='banner-title'>
                                Locked n' Loaded
                            </h1>
                            <p className='banner-description'>
                                Unleash Your Inner Marksman: Discover Our Collection of High-Powered Airsoft Guns
                            </p>
                            <a href="/shopnow" className='text-decoration-none text-white btn btn-banner'>Shop now!</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroBanner
