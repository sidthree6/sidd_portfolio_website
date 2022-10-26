import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import ImageOne from '../../public/elk/one.png'
import ImageTwo from '../../public/elk/two.png'
import ImageThree from '../../public/elk/three.png'
import ImageFour from '../../public/elk/four.png'

const NeuralNetwork: NextPage = () => {

  const codeOne: string = `
  curl -XPUT "http://localhost:9200/_template/nyccalls" -H 'Content-Type: application/json' -d'
  {	
    "order": 1,  	
    "index_patterns": ["nyccalls*"],	
    "mappings":	
    {    		
      "properties":    		
      {			
        "Location": 			
        {         				
          "type": "geo_point"      			
        },			
        "Created Date":			
        {			  
          "type": "date",			  
          "format": ["yyyy-MM-dd\"T\"HH:mm:ss.SSS\"Z\""]			
        }
      }  	
    }
  }'
  `;

  const codeTwo: string = `
  input {
      file {
              path => "/home/sidd/rows.csv"
              start_position => "beginning"
              sincedb_path => "/dev/null"
      }
  }

  filter {

      if[message] =~ /^#/ {
              drop{}
      }

      csv {
                      separator =>","
                      columns => ["Unique Key","Created Date","Closed Date","Agency","Agency Name","Complaint Type","Descriptor","Location Type","Incident Zip","Incident Address","Street Name","Cross Street 1","Cross Street 2","Intersection Street 1","Intersection Street 2","Address Type","City","Landmark","Facility Type","Status","Due Date","Resolution Description","Resolution Action Updated Date","Community Board","BBL","Borough","X Coordinate (State Plane)","Y Coordinate (State Plane)","Open Data Channel Type","Park Facility Name","Park Borough","Vehicle Type","Taxi Company Borough","Taxi Pick Up Location","Bridge Highway Name","Bridge Highway Direction","Road Ramp","Bridge Highway Segment","Latitude","Longitude","Location"]
      }

      date {
              match => ["Created Date", "MM/dd/yyyy hh:mm:ss a"]
              target => "Created Date"
      }

      mutate {convert => ["X Coordinate (State Plane)","integer"]}
      mutate {convert => ["Y Coordinate (State Plane)","integer"]}
      mutate {convert => ["Latitude","float"]}
      mutate {convert => ["Longitude","float"]}
      mutate {replace => { "Location" => "%{Latitude},%{Longitude}" }}

      if [Location] == "%{Latitude},%{Longitude}" {
              mutate { remove_field => "Location" }
      }
  }

  output {
      elasticsearch {
    hosts => "localhost"
    index => "nyccalls"
  }
      #stdout {}
  }`;

  return (
    <div>
      <div className="font-bold mb-5 text-xl text-slate-600">
        NYC 311 Service OpenData – ELK (Elastic, Kibana, Logstash)
      </div>      
      <div>
        <div className='m-2'>
          <span className='font-bold text-slate-500 italic'>Programming Language Used :</span> Logstash Config, CURL
        </div>
        <div className='m-2'>
          <span className='font-bold text-slate-500 italic'>Software Used :</span> Google Cloud Platform (GCP), Elasticsearch, Kibana, Logstash
        </div>
        <div className='m-2'>
          <span className='font-bold text-slate-500 italic'>Github Link : </span> 
          <a target="_blank" href="https://github.com/sidthree6/NYC_311_calls_ELK" className='text-blue-400'>https://github.com/sidthree6/NYC_311_calls_ELK</a>
        </div>
        <div className='m-2'>
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
        </div>
        <div className='mb-5'>
        Creating Mapping in Elastic using CURL.
        </div>
        <div className='m-5 bg-gray-800 text-white text-ellipsis overflow-auto '>
          <pre>
            <code>
            {codeOne}
            </code>
          </pre>
        </div>
        <div className='mb-5'>
        Creating config file to ingest data into elastic
        </div>
        <div className='m-5 bg-gray-800 text-white text-ellipsis overflow-auto'>
          <pre>
            <code>
            {codeTwo}
            </code>
          </pre>
        </div>
        <div>
            <div className='mt-10 text-center text-slate-600'>Top 10 Cities with Top 10 Complaint Calls</div>
            <Image src={ImageOne}/>
            <div className='mt-10 text-center text-slate-600'>All cities complaint call radial diagram</div>
            <Image src={ImageTwo}/>
            <div className='mt-10 text-center text-slate-600'>Top 20 Complaint Calls</div>
            <Image src={ImageThree}/>
            <div className='mt-10 text-center text-slate-600 mb-3'>Geo Location of Calls</div>
            <Image src={ImageFour}/>
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
