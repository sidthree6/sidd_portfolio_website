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
          <span className='font-bold text-slate-500 italic'>Programming Language Used :</span> C#
        </div>
        <div className='m-2'>
          <span className='font-bold text-slate-500 italic'>Software Used :</span> Unity 2018, Visual Studio & Adobe Photoshop
        </div>
        <div className='m-2'>
          <span className='font-bold text-slate-500 italic'>Github Link : </span> 
          <a target="_blank" href="https://github.com/sidthree6/beachballmadness" className='text-blue-400'>https://github.com/sidthree6/beachballmadness</a>
        </div>
        <div className='m-2'>
          <span className='font-bold text-slate-500 italic'>Description : </span> 
          <div className='mb-5'>
          A very simple 2D game made in Unity using C# language. Created various gameplay elements such as scoreboard, increasing difficulty as you make a progress in game. Also has random background props generator and infinite background.
          </div>
          
        </div>   

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
