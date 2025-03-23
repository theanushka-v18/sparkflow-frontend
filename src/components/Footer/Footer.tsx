import { Box, Group, Text, Title, Image } from '@mantine/core';
import { Mail, Smartphone } from 'lucide-react';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';
import twitter from '../../assets/twitter.png';
import youtube from '../../assets/youtube logo.png';

const Footer = () => {
  return (
    <>
      <Group
        bg={'var(--mantine-color-blue-6)'}
        justify='space-between'
        py={'xl'}
        px={80}
        align='flex-start'
      >
        <Box>
          <Title order={4} mb={'lg'}>
            SparkFlow AI
          </Title>
          <Text display={'flex'} mt={'md'}>
            <Mail size={20} style={{ marginRight: 5 }} /> contact@sparkflow.ai
          </Text>
          <Text display={'flex'} mt={'md'}>
            <Smartphone size={20} style={{ marginRight: 5 }} /> +91 1234567890
          </Text>
          <Group mt={'md'}>
            <Image style={{ cursor: 'pointer' }} src={instagram} />
            <Image style={{ cursor: 'pointer' }} src={facebook} />
            <Image style={{ cursor: 'pointer' }} src={twitter} />
            <Image style={{ cursor: 'pointer' }} src={linkedin} />
            <Image style={{ cursor: 'pointer' }} src={youtube} />
          </Group>
          <Text mt={'md'}>
            &copy; 2024 Noida Uttar Pradesh India, Inc. All Rights Reserved
          </Text>
        </Box>
        <Group justify='space-between' align='flex-start' gap={100}>
          <Box>
            <Text opacity={0.5} fw={'bold'} mb={'md'}>
              Company
            </Text>
            <Text c={'var(--mantine-color-white)'}>About us</Text>
            <Text c={'var(--mantine-color-white)'}>FAQs</Text>
            <Text c={'var(--mantine-color-white)'}>Privacy Policy</Text>
            <Text c={'var(--mantine-color-white)'}>Contact us</Text>
            <Text c={'var(--mantine-color-white)'}>Terms & Conditions</Text>
          </Box>
          <Box>
            <Text opacity={0.5} fw={'bold'} mb={'md'}>
              Our Products
            </Text>
            <Text c={'var(--mantine-color-white)'}>Lab</Text>
            <Text c={'var(--mantine-color-white)'}>Internship Portal</Text>
            <Text c={'var(--mantine-color-white)'}>Community Support</Text>
          </Box>
        </Group>
      </Group>
    </>
  );
};

export default Footer;
