import HeroSection from './components/HeroSection/HeroSection';
import CustomCarousel from '../../components/CustomCarousel/CustomCarousel';
import CommunitySupport from '../CommunitySupport/CommunitySupport';

const Home = () => {
  return (
    <>
      <HeroSection />
      <CommunitySupport />
      <CustomCarousel title='Our Courses' differentiator='courses' />
      <CustomCarousel title='Success Stories' differentiator='testimonials' />
    </>
  );
};

export default Home;
