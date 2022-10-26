import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ImageOne from '../../public/sdb/one.png'

const NeuralNetwork: NextPage = () => {

  return (
    <div>
      <div className="font-bold mb-5 text-xl text-slate-600">
      Room Escape – Unreal Engine 4 (C++)
      </div>      
      <div>
        <div className='m-2'>
          <span className='font-bold text-slate-500 italic'>Programming Language Used :</span> C++, Blueprint
        </div>
        <div className='m-2'>
          <span className='font-bold text-slate-500 italic'>Software Used :</span> Unreal Engine 4 & Visual Studio
        </div>
        <div className='m-2'>
          <span className='font-bold text-slate-500 italic'>Github Link : </span> 
          <a href="https://github.com/sidthree6/RoomEscape" className='text-blue-400'>https://github.com/sidthree6/RoomEscape</a>
        </div>
        <div className='m-2'>
          <span className='font-bold text-slate-500 italic'>Description : </span> 
          <div className='mb-5'>
          A simple room escape demo, player has to find 3 odd looking barrels and put them on skid in order to open a door. Demo was made to demonstrate skills in Unreal Engine using blueprint and C++
          </div>
          
        </div>   

      </div>  
      <div className='m-5'>
      <iframe width="420" height="315"
src="https://www.youtube.com/embed/KfUODFCJRyE?autoplay=1&mute=1">
</iframe>
      </div>    
      
      <div className='mt-6 text-center'>
        <Link href={"../"}>
            <a className="font-bold underline hover:no-underline">
                Go Back
            </a>
        </Link>
      </div>
    </div>
  );
};

export default NeuralNetwork
