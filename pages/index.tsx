import type { NextPage } from 'next'
import BannerSection from '../components/Banner/BannerSection';
import CatalogSection from '../components/Catalog/CatalogSection';
import HeroAd from '../components/Hero/HeroAd';
import HeroBanner from '../components/Hero/HeroBanner';
import Layout from '../components/Layout/Layout';
import TopDealsSection from '../components/TopDeals/TopDealsSection';
import TopSellerSection from '../components/TopSeller/TopSellerSection';

const Home: NextPage = () => {
  return (
    <Layout>
      <HeroBanner />
      <HeroAd />
      <TopSellerSection/>
      <CatalogSection />
      <TopDealsSection />
      <BannerSection />
    </Layout>
  );
}

export default Home
