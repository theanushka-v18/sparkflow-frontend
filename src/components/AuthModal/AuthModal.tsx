import {
  Box,
  Button,
  Group,
  Input,
  Modal,
  NumberInput,
  PasswordInput,
  Text,
  Title,
} from '@mantine/core';
import { AtSign } from 'lucide-react';
import classes from './authModal.module.css';
import { useState } from 'react';

const AuthModal = ({ opened, close }: any) => {
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <Modal
      radius={30}
      opened={opened}
      onClose={close}
      withCloseButton={false}
      centered
      fullScreen
      styles={{
        body: {
          background: 'var(--mantine-color-blue-6)',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        },
        root: {
          opacity: '90%',
        },
      }}
    >
      <Title order={2} ta={'center'}>
        {!isRegistered ? 'Register' : 'Login'} to continue
      </Title>
      <Box w={'30%'} my={'xl'} m={'auto'} className={classes.input_container}>
        {!isRegistered && (
          <>
            <Input w={'100%'} placeholder='Name' size='md' required />
            <NumberInput
              hideControls
              w={'100%'}
              mt={'md'}
              placeholder='Mobile number'
              size='md'
              required
            />
          </>
        )}
        <Input
          w={'100%'}
          mt={'md'}
          placeholder='Email address'
          size='md'
          required
          leftSection={<AtSign size={20} />}
        />
        <PasswordInput
          w={'100%'}
          mt={'md'}
          placeholder='Password'
          size='md'
          required
        />
        <Group>
          {!isRegistered ? (
            <Button
              bg={'#f6f6f6'}
              c={'var(--mantine-color-blue-6)'}
              mt={'xl'}
              size='xl'
              radius={'xl'}
              px={60}
              onClick={() => {}}
            >
              Register
            </Button>
          ) : (
            <Button
              bg={'#f6f6f6'}
              c={'var(--mantine-color-blue-6)'}
              mt={'xl'}
              size='xl'
              radius={'xl'}
              px={60}
              onClick={() => {}}
            >
              Login
            </Button>
          )}
          <Button
            onClick={close}
            bg={'var(--mantine-color-red-4)'}
            c={'#f6f6f6)'}
            mt={'xl'}
            size='xl'
            radius={'xl'}
            px={60}
          >
            Cancel
          </Button>
        </Group>
      </Box>
      {!isRegistered ? (
        <Text>
          Already an user?{' '}
          <Button
            p={0}
            bg={'transparent'}
            onClick={() => setIsRegistered((prev) => !prev)}
          >
            Login
          </Button>{' '}
        </Text>
      ) : (
        <Text>
          New user?{' '}
          <Button
            p={0}
            bg={'transparent'}
            onClick={() => setIsRegistered((prev) => !prev)}
          >
            Register
          </Button>{' '}
        </Text>
      )}
    </Modal>
  );
};

export default AuthModal;
