import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import ImageOne from '../../public/imdb/one.png'
import ImageTwo from '../../public/imdb/two.png'
import ImageThree from '../../public/imdb/three.png'
import ImageFour from '../../public/imdb/four.png'

const NeuralNetwork: NextPage = () => {
  return (
    <div>
      <div className="font-bold mb-5 text-xl text-slate-600">
        Movie Recommender System – Python
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
          <a href="https://github.com/Group-7-Big-Data/Assignment-1/blob/master/Assignment%201%20-%20Movie%20Recommender%20System.ipynb" className='text-blue-400'>https://github.com/Group-7-Big-Data/Assignment-1</a>
        </div>
        <div className='m-2'>
          <span className='font-bold text-slate-500 italic'>Demo Link : </span> 
          <a href="https://group-7-movie-recommand-app.herokuapp.com/" className='text-blue-400'>https://group-7-movie-recommand-app.herokuapp.com/</a>
        </div>
        <div className='m-2'>
          <span className='font-bold text-slate-500 italic'>Description : </span> 
          <div className='mb-5'>
          Movies are a subjective entertainment platform; every person has a different choice for movies
they like to watch. Some people prefer drama, some prefer action, or some even prefer comedy
combined with action and so on. With the introduction of online platforms such as Netflix,
Amazon Prime we are seeing mass amounts of movies hitting the market than we saw 10 years
ago. We cannot expect viewers to keep up with all these new released movies, so we need to get
help from data collected by various movie rating websites and create a model to recommend
movies related to viewers’ choice.
          </div>
          <div className='mb-5'>
          When we watch one movie in Netflix or Amazon Prime etc., we get a recommendation for movies
that are similar to previously watched movies. This recommendation is very interesting and
useful from a business model perspective as well as user experience. Movie streaming services
that introduced these kinds of recommendation could retain customer base and enhanced
customer experience. Identifying a pattern of movies rating has with viewers can have drastic
impact on viewers watching habits and overall user experience.
          </div>
          <div className='mb-5'>
          We are building a similar application that will recommend movies based on user’s preference.
User will select best movies they like and the application will recommend similar types of movies
that meets users taste and preference. This Application will find rating and genre selected by the
user as input and recommend same kind of movies that meets similar genre. Success of the
Application depends on finding right kind of movies that meets users’ taste.
          </div>
          <div>
          Throughout our research, we will explore various analytical approaches to find patterns between
movie ratings given by viewers to recommend movies based on their past given ratings. We will
be trying to determine accuracy of our model recommendation to viewers and improve their
overall viewing experience.
          </div>
        </div>

        <div  className='mt-10'>
            <Image src={ImageOne}/>            
            <Image src={ImageTwo}/>            
            <Image src={ImageThree}/>
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
