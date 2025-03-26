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
      styles={{
        body: {
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '30px',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: '2rem',
        },
        content: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
        },
        overlay: {
          backdropFilter: 'blur(3px)',
        },
      }}
    >
      <Title order={2} ta={'center'}>
        {!isRegistered ? 'Register' : 'Login'} to continue
      </Title>
      <Box w={'70%'} my={'xl'} m={'auto'} className={classes.input_container}>
        {!isRegistered && (
          <>
            <Input
              w={'100%'}
              placeholder='Name'
              size='md'
              required
              styles={{
                input: {
                  background: 'rgba(255, 255, 255, 0.2)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: 'white',
                  '::placeholder': {
                    color: 'rgba(255, 255, 255, 0.7)',
                  },
                },
              }}
            />
            <NumberInput
              hideControls
              w={'100%'}
              mt={'md'}
              placeholder='Mobile number'
              size='md'
              required
              styles={{
                input: {
                  background: 'rgba(255, 255, 255, 0.2)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: 'white',
                  '::placeholder': {
                    color: 'rgba(255, 255, 255, 0.7)',
                  },
                },
              }}
            />
          </>
        )}
        <Input
          w={'100%'}
          mt={'md'}
          placeholder='Email address'
          size='md'
          required
          leftSection={<AtSign size={20} color='rgba(255, 255, 255, 0.7)' />}
          styles={{
            input: {
              background: 'rgba(255, 255, 255, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              color: 'white',
              '::placeholder': {
                color: 'rgba(255, 255, 255, 0.7)',
              },
            },
          }}
        />
        <PasswordInput
          w={'100%'}
          mt={'md'}
          placeholder='Password'
          size='md'
          required
          styles={{
            input: {
              background: 'rgba(255, 255, 255, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              color: 'white',
              '::placeholder': {
                color: 'rgba(255, 255, 255, 0.7)',
              },
            },
            innerInput: {
              color: 'white',
              '::placeholder': {
                color: 'rgba(255, 255, 255, 0.7)',
              },
            },
            visibilityToggle: {
              color: 'rgba(255, 255, 255, 0.7)',
            },
          }}
        />
        <Group>
          {!isRegistered ? (
            <Button
              bg={'var(--mantine-color-teal-6)'}
              c={'#f6f6f6'}
              mt={'xl'}
              size='md'
              radius={'xl'}
              px={20}
              onClick={() => {}}
            >
              Register
            </Button>
          ) : (
            <Button
              bg={'var(--mantine-color-teal-6)'}
              c={'#f6f6f6'}
              mt={'xl'}
              size='md'
              radius={'xl'}
              px={24}
              onClick={() => {}}
            >
              Login
            </Button>
          )}
          <Button
            onClick={close}
            bg={'#f6f6f6'}
            c={'var(--mantine-color-teal-6)'}
            mt={'xl'}
            size='md'
            radius={'xl'}
            px={20}
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
