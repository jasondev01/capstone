import React from 'react'

import brand1 from "../assets/images/brand1.avif"
import brand2 from "../assets/images/brand2.avif"
import brand3 from "../assets/images/brand3.avif"
import brand4 from "../assets/images/brand4.avif"
import brand5 from "../assets/images/brand5.avif"

const Brands = () => {
    return (
        <div className='brands container-xl py-5'>
            <h2 className='mb-5 mx-auto text-center w-25'>
                Brands
            </h2>
            <div className="row d-flex gap-2 align-items-center justify-content-center">
                <div className="col-2">
                    <img src={ brand1 } alt="" />
                </div>
                <div className="col-2">
                    <img src={ brand2 } alt="" />
                </div>
                <div className="col-2">
                    <img src={ brand3 } alt="" />
                </div>
                <div className="col-2">
                    <img src={ brand4 } alt="" />
                </div>
                <div className="col-2">
                    <img src={ brand5 } alt="" />
                </div>

            </div>
        </div>
    )
}

export default Brands
