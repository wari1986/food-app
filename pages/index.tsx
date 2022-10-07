import type { NextPage } from 'next'
import HeroAd from '../components/Hero/HeroAd';
import HeroBanner from '../components/Hero/HeroBanner';
import Layout from '../components/Layout/Layout';
import TopSellerSection from '../components/TopSeller/TopSellerSection';

const Home: NextPage = () => {
  return (
    <Layout>
      <HeroBanner />
      <HeroAd />
      <TopSellerSection/>
    </Layout>
  );
}

export default Home
