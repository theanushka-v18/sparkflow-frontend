import { Box, Card, Group, Image, Text, Title } from '@mantine/core';
import { Typewriter } from 'react-simple-typewriter';
import heroImg from '../../../../assets/img-1.png';
import img1 from '../../../../assets/increase.png';
import img2 from '../../../../assets/newJob.png';
import img3 from '../../../../assets/bookStack.png';
import img4 from '../../../../assets/personalGrowth.png';

const HeroSection = () => {
  const StatCard = ({ img, stat, statText }: any) => {
    return (
      <Card shadow='xl' w={'20%'} radius={'md'}>
        <Group>
          <Image src={img} w={40} />
          <Box>
            <Text size='xl' fw={'bold'}>
              {stat}
            </Text>
            <Text size='sm'>{statText}</Text>
          </Box>
        </Group>
      </Card>
    );
  };
  return (
    <>
      <Group
        justify='space-between'
        py={'sm'}
        px={'xl'}
        align='flex-start'
        mt={'lg'}
      >
        <Box mt={'xl'} w={'50%'}>
          <Title order={1} fw={600}>
            Learning with SparkFlow AI made
          </Title>
          <Title order={1} mt={'sm'} c={'var(--mantine-color-teal-6)'} fw={600}>
            <Typewriter
              words={['<Practical />', '<Intuitive />']} // The constant value to display
              loop={Infinity} // Number of times to loop (1 means no loop)
              cursor
              cursorStyle='|'
              typeSpeed={70} // Typing speed in milliseconds
              deleteSpeed={50} // Delete speed in milliseconds (not used here since we're not deleting)
              delaySpeed={1000} // Delay before typing starts
            />
          </Title>
          <Text mt={'sm'} w={'90%'} c={'var(--mantine-color-gray-6)'}>
            Transform your career with programs crafted to match industry
            demands. Access a complete learning ecosystem that brings joy and
            excitement to your learning experience. Choose from various
            tech-focused courses and take the next big step in your professional
            journey.
          </Text>
        </Box>
        <Image src={heroImg} />
      </Group>
      <Group mt={'lg'} justify='space-between' py={'sm'} px={'xl'}>
        <StatCard img={img1} stat={'55%'} statText={'Average Salary Hike'} />
        <StatCard img={img3} stat={'40+'} statText={'Different Courses'} />
        <StatCard img={img4} stat={'100+'} statText={'Career Transitions'} />
        <StatCard img={img2} stat={'30+'} statText={'Hiring Partners'} />
      </Group>
    </>
  );
};

export default HeroSection;
