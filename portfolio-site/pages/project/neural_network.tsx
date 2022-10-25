import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import projectImage from '../../public/ibm/thumb.png'

const NeuralNetwork: NextPage = () => {
  return (
    <div>
      <Image src={projectImage} />
      <div>
        Neural Network
      </div>
      <div className='mt-6'>
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
