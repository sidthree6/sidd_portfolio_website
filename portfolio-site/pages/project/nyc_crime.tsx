import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import ImageOne from '../../public/ibm/one.png'
import ImageTwo from '../../public/ibm/two.png'
import ImageThree from '../../public/ibm/three.png'
import { CopyBlock,dracula } from "react-code-blocks";

const NeuralNetwork: NextPage = () => {
  return (
    <div>
      <div className="font-bold mb-5 text-xl text-slate-600">
        NYC 311 Service OpenData – ELK (Elastic, Kibana, Logstash)
      </div>      
      <div>
        <p className='m-2'>
          <span className='font-bold text-slate-500 italic'>Programming Language Used :</span> Logstash Config, CURL
        </p>
        <p className='m-2'>
          <span className='font-bold text-slate-500 italic'>Software Used :</span> Google Cloud Platform (GCP), Elasticsearch, Kibana, Logstash
        </p>
        <p className='m-2'>
          <span className='font-bold text-slate-500 italic'>Github Link : </span> 
          <a href="https://github.com/sidthree6/NYC_311_calls_ELK" className='text-blue-400'>https://github.com/sidthree6/NYC_311_calls_ELK</a>
        </p>
        <p className='m-2'>
          <span className='font-bold text-slate-500 italic'>Description : </span> 
          <div className='mb-5'>
            I have gathered data from Newyork open data website where it contains huge data for 311 service requests from 2010 to present. Using Google Cloud Platform (GCP) and ELK stack I have attempted to analyzed data. Before analysing I had to create a template mapping in elasticsearch using curl and then write logstash config file to ingest huge data into elastic.
          </div>
          <div className='mb-5'>
          In the end using Kibana we are visualizing data using Kibana dashboard inferface and trying to answer 4 analytical question.
          </div>
          <div className='mb-5'>
          <ul className='list-disc ml-10'>
            <li>Create a table showing the top 10 cities with the highest calls alongside the count of top 10 complaint calls (by Descriptor) in each city.</li>
            <li>Create a pie chart showing the top 5 cities with the highest calls alongside the top five calls (Descriptor) in each city</li>
            <li>Create a tag cloud representing the top 20 call descriptors.</li>
            <li>Create a coordinated map of all the major call descriptors in each city</li>
          </ul>
          </div>
        </p>
        <p className='m-2'>
          
        </p>

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
