import React from 'react'
import { Link } from 'react-router-dom'
// import { css } from 'styled-components'
// import {Link} from 'react-router-dom'
import '../pages.style/BrandLogos.css'

function BrandLogos() {
    return (

        <>
            <div className='body-logo'>
                <div className='container container-logo d-flex '>
                    <div className='row justify-content-between'>
                        <div className='col-lg-1 col-md-2 col-xl-1 box-logo-img '>
                            <Link href='' ><img src={require('../../images/brandlogo/logo-intel.png')} alt="logo intel" className='logo-img img-fluid  ' /> </Link>
                        </div>
                        <div className='col-lg-1 col-md-2 col-xl-1 box-logo-img '>
                            <Link href='#'  > <img src={require('../../images/brandlogo/logo-amd.png')} alt="logo amd" className='logo-img img-fluid  ' /> </Link>
                        </div>
                        <div className='col-lg-1 col-md-2 col-xl-1 box-logo-img '>
                            <Link href='#'> <img src={require('../../images/brandlogo/logo-nvidia2.png')} alt="logo nvidia2" className='logo-img img-fluid  ' /></Link>
                        </div>
                        <div className='col-lg-1 col-md-2 col-xl-1 box-logo-img '>
                            <Link href='#' > <img src={require('../../images/brandlogo/logo-asus.png')} alt="logo asus" className='logo-img img-fluid  ' /> </Link>
                        </div>
                        <div className='col-lg-1 col-md-2 col-xl-1 box-logo-img '>
                            <Link href='#' > <img src={require('../../images/brandlogo/logo-gigabyte2.png')} alt="logo gigabyte2" className='logo-img img-fluid  ' /> </Link>
                        </div>
                        <div className='col-lg-1 col-md-2 col-xl-1 box-logo-img '>
                            <Link href='#' > <img src={require('../../images/brandlogo/logo-galax2.png')} alt="logo galax2" className='logo-img img-fluid  ' /> </Link>
                        </div>
                        <div className='col-lg-1 col-md-2 col-xl-1 box-logo-img '>
                            <Link href='#' > <img src={require('../../images/brandlogo/logo-msi.png')} alt="logo msi" className='logo-img img-fluid  ' /> </Link>
                        </div>
                        <div className='col-lg-1 col-md-2 col-xl-1 box-logo-img '>
                            <Link href='#' > <img src={require('../../images/brandlogo/logo-zotac.png')} alt="logo zotac" className='logo-img img-fluid  ' /> </Link>
                        </div>
                        <div className='col-lg-1 col-md-2 col-xl-1 box-logo-img '>
                            <Link href='#' > <img src={require('../../images/brandlogo/logo-logitech.png')} alt="logo logitech" className='logo-img img-fluid  ' /> </Link>
                        </div>
                        <div className='col-lg-1 col-md-2 col-xl-1 box-logo-img '>
                            <Link href='#' > <img src={require('../../images/brandlogo/logo-thermaltake.png')} alt="logo thermaltake" className='logo-img img-fluid  ' /> </Link>
                        </div>
                        <div className='col-lg-1 col-md-2 col-xl-1 box-logo-img '>
                            <Link href='#' > <img src={require('../../images/brandlogo/logo-corsair.png')} alt="logo corsair" className='logo-img img-fluid  ' /> </Link>
                        </div>
                        <div className='col-lg-1 col-md-2 col-xl-1 box-logo-img '>
                            <Link href='#' > <img src={require('../../images/brandlogo/logo-hyperx.png')} alt="logo hyperx" className='logo-img img-fluid  ' /> </Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default BrandLogos