import React from 'react'
import pan from './assets/Frame 8.png'
import lady from './assets/Frame 11.png'
function Reviews() {
    return (
        <div>
            <div className='bg-[#DDB892] h-[20dvh]'>
                <h1 className='font-semibold ' >Reviews</h1>
                <p className='text-white text-xl mt-8'>what are they saying about us</p>
            </div>
            <div className='bg-black' >
                <div className='flex  gap-8 items-center justify-center h-[20vh] '>
                    <div className='bg-[#E3D5CA] w-[15dvh] h-[10dvh]' >box2</div>
                    <div className='bg-[#E3D5CA] w-[15dvh] h-[10dvh]' >box2</div>
                    <div className='bg-[#E3D5CA] w-[15dvh] h-[10dvh]' >box2</div>
                    <div className='bg-[#E3D5CA] w-[15dvh] h-[10dvh]' >box2</div>
                    <div className='bg-[#E3D5CA] w-[15dvh] h-[10dvh]' >box2</div>

                </div>


            </div>
            <div className='bg-green'>
                <img  className= 'w-[193dvh] 'src={pan} alt='pancakes'></img>
            </div>
            <div className='flex justify-between bg-black ' >
                <div className='grid grid-cols-12 gap-5 my-5'>
                <div className='bg-[#FFFFFF] col-span-6 ml-10  '>hello</div>
                <div className='mr-20 b-8 col-span-6'><img src={lady}></img></div>
                </div>
            </div>
        </div>



    )
}

export default Reviews