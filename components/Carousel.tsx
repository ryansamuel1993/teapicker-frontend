import { Carousel as FlowbiteCarousel } from 'flowbite-react';
import { ResponsiveImage } from './ResponsiveImage';
import { UserMedia } from '@/service/types/user';

type CarouselProps = {
  images: UserMedia[];
};

const customTheme = {
  root: {
    base: 'relative h-full w-full justify-center',
    leftControl: 'hidden',
    rightControl: 'hidden',
  },
  indicators: {
    active: {
      off: 'hidden',
      on: 'hidden',
    },
  },
  item: {
    base: 'absolute left-1/2 top-1/2 block w-full pb-8 px-4 md:px-0.5 -translate-x-1/2 -translate-y-1/2',
    wrapper: {
      off: 'w-full flex-shrink-0 transform cursor-default snap-center',
      on: 'w-full flex-shrink-0 transform cursor-grab snap-center',
    },
  },
  control: {
    base: 'inline-flex size-8 pb-2 items-center justify-center rounded-full group-focus:outline-none sm:size-10',
    icon: 'size-6 hover:text-white text-white/50 sm:size-4',
  },
  scrollContainer: {
    base: 'flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg',
    snap: 'snap-x',
  },
};

export const Carousel = ({ images }: CarouselProps) => {
  if (!images?.length) {
    return null;
  }

  return (
    <FlowbiteCarousel theme={customTheme}>
      {images.map((image) => (
        <div key={image.id} className="w-full">
          <ResponsiveImage image={image} />
        </div>
      ))}
    </FlowbiteCarousel>
  );
};
