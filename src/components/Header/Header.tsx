import { Box, Button, Group, Input, NavLink, Text } from '@mantine/core';
import { Search, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { RoutePaths } from '../../routes/routePath';
import { useDisclosure } from '@mantine/hooks';
import AuthModal from '../AuthModal/AuthModal';
import classes from './header.module.css';

const Header = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const location = useLocation();

  return (
    <>
      <Box style={{ boxShadow: '5px 5px 10px var(--mantine-color-gray-3)' }}>
        <Group justify='space-between' py={'sm'} px={'xl'}>
          <Text size='lg' fw={'bold'}>
            SparkFlow AI
          </Text>
          <Group>
            {location.pathname === '/courses' && (
              <Input
                placeholder='Search courses'
                leftSection={<Search size={20} />}
              />
            )}
            <Button
              variant='filled'
              bg={'var(--mantine-color-teal-6)'}
              onClick={open}
            >
              <User size={20} style={{ marginRight: 5 }} /> Login/Register
            </Button>
          </Group>
        </Group>
      </Box>
      <Group justify='space-between' py={'sm'} px={'xl'}>
        <Text>
          <NavLink
            className={classes.navLink}
            label='Home'
            component={Link}
            to={RoutePaths.home}
          />
        </Text>
        <Text>
          <NavLink
            className={classes.navLink}
            label='Courses'
            component={Link}
            to={RoutePaths.courses}
          />
        </Text>
        <Text>
          <NavLink
            className={classes.navLink}
            label='Community Support'
            component={Link}
            to={RoutePaths.communitySupport}
          />
        </Text>
        <Text>
          <NavLink
            label='Lab'
            component={Link}
            to={RoutePaths.lab}
            className={classes.navLink}
          />
        </Text>
        <Text>
          <NavLink
            label='Internship Portal'
            className={classes.navLink}
            component={Link}
            to={RoutePaths.internshipPortal}
          />
        </Text>
        <Text>
          <NavLink
            label='Become an Affiliate'
            className={classes.navLink}
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
