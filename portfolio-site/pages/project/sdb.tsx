import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ImageOne from '../../public/sdb/one.png'

const NeuralNetwork: NextPage = () => {

  return (
    <div>
      <div className="font-bold mb-5 text-xl text-slate-600">
      Calender – Python
      </div>      
      <div>
        <div className='m-2'>
          <span className='font-bold text-slate-500 italic'>Programming Language Used :</span> PHP
        </div>
        <div className='m-2'>
          <span className='font-bold text-slate-500 italic'>Software Used :</span> Adobe Dreamweaver
        </div>
        <div className='m-2'>
          <span className='font-bold text-slate-500 italic'>Github Link : </span> 
          <a target="_blank" href="https://github.com/sidthree6/sdb" className='text-blue-400'>https://github.com/sidthree6/sdb</a>
        </div>
        <div className='m-2'>
          <span className='font-bold text-slate-500 italic'>Description : </span> 
          <div className='mb-5'>
          SDB (Simple Database) is a small database based on PHP I have developed many years ago (2010 to be precise) as my hobby / school project in my high scool days. I have still learning PHP language on my own and I was using database such as MySQL. I thought why not create my own database for fun. I had to learn a lot especially regular expression in PHP to undertake this task. I have spent days after days of researching and coding to make this project come true. Although being really basic and unsafe compared to other databases this is one of my longest programming project to date and I am proud of it.          </div>          
          
        </div>   

      </div>      
      <div  className='m-5'>
        <Image src={ImageOne}/>
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
