import { Box, Card, Group, Image, Text, Title } from '@mantine/core';
import { ArrowRight } from 'lucide-react';

interface ITestimonialCardProps {
  item: any;
}

const TestimonialCard = ({ item }: ITestimonialCardProps) => {
  return (
    <Box>
      <Card mx={'xl'} radius={'md'}>
        <Title order={3} ta={'center'}>
          {item.name}
        </Title>
        <Title
          order={6}
          fw={600}
          ta={'center'}
          c={'var(--mantine-color-gray-6)'}
        >
          {item.role}
        </Title>
        <Text
          size='sm'
          ta={'center'}
          mt={'md'}
          c={'var(--mantine-color-gray-6)'}
        >
          {item.content}
        </Text>
        <Group justify='center' mt={'md'}>
          <Image src={item.companyFrom} w={'100px'} />
          <ArrowRight />
          <Image src={item.companyTo} />
        </Group>
      </Card>
    </Box>
  );
};

export default TestimonialCard;
