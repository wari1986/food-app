import type { NextPage } from 'next'
import BannerSection from '../components/Banner/BannerSection';
import CatalogSection from '../components/Catalog/CatalogSection';
import FavoriteSection from '../components/Favorites/FavoriteSection';
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
      <FavoriteSection />
    </Layout>
  );
}

export default Home
