import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ImageOne from '../../public/sdb/one.png'

const NeuralNetwork: NextPage = () => {

  return (
    <div>
      <div className="font-bold mb-5 text-xl text-slate-600">
      AdventureScape (Java)
      </div>      
      <div>
        <div className='m-2'>
          <span className='font-bold text-slate-500 italic'>Programming Language Used :</span> PHP
        </div>
        <div className='m-2'>
          <span className='font-bold text-slate-500 italic'>Software Used :</span> IntelliJ, Paint.net
        </div>
        <div className='m-2'>
          <span className='font-bold text-slate-500 italic'>Github Link : </span> 
          <a href="https://github.com/sidthree6/AdventureScape" className='text-blue-400'>https://github.com/sidthree6/AdventureScape</a>
        </div>
        <div className='m-2'>
          <span className='font-bold text-slate-500 italic'>Description : </span> 
          <div className='mb-5'>
          An Action/RPG 2D game demo developed on Java (No game engine used) as a fun project. I created this project to learn Java, and figured best way to learn is just create a simple game which envovles many programming concepts such as functions, OOP, Enums etc.
          </div>
          <div className='mb-5'>
          There are 4 stages in game. First stage is a room where attack option is disabled and you can only explore. In second stage player can shoot fireball and there are 4 low level enemy whom players have to kill to advance. In third stage player encounter medium level enemies with more health and different shooting mechanic. And final stage is boss round where he moves and shoots in four direction with much more health.          </div>      
          <div className='mb-5'>
          Game also includes :
          </div>
          <div className='mb-5'>
          <ul className='list-disc ml-10'>
            <li>GameState class – Where it stores just a simple variable regarding which map player is in, and load appropriate map.</li>
            <li>Player class – This class stores players health, location, its current map and movement and shooting mechanic.</li>
            <li>Enemy class – This class is used to create different types of enemy and initiate them. It holds enemy type, location, movement and logic.</li>
            <li>Projectile class – Any time player/enemy shoots it initiate this class with some default property. This class holds data of projective direction, speed and destruction on obstacle.</li>
            <li>Game also include basic AI, where enemy starts shooting if player is in their vicinity.</li>
          </ul>
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
