import type { NextPage } from 'next'
import Intro from '../components/intro';
import ProjectPreview, {ProjectPreviewInterface} from '../components/project_preview';

const Home: NextPage = () => {

  const projectMetadataArray = [];

  projectMetadataArray.push(
    {
      title: "Neural Network (Timeseries Analysis – IBM Stock Price) – Python",
      tag: "Part of: DATA SCIENCE / ENGINEERING PROJECTS",
      desc: 'Sample desc',
      linkUrl: 'project/neural_network',
      image: '/ibm/thumb.png'
    }
  );

  projectMetadataArray.push(
    {
      title: "Movie Recommender System – Python",
      tag: "Part of: DATA SCIENCE / ENGINEERING PROJECTS",
      desc: 'Sample desc',
      linkUrl: 'project/movie_recommand',
      image: '/imdb/movie_thumb.png'
    }
  );

  projectMetadataArray.push(
    {
      title: "Neural Network (Timeseries Analysis – IBM Stock Price) – Python",
      tag: "Part of: DATA SCIENCE / ENGINEERING PROJECTS",
      desc: 'Sample desc',
      linkUrl: 'project/neural_network',
      image: '/ibm/thumb.png'
    }
  );

  const projectPreviewElements = [];

  for (let i=0; i < projectMetadataArray.length; i++) {
    const metaData = projectMetadataArray[i];
    const element = <ProjectPreview {...metaData} />
    projectPreviewElements.push(element)
  }

  return (
    <div>
      <Intro />
      <div className='mt-4 flex flex-col gap-3'>
        {projectPreviewElements}
      </div>
    </div>
  );
};

export default Home
