import type { NextPage } from 'next'
import Intro from '../components/intro';
import ProjectPreview, {ProjectPreviewInterface} from '../components/project_preview';

const Home: NextPage = () => {

  const projectMetadataArray = [];

  projectMetadataArray.push(
    {
      title: "Neural Network (Timeseries Analysis – IBM Stock Price) – Python",
      tag: "Part of: DATA SCIENCE / ENGINEERING PROJECTS",
      desc: 'Using LSTM (Long short-term memory) Neural Network to train IBM stock model & predicting based on closing price.',
      linkUrl: 'project/neural_network',
      image: '/ibm/thumb.png'
    }
  );

  projectMetadataArray.push(
    {
      title: "Movie Recommender System – Python",
      tag: "Part of: DATA SCIENCE / ENGINEERING PROJECTS",
      desc: 'Using AI to recommand movie to users based on movies they have selected.',
      linkUrl: 'project/movie',
      image: '/imdb/thumb.png'
    }
  );

  projectMetadataArray.push(
    {
      title: "NYC 311 Service OpenData – ELK (Elastic, Kibana, Logstash)",
      tag: "Part of: DATA ANALYSIS",
      desc: 'Using 311 reservice requests data for New York city and doing analysis using GCP & ELK stack.',
      linkUrl: 'project/nyc_crime',
      image: '/elk/thumb.png'
    }
  );

  projectMetadataArray.push(
    {
      title: "Lego’s Future Strategies in the Games Market; A Linear Regression Problem – Python",
      tag: "Part of: DATA SCIENCE / ENGINEERING PROJECTS",
      desc: 'Using linear regression model, provide Lego with proper business recommendation that is both feasible & well-rounded.',
      linkUrl: 'project/neural_network',
      image: '/lego/thumb.png'
    }
  );

  projectMetadataArray.push(
    {
      title: "Calender – Python",
      tag: "Part of: SOFTWARE DEVELOPMENT PROJECTS",
      desc: 'Simple text-based calender project using python & OOP.',
      linkUrl: 'project/neural_network',
      image: '/calender/thumb.png'
    }
  );

  projectMetadataArray.push(
    {
      title: "SDB (Simple Database) – PHP",
      tag: "Part of: SOFTWARE DEVELOPMENT PROJECTS",
      desc: 'A simple text based database with SQL like queries build on PHP as a high school project.',
      linkUrl: 'project/neural_network',
      image: '/sdb/thumb.png'
    }
  );

  projectMetadataArray.push(
    {
      title: "Quiz Builder – PHP",
      tag: "Part of: FULL STACK DEVELOPMENT",
      desc: 'A simple quiz builder webapp build on php, javascript & mysql. Part of university project.',
      linkUrl: 'project/neural_network',
      image: '/quiz/thumb.png'
    }
  );

  projectMetadataArray.push(
    {
      title: "AdventureScape (Java)",
      tag: "Part of: GAME DEVELOPMENT PROJECTS",
      desc: 'An Action/RPG 2D game demo developed on Java (No game engine used) as a fun project.',
      linkUrl: 'project/neural_network',
      image: '/adventure/thumb.png'
    }
  );

  projectMetadataArray.push(
    {
      title: "Tic Tac Toe (3d) – Unity (C#)",
      tag: "Part of: GAME DEVELOPMENT PROJECTS",
      desc: 'A simple Tic-Tac-Toe game created in Unity3D where a player can play with another player or an AI.',
      linkUrl: 'project/neural_network',
      image: '/tictactoe/thumb.png'
    }
  );

  projectMetadataArray.push(
    {
      title: "Room Escape – Unreal Engine 4 (C++)",
      tag: "Part of: GAME DEVELOPMENT PROJECTS",
      desc: 'A simple room escape demo, player has to find 3 odd looking barrels and put them on skid in order to open a door.',
      linkUrl: 'project/neural_network',
      image: '/escape/thumb.png'
    }
  );

  projectMetadataArray.push(
    {
      title: "BeachBall Madness – Unity (C#)",
      tag: "Part of: GAME DEVELOPMENT PROJECTS",
      desc: 'A very simple 2D platformer game made in Unity using C# language.',
      linkUrl: 'project/neural_network',
      image: '/beach/thumb.png'
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
