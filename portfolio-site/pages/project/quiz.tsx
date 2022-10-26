import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ImageOne from '../../public/sdb/one.png'

const NeuralNetwork: NextPage = () => {

  return (
    <div>
      <div className="font-bold mb-5 text-xl text-slate-600">
      Quiz Builder – PHP
      </div>      
      <div>
        <div className='m-2'>
          <span className='font-bold text-slate-500 italic'>Programming Language Used :</span> PHP
        </div>
        <div className='m-2'>
          <span className='font-bold text-slate-500 italic'>Software Used :</span> Adobe DreamWeaver, phpMyAdmin
        </div>
        <div className='m-2'>
          <span className='font-bold text-slate-500 italic'>Github Link : </span> 
          <a href="https://github.com/sidthree6/QuizBuilder" className='text-blue-400'>https://github.com/sidthree6/QuizBuilder</a>
        </div>
        <div className='m-2'>
          <span className='font-bold text-slate-500 italic'>Description : </span> 
          <div className='mb-5'>
          Quiz Builder was mini passion project I have created. Main goal for this application is to allow user to create quizes and share with others. My main goal for this application was to allow teacher/parents to create a quiz for their children and sharing it to help their childrens succeed in their school exams.
          </div>          
          
        </div>   

      </div>      
      <div className='m-5'>
      <iframe width="420" height="315"
src="https://www.youtube.com/embed/VLxmyzh33B0?autoplay=1&mute=1">
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
