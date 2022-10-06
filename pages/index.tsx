import type { NextPage } from 'next'
import HeroAd from '../components/Hero/HeroAd';
import HeroBanner from '../components/Hero/HeroBanner';
import Layout from '../components/Layout/Layout';
import TopSellerCard from '../components/TopSeller/TopSellerCard';

const Home: NextPage = () => {
  return (
    <Layout>
      <HeroBanner />
      <HeroAd />
      <TopSellerCard />
    </Layout>
  );
}

export default Home
