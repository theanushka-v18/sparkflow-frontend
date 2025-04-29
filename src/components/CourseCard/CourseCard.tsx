import {
  ActionIcon,
  Box,
  Button,
  Card,
  Group,
  Image,
  Text,
  Title,
} from '@mantine/core';
import { CalendarDays, Forward, ListVideo, UserRoundCheck } from 'lucide-react';

interface ICourseCardProps {
  item: any;
}

const CourseCard = ({ item }: ICourseCardProps) => {
  return (
    <Box>
      <Card mx={'xl'} radius={'md'}>
        <Image src={item.imgSrc} />
        <Group justify='space-between' mt={'md'}>
          <Title order={3}>{item.title}</Title>
          <ActionIcon
            bg={'var(--mantine-color-teal-0)'}
            c={'var(--mantine-color-teal-6)'}
          >
            <Forward size={'xl'} />
          </ActionIcon>
        </Group>
        <Group mt={'md'}>
          <ActionIcon bg={'transparent'} c={'var(--mantine-color-gray-6)'}>
            <CalendarDays size={'xl'} />
          </ActionIcon>
          <Title order={6} c={'var(--mantine-color-gray-6)'}>
            {item.startDate}
          </Title>
        </Group>
        <Group mt={'md'}>
          <ActionIcon bg={'transparent'} c={'var(--mantine-color-gray-6)'}>
            <ListVideo size={'xl'} />
          </ActionIcon>
          <Title order={6} c={'var(--mantine-color-gray-6)'}>
            {item.what}
          </Title>
        </Group>
        <Group mt={'md'}>
          <ActionIcon bg={'transparent'} c={'var(--mantine-color-gray-6)'}>
            <UserRoundCheck size={'xl'} />
          </ActionIcon>
          <Title order={6} c={'var(--mantine-color-gray-6)'}>
            {item.forWhom}
          </Title>
        </Group>

        <Group mt={'xl'} justify='space-between'>
          <Box>
            <Title order={2} fw={'lighter'}>
              ${item.discountedPrice}
            </Title>
            <Group>
              <Text size='xs' fw={'bold'} td={'line-through'}>
                ${item.orgPrice}
              </Text>
              <Text size='xs' fw={'bold'} c={'var(--mantine-color-lime-6)'}>
                {item.discountPercentage}% Discount
              </Text>
            </Group>
          </Box>
          <Button
            bg={'var(--mantine-color-teal-0)'}
            c={'var(--mantine-color-teal-6)'}
          >
            Explore
          </Button>
        </Group>
      </Card>
    </Box>
  );
};

export default CourseCard;
