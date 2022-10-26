import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const NeuralNetwork: NextPage = () => {
  return (
    <div>
      <div className="font-bold mb-5 text-xl text-slate-600">
      Lego’s Future Strategies in the Games Market; A Linear Regression Problem – Python
      </div>      
      <div>
        <div className='m-2'>
          <span className='font-bold text-slate-500 italic'>Programming Language Used :</span> Python
        </div>
        <div className='m-2'>
          <span className='font-bold text-slate-500 italic'>Software Used :</span> Anaconda, Jupyter Noteboook
        </div>
        <div className='m-2'>
          <span className='font-bold text-slate-500 italic'>Github Link : </span> 
          <a href="https://github.com/sidthree6/Lego_Regression_K-Means/blob/master/lego_k_means_clustering.ipynb" className='text-blue-400'>https://github.com/sidthree6/Lego_Regression_K-Means</a>
        </div>
        <div className='m-2'>
          <span className='font-bold text-slate-500 italic'>Report Link : </span> 
          <a href="https://github.com/sidthree6/Lego_Regression_K-Means/blob/master/Lego%E2%80%99s%20Future%20Strategies%20in%20the%20Games%20Market%20-%20KMeans%20Clustering.pdf" className='text-blue-400'>PDF Report</a>
        </div>
        <div className='m-2'>
          <span className='font-bold text-slate-500 italic'>Description : </span> 
          <div className='mb-5'>
          This report aims to provide the company with a recommendation that is both feasible
and well-rounded. Our goal is to provide the company with a solution that allows
them to re-enter the game market with a highly profitable, yet minimally sized Lego
set. Our analysis aims to be all-encompassing, with specific details surrounding list
price, number of pieces, and theme. We will begin by identifying which input
variables hold value and which we can disregard. We will then proceed to clean the
data by removing any outliers that may skew the data. Our cleaning process will also
take care of any missing information in the dataset.  
          </div>
          <div className='mb-5'>
          Throughout our analytical process, there are numerous areas we want to dive into,
and several questions which we would like to answer.
          </div>
          <div className='mb-5'>
          <ul className='list-disc ml-10'>
            <li>How many difficulty levels are there and what is the spread of each difficulty
level?</li>
            <li>What is the price range for each difficulty level? Is there any relationship
between price and difficulty level?</li>
            <li>Is there a relationship between piece count and difficulty level?</li>
            <li>Is there a relationship between a higher difficulty level (more challenging) and
a higher play star rating?</li>
            <li>Which age group has the highest average price?</li>
            <li>Which age group has the most Lego sets associated with them?</li>
            <li>Which sets and/or themes have the most reviews? What age group uses each
set most?</li>
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
