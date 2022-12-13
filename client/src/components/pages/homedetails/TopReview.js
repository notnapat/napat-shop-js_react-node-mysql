import React from 'react'
// import reviewCpu from '../images/reviewCpu.jpg';
function TopReview() {
  return (
    <div className='imgreviewcpu'>
        {/* <img src={reviewCpu} alt="review cpu intel and amd" className='w-25 h-50'/> */}
        {/* <img src={cpu} alt="review cpu intel and amd" className='w-50 h-50'/> */}
        {/* <img src={require('../images/cpu.jpg')}/> */}
        <img src={require('../../images/review/reviewCpu.jpg')} alt="review cpu intel and amd" className='w-100 h-100'/>
    </div>    
  )
}

export default TopReview