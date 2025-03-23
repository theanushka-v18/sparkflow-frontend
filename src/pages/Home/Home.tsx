import { Box, Button, Group, Image, Text, Title } from '@mantine/core';
import HeroSection from './components/HeroSection/HeroSection';
import user from '../../assets/user.png';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { RoutePaths } from '../../routes/routePath';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <HeroSection />
      <Box bg={'var(--mantine-color-white)'} py={'xl'} px={'xl'}>
        <Group
          justify='space-between'
          py={'xl'}
          px={'xl'}
          align='flex-start'
          m={'auto'}
          mt={'lg'}
          w={'90%'}
          bg={'var(--mantine-color-blue-1)'}
          style={{ borderRadius: '15px' }}
        >
          <Box>
            <Title order={2} fw={600}>
              Community Support
            </Title>
            <Text mt={'sm'} w={'60%'} c={'var(--mantine-color-gray-6)'}>
              Our support system is live again, this time it is bigger, better
              and faster. Experience a tech community like never seen before
            </Text>
            <Button
              variant='filled'
              mt={'md'}
              onClick={() => navigate(RoutePaths.communitySupport)}
            >
              Take me there <ArrowRight size={20} style={{ marginLeft: 5 }} />
            </Button>
          </Box>
          <Image src={user} />
        </Group>
      </Box>
    </>
  );
};

export default Home;
