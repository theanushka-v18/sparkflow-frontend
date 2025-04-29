import { Box, Card, Group, Image, Title } from '@mantine/core';
import hp1 from '../../assets/hp1.png';
import hp2 from '../../assets/hp2.png';
import hp3 from '../../assets/hp3.png';
import hp4 from '../../assets/hp4.png';
import hp5 from '../../assets/hp5.png';
import hp6 from '../../assets/hp6.png';
import hp7 from '../../assets/hp7.png';

const data = [hp1, hp2, hp3, hp4, hp5, hp6, hp7];

const HiringPartners = () => {
  return (
    <Box py={'sm'} px={'xl'} mt={'lg'}>
      <Card py={'xl'} radius={'lg'}>
        <Title order={1} ta={'center'} mb={'xl'}>
          Our Hiring Partners
        </Title>
        <Group wrap='wrap' w={'60%'} justify='center' m={'auto'} gap={'xl'}>
          {data.map((hp) => {
            return <Image src={hp} h={40} m={'md'} />;
          })}
        </Group>
      </Card>
    </Box>
  );
};

export default HiringPartners;
