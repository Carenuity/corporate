import React, { useEffect, useRef, useState } from 'react';
import styles from './carousel.module.css';

const images = [
  '/img/content/Autonomous/car1.jpg',
  '/img/content/Autonomous/car2.jpg',
  '/img/content/Autonomous/car3.jpg',
  '/img/content/Autonomous/car4.jpg',
  '/img/content/Autonomous/car5.jpg',
  '/img/content/Autonomous/car6.jpg',
];

const scrollAmount = 240; // height of one image + margin

const Carousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const scroll = (direction: 'up' | 'down') => {
    if (!containerRef.current) return;
    containerRef.current.scrollBy({
      top: direction === 'down' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered && containerRef.current) {
        scroll('down');

        const container = containerRef.current;
        if (
          container.scrollTop + container.clientHeight >=
          container.scrollHeight
        ) {
          container.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div
      className={styles.carouselWrapper}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.carouselContainer} ref={containerRef}>
        {images.map((src, index) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={index}
            src={src}
            alt={`Car ${index + 1}`}
            className={styles.carouselImage}
          />
        ))}
      </div>

      <div className={styles.carouselButtons}>
        <button className={styles.carouselButton} onClick={() => scroll('up')}>
          ↑ Previous
        </button>
        <button
          className={styles.carouselButton}
          onClick={() => scroll('down')}
        >
          ↓ Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;

// import React from 'react';
// import styles from './carousel.module.css';
// import { ChevronUp, ChevronDown } from 'lucide-react';

// const images = [
//   '/img/content/Autonomous/car1.jpg',
//   '/img/content/Autonomous/car2.jpg',
//   '/img/content/Autonomous/car3.jpg',
//   '/img/content/Autonomous/car4.jpg',
//   '/img/content/Autonomous/car5.jpg',
//   '/img/content/Autonomous/car6.jpg',
// ];

// Duplicate images for infinite scroll
// const doubledImages = [...images, ...images];

// const Carousel = () => {
//   return (
//     <div className={styles.carouselWrapper}>
//       <button
//         className={`${styles.carouselButtonIcon} ${styles.buttonUp}`}
//         aria-label="Scroll up"
//       >
//         <ChevronUp />
//       </button>

//       <div className={styles.carouselContent}>
//         {doubledImages.map((src, index) => (
//           // eslint-disable-next-line @next/next/no-img-element
//           <img
//             key={index}
//             src={src}
//             alt={`Car ${index + 1}`}
//             className={styles.carouselImage}
//           />
//         ))}
//       </div>

//       <button
//         className={`${styles.carouselButtonIcon} ${styles.buttonDown}`}
//         aria-label="Scroll down"
//       >
//         <ChevronDown />
//       </button>
//     </div>
//   );
// };

// export default Carousel;
