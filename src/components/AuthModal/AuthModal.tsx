import {
  Box,
  Button,
  Group,
  Input,
  Modal,
  NumberInput,
  PasswordInput,
  Title,
} from '@mantine/core';
import { AtSign } from 'lucide-react';
import classes from './authModal.module.css';

const AuthModal = ({ opened, close }: any) => {
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
        Register to continue
      </Title>
      <Box w={'30%'} my={'xl'} m={'auto'} className={classes.input_container}>
        <Input w={'100%'} placeholder='Name' size='md' required />
        <Input
          w={'100%'}
          mt={'md'}
          placeholder='Email address'
          size='md'
          required
          leftSection={<AtSign size={20} />}
        />
        <NumberInput
          hideControls
          w={'100%'}
          mt={'md'}
          placeholder='Mobile number'
          size='md'
          required
        />
        <PasswordInput
          w={'100%'}
          mt={'md'}
          placeholder='Password'
          size='md'
          required
        />
        <Group>
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
    </Modal>
  );
};

export default AuthModal;
