import React from 'react'



const Footer = () => {
    return (
    <div className='container-fluid footer d-flex align-items-end'>
        <footer className='container-xl pt-4 pb-2'>
            <div className="row d-flex align-items-start pb-5"
            >
                <div className="col-3">
                    <h5 className='text-center'>
                        Subscribe to our Newsletter
                    </h5>
                    <div className="input-group mb-3 mx-auto">
                        <input type="text" className="form-control rounded-0" placeholder="Subscribe" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <span className="input-group-text rounded-0" id="basic-addon2"> <i className="bi bi-bell-fill"></i></span>
                    </div>

                </div>

                <div className="col-3">
                    <h5 className='text-center'>
                        Customer Service
                    </h5>
                    <ul className='list-unstyled p-0 m-0 d-flex justify-content-center'>
                        <span className='d-flex flex-column gap-1'>
                            <li className='list'>
                                <a href="
                                " className='text-decoration-none text-white'>
                                Contact Us
                                </a>
                            </li>
                            <li className='list'>
                                <a href="
                                " className='text-decoration-none text-white'>
                                Returns & Exchange
                                </a>
                            </li>
                            <li className='list'>
                                <a href="
                                " className='text-decoration-none text-white'>
                                FAQs
                                </a>
                            </li>
                        </span>
                    </ul>
                </div>

                <div className="col-3">
                    <h5 className='text-center'>
                        Popular Categories
                    </h5>
                    <ul className='list-unstyled p-0 m-0 d-flex justify-content-center'>
                        <span className='d-flex flex-column gap-1'>
                            <li className='list'>
                                <a href="
                                " className='text-decoration-none text-white'>
                                Airsoft Pistols
                                </a>
                            </li>
                            <li className='list'>
                                <a href="
                                " className='text-decoration-none text-white'>
                                Airsoft Shotguns
                                </a>
                            </li>
                            <li className='list'>
                                <a href="
                                " className='text-decoration-none text-white'>
                                Airsoft Rifles
                                </a>
                            </li>
                            <li className='list'>
                                <a href="
                                " className='text-decoration-none text-white'>
                                Airsoft Snipers
                                </a>
                            </li>
                        </span>
                    </ul>
                </div>

                <div className="col-3">
                    <h5 className='text-center'>
                        Follow Us
                    </h5>
                    <ul className='list-unstyled p-0 m-0 d-flex justify-content-center'>
                        <span className='d-flex flex-row gap-3'>
                            <li className='list'>
                                <a href="
                                " className='text-decoration-none text-white'>
                                <i className="bi bi-facebook"></i>
                                </a>
                            </li>
                            <li className='list'>
                                <a href="
                                " className='text-decoration-none text-white'>
                                <i className="bi bi-instagram"></i>
                                </a>
                            </li>
                            <li className='list'>
                                <a href="
                                " className='text-decoration-none text-white'>
                                <i className="bi bi-linkedin"></i>
                                </a>
                            </li>
                            <li className='list'>
                                <a href="
                                " className='text-decoration-none text-white'>
                                <i className="bi bi-twitter"></i>
                                </a>
                            </li>

                            <li className='list'>
                                <a href="
                                " className='text-decoration-none text-white'>
                                <i className="bi bi-youtube"></i>
                                </a>
                            </li>
                        </span>
                    </ul>
                </div>
            
            </div>
            <div className="row text-center d-flex flex-column align-items-end">
                <h5 className='py-2 m-0'>
                    <i className="bi bi-c-circle"></i> Locked n' Loaded. All rights reserved. 
                </h5>
                <ul className='d-flex p-0 m-0 gap-4 justify-content-center'>
                    <li className='fs-6'>
                        Privacy Policy
                    </li>
                    <li className='fs-6'>
                        Terms
                    </li>
                    <li className='fs-6'>
                        Accessibility Statement
                    </li>
                </ul>
            </div>
        </footer>
    </div>
        
    )
}

export default Footer
