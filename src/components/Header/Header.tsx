import { Box, Button, Group, Input, NavLink, Text } from '@mantine/core';
import { Search, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RoutePaths } from '../../routes/routePath';
import { useDisclosure } from '@mantine/hooks';
import AuthModal from '../AuthModal/AuthModal';

const Header = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Box style={{ boxShadow: '5px 5px 10px var(--mantine-color-gray-3)' }}>
        <Group justify='space-between' py={'sm'} px={'xl'}>
          <Text size='lg' fw={'bold'}>
            SparkFlow AI
          </Text>
          <Group>
            <Input
              placeholder='Search courses'
              leftSection={<Search size={20} />}
            />
            <Button variant='filled' onClick={open}>
              <User size={20} style={{ marginRight: 5 }} /> Login/Register
            </Button>
          </Group>
        </Group>
      </Box>
      <Group justify='space-between' py={'sm'} px={'xl'}>
        <Text>
          <NavLink label='Home' component={Link} to={RoutePaths.home} />
        </Text>
        <Text>
          <NavLink label='Courses' component={Link} to={RoutePaths.courses} />
        </Text>
        <Text>
          <NavLink
            label='Community Support'
            component={Link}
            to={RoutePaths.communitySupport}
          />
        </Text>
        <Text>
          <NavLink label='Lab' component={Link} to={RoutePaths.lab} />
        </Text>
        <Text>
          <NavLink
            label='Internship Portal'
            component={Link}
            to={RoutePaths.internshipPortal}
          />
        </Text>
        <Text>
          <NavLink
            label='Become an Affiliate'
            component={Link}
            to={RoutePaths.becomeAnAffiliate}
          />
        </Text>
      </Group>
      {opened && <AuthModal opened={opened} close={close} />}
    </>
  );
};

export default Header;
