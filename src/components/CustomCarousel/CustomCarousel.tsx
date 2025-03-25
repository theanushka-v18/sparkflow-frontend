import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useRef } from 'react';

const CustomCarousel = () => {
  const sliderRef = useRef<any>(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false, // 🚫 Disable built-in arrows to avoid conflicts
    adaptiveHeight: true, // Helps with rendering
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
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      {/* ✅ 5. Key fix: Add a wrapper div to ensure proper DOM mounting */}
      <div>
        <Slider ref={sliderRef} {...settings}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <div key={item}>
              <h3
                style={{
                  background: '#f0f0f0',
                  padding: '30px',
                  textAlign: 'center',
                  margin: '5px',
                  border: '1px solid #ddd',
                }}
              >
                Slide {item}
              </h3>
            </div>
          ))}
        </Slider>
      </div>

      {/* ✅ 6. Styled buttons with onClick safeguards */}
      <div
        style={{
          display: 'flex',
          gap: '10px',
          justifyContent: 'center',
          marginTop: '20px',
        }}
      >
        <button
          onClick={goPrev}
          style={{
            padding: '10px 20px',
            background: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Previous
        </button>
        <button
          onClick={goNext}
          style={{
            padding: '10px 20px',
            background: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CustomCarousel;
