import type { NextPage } from 'next'
import BannerSection from '../components/Banner/BannerSection';
import CatalogSection from '../components/Catalog/CatalogSection';
import FaqSection from '../components/FAQ/FaqSection';
import FavoriteSection from '../components/Favorites/FavoriteSection';
import HeroAd from '../components/Hero/HeroAd';
import HeroBanner from '../components/Hero/HeroBanner';
import Layout from '../components/Layout/Layout';
import { ReasonsSection } from '../components/Reasons/ReasonsSection';
import SubscriptionSection from '../components/Subscription/SubscriptionSection';
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
      <ReasonsSection />
      <SubscriptionSection />
      <FaqSection />
    </Layout>
  );
}

export default Home
