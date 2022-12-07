import {useEffect, useState, useCallback} from 'react';
import {Carousel, Embla} from '@mantine/carousel';
import {Image, Progress} from '@mantine/core';

function EmblaCarouselExample() {
  const images = [
    'https://images.unsplash.com/photo-1669351919890-7c976719b7c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1664575196079-9ac04582854b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1669190953021-22920daf2b08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
  ];

  const [scrollProgress, setScrollProgress] = useState(0);
  const [embla, setEmbla] = useState<Embla | null>(null);

  const handleScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);

  useEffect(() => {
    if (embla) {
      embla.on('scroll', handleScroll);
      handleScroll();
    }
  }, [embla]);

  const slides = images.map((url) => {
    return (
      <Carousel.Slide key={url}>
        <Image src={url} />
      </Carousel.Slide>
    );
  });
  return (
    <div>
      <Carousel
        sx={{maxWidth: 320}}
        mx="auto"
        getEmblaApi={setEmbla}
        withIndicators
        height={200}
        styles={{
          control: {
            '&[data-inactive]' : {
              opacity: 0,
              cursor: 'default'
            }
          }
        }}
      >
        {slides}
      </Carousel>
      <Progress
        styles={(theme) => ({
          bar: {
            transitionDuration: '200ms',
            backgroundImage: theme.fn.gradient({
              from: 'red',
              to: 'yellow',
            }),
          },
        })}
        value={scrollProgress}
        size="lg"
        mt="xl"
        mx="auto"
      />
    </div>
  );
}

export default EmblaCarouselExample;
