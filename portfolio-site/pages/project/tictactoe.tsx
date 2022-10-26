import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ImageOne from '../../public/sdb/one.png'

const NeuralNetwork: NextPage = () => {

  return (
    <div>
      <div className="font-bold mb-5 text-xl text-slate-600">
      Tic Tac Toe (3d) – Unity (C#)
      </div>      
      <div>
        <div className='m-2'>
          <span className='font-bold text-slate-500 italic'>Programming Language Used :</span> C#
        </div>
        <div className='m-2'>
          <span className='font-bold text-slate-500 italic'>Software Used :</span> Unity 3D, Photoshop, Blender
        </div>
        <div className='m-2'>
          <span className='font-bold text-slate-500 italic'>Github Link : </span> 
          <a target="_blank" href="https://github.com/sidthree6/TicTacToe-Unity-" className='text-blue-400'>https://github.com/sidthree6/TicTacToe-Unity-</a>
        </div>
        <div className='m-2'>
          <span className='font-bold text-slate-500 italic'>Description : </span> 
          <div className='mb-5'>
          A simple Tic-Tac-Toe game created in Unity3D where a player can play with another player or an AI. Also its impossible (almost) to beat an AI in this game, so Good Luck!
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
