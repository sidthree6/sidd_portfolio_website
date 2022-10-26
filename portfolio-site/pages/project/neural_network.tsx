import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import ImageOne from '../../public/ibm/one.png'
import ImageTwo from '../../public/ibm/two.png'
import ImageThree from '../../public/ibm/three.png'

const NeuralNetwork: NextPage = () => {
  return (
    <div>
      <div className="font-bold mb-5 text-xl text-slate-600">
        Neural Network (Timeseries Analysis – IBM Stock Price) – Python
      </div>      
      <div>
        <div className='m-2'>
          <span className='font-bold text-slate-500 italic'>Programming Language Used :</span> Python, Keras and Tensorflow library
        </div>
        <div className='m-2'>
          <span className='font-bold text-slate-500 italic'>Software Used :</span> Anaconda, Jupyter Noteboook
        </div>
        <div className='m-2'>
          <span className='font-bold text-slate-500 italic'>Github Link : </span> 
          <a href="https://github.com/Group-7-Big-Data/Assignment-3/blob/master/IBM_Stock.ipynb" className='text-blue-400'>https://github.com/Group-7-Big-Data/Assignment-3</a>
        </div>
        <div className='m-2'>
          <span className='font-bold text-slate-500 italic'>Demo Link : </span> 
          <a href="http://group-7-stock-prices.herokuapp.com/" className='text-blue-400'>http://group-7-stock-prices.herokuapp.com/</a>
        </div>
        <div className='m-2'>
          <span className='font-bold text-slate-500 italic'>Description : </span> 
          <div>
          Time series analysis comprises methods for analyzing time series data to extract meaningful statistics and other characteristics of the data.
           We are using Time series forecasting model to predict future values of stock based on previously observed values or historical data.
            Using time series analysis, our goal is to reduce investment risk by forecasting future value of stock.  
          </div>
        </div>

        <div>
            <div className='mt-10 text-center text-slate-600'>Stock Prediction</div>
            <Image src={ImageOne}/>
            <div className='mt-10 text-center text-slate-600'>Avg closing price & volume comparision for each days of month</div>
            <Image src={ImageTwo}/>
            <div className='mt-10 text-center text-slate-600'>Avg closing price & volume comparision each months</div>
            <Image src={ImageThree}/>
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
