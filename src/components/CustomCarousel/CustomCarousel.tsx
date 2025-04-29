import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Children, ReactNode, useRef, useState } from 'react';
import { ActionIcon, Box, Group, Title } from '@mantine/core';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import youtubeImg from '../../assets/image 4.png';
import CourseCard from '../CourseCard/CourseCard';
import company1 from '../../assets/company1.png';
import company2 from '../../assets/company2.png';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const courseCardsData = [
  {
    imgSrc: youtubeImg,
    title: 'Fullstack Data Science',
    startDate: '1 Jan 2025',
    what: 'Course Resources & Self Paced Learning',
    forWhom: 'College Students & Working Professionals',
    discountedPrice: '3300.00',
    orgPrice: '11000.00',
    discountPercentage: '70',
  },
  {
    imgSrc: youtubeImg,
    title: 'Fullstack Data Science',
    startDate: '1 Jan 2025',
    what: 'Course Resources & Self Paced Learning',
    forWhom: 'College Students & Working Professionals',
    discountedPrice: '3300.00',
    orgPrice: '11000.00',
    discountPercentage: '70',
  },
  {
    imgSrc: youtubeImg,
    title: 'Fullstack Data Science',
    startDate: '1 Jan 2025',
    what: 'Course Resources & Self Paced Learning',
    forWhom: 'College Students & Working Professionals',
    discountedPrice: '3300.00',
    orgPrice: '11000.00',
    discountPercentage: '70',
  },
  {
    imgSrc: youtubeImg,
    title: 'Fullstack Data Science',
    startDate: '1 Jan 2025',
    what: 'Course Resources & Self Paced Learning',
    forWhom: 'College Students & Working Professionals',
    discountedPrice: '3300.00',
    orgPrice: '11000.00',
    discountPercentage: '70',
  },
  {
    imgSrc: youtubeImg,
    title: 'Fullstack Data Science',
    startDate: '1 Jan 2025',
    what: 'Course Resources & Self Paced Learning',
    forWhom: 'College Students & Working Professionals',
    discountedPrice: '3300.00',
    orgPrice: '11000.00',
    discountPercentage: '70',
  },
  {
    imgSrc: youtubeImg,
    title: 'Fullstack Data Science',
    startDate: '1 Jan 2025',
    what: 'Course Resources & Self Paced Learning',
    forWhom: 'College Students & Working Professionals',
    discountedPrice: '3300.00',
    orgPrice: '11000.00',
    discountPercentage: '70',
  },
  {
    imgSrc: youtubeImg,
    title: 'Fullstack Data Science',
    startDate: '1 Jan 2025',
    what: 'Course Resources & Self Paced Learning',
    forWhom: 'College Students & Working Professionals',
    discountedPrice: '3300.00',
    orgPrice: '11000.00',
    discountPercentage: '70',
  },
];

const testimonialCardsData = [
  {
    name: 'Khushboo Gaur',
    role: 'AI/ML Engineer',
    content:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    companyFrom: company1,
    companyTo: company2,
  },
  {
    name: 'Khushboo Gaur',
    role: 'AI/ML Engineer',
    content:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    companyFrom: company1,
    companyTo: company2,
  },
  {
    name: 'Khushboo Gaur',
    role: 'AI/ML Engineer',
    content:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    companyFrom: company1,
    companyTo: company2,
  },
  {
    name: 'Khushboo Gaur',
    role: 'AI/ML Engineer',
    content:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    companyFrom: company1,
    companyTo: company2,
  },
  {
    name: 'Khushboo Gaur',
    role: 'AI/ML Engineer',
    content:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    companyFrom: company1,
    companyTo: company2,
  },
  {
    name: 'Khushboo Gaur',
    role: 'AI/ML Engineer',
    content:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    companyFrom: company1,
    companyTo: company2,
  },
  {
    name: 'Khushboo Gaur',
    role: 'AI/ML Engineer',
    content:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    companyFrom: company1,
    companyTo: company2,
  },
  {
    name: 'Khushboo Gaur',
    role: 'AI/ML Engineer',
    content:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    companyFrom: company1,
    companyTo: company2,
  },
];

interface ICustomCarouselProps {
  title: string;
  actionButtons?: ReactNode;
  differentiator: string;
}

const CustomCarousel = ({
  title,
  actionButtons,
  differentiator,
}: ICustomCarouselProps) => {
  const sliderRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false, // 🚫 Disable built-in arrows to avoid conflicts
    adaptiveHeight: true, // Helps with rendering
    beforeChange: (_current: number, next: number) => setCurrentSlide(next),
    afterChange: (current: number) => setCurrentSlide(current),
  };

  // ✅ 4. Safest button handlers (with null checks)
  const goPrev = () => {
    if (sliderRef.current) sliderRef.current.slickPrev();
    else console.error('Slider ref not attached!');
  };

  const goNext = () => {
    if (sliderRef.current) sliderRef.current.slickNext();
    else console.error('Slider ref not attached!');
  };

  return (
    <Box py={'sm'} px={'xl'} maw={'100%'} mt={'lg'}>
      <Group justify='space-between' mb={'xl'}>
        <Title order={1}>{title}</Title>
        {actionButtons}
      </Group>
      {/* ✅ 5. Key fix: Add a wrapper div to ensure proper DOM mounting */}
      <Box>
        <Slider
          ref={(slider) => {
            sliderRef.current = slider;
            if (slider) {
              const childrenArray = Children.toArray(slider.props.children);
              setSlideCount(childrenArray.length);
            }
          }}
          {...settings}
        >
          {differentiator === 'courses'
            ? courseCardsData.map((item, idx) => (
                <CourseCard item={item} key={idx} />
              ))
            : testimonialCardsData.map((item, idx) => (
                <TestimonialCard item={item} key={idx} />
              ))}
        </Slider>
      </Box>

      {/* ✅ 6. Styled buttons with onClick safeguards */}
      <Group justify='center' mt={'xl'} pt={'md'}>
        <ActionIcon
          onClick={goPrev}
          disabled={currentSlide === 0}
          bg={'var(--mantine-color-white)'}
          c={
            currentSlide === 0
              ? 'var(--mantine-color-teal-1)'
              : 'var(--mantine-color-teal-6)'
          }
          p={0}
          m={0}
          radius={'xl'}
          size={'lg'}
        >
          <ChevronLeft size={'xl'} />
        </ActionIcon>
        <ActionIcon
          onClick={goNext}
          disabled={currentSlide >= slideCount - settings.slidesToShow}
          bg={'var(--mantine-color-white)'}
          c={
            currentSlide >= slideCount - settings.slidesToShow
              ? 'var(--mantine-color-teal-1)'
              : 'var(--mantine-color-teal-6)'
          }
          p={0}
          m={0}
          radius={'xl'}
          size={'lg'}
        >
          <ChevronRight size={'xl'} />
        </ActionIcon>
      </Group>
    </Box>
  );
};

export default CustomCarousel;
