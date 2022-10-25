import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout';
import Header from '../components/header';
import Intro from '../components/intro';
import Footer from '../components/footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
    <div className="text-slate-700 flex flex-col gap-8">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  </Layout>
  );
}

export default MyApp
