import type { NextPage } from 'next'
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Layout >
        HeroBanner   
      </Layout>
    </div>
  );
}

export default Home
