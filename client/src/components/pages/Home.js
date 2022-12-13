import React from 'react'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import './pages.style/Home.css'
import TopReview from './homedetails/TopReview'
import BrandLogos from './homedetails/BrandLogos'

function Home() {
  return (
    <>

      <div className='body-homepage'>
        <div className='container-fulid'>
          <Navbar />
        </div>
        <div className=' container  d-flex w-auto h-sidebar p-0 border border-danger '>
          <div className=' w-25 h-100'>
            <Sidebar />
          </div>
          <div className='w-75 h-auto'>
            <TopReview />
          </div>
        </div>

        <div className='pt-1'>
          <BrandLogos />
        </div>
      </div>
    </>
  )
}

export default Home