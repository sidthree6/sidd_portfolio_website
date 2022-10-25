import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer';
import Header from '../components/header';
import Intro from '../components/intro';
import Layout from '../components/layout';
import ProjectPreview from '../components/project_preview';

const Home: NextPage = () => {
  return (
    <Layout>
    <div className="text-slate-700 flex flex-col gap-8">
      <Header />
      <Intro />
      <div>
        <ProjectPreview />
      </div>
      <Footer />
    </div>
  </Layout>
  );
};

export default Home
