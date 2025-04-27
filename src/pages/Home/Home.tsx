import HeroSection from './components/HeroSection/HeroSection';
import CustomCarousel from '../../components/CustomCarousel/CustomCarousel';
import CommunitySupport from '../CommunitySupport/CommunitySupport';

const Home = () => {
  return (
    <>
      <HeroSection />
      <CommunitySupport />
      <CustomCarousel title='Our Courses' />
    </>
  );
};

export default Home;
