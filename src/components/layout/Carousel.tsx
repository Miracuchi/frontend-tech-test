/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-constant-condition */
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  CarouselSectionDTO,
  OriginsPlaylistCard,
  OriginsVideoCard,
} from '@origins-digital/types/ott';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

function renderItems(items: (OriginsVideoCard | OriginsPlaylistCard)[] | any) {
  return items.map(
    (
      item: {
        itemType: string;
        name: string;
        description:
          | string
          | number
          | boolean
          | React.ReactElement<any, string | React.JSXElementConstructor<any>>
          | Iterable<React.ReactNode>
          | React.ReactPortal
          | undefined;
        poster: any;
        thumbnail: any;
        duration: string;
      },
      index: React.Key | undefined,
    ) => {
      let buttonLabel = '';

      if ('name' in item) {
        // If it's an video
        if (item.itemType === 'video') {
          buttonLabel = 'Show Video';
        }
        // If it's another
        else if (item.itemType === 'playlist' || 'category') {
          buttonLabel = `Open ${
            item.itemType.charAt(0).toUpperCase() + item.itemType.substring(1)
          }`;
        }
      }

      return (
        <div key={index} className="relative my-10 mx-1">
          <img src={item.poster || item.thumbnail} alt={item.name} className="h-64 rounded-lg" />
          <div className="absolute bottom-0 left-0 w-full h-2 bg-blue-500 rounded-b-full"></div>
          <div className="flex justify-between px-4 absolute top-56 left-0 w-full">
            {'name' in item && <p className="text-white font-medium">{item.name}</p>}
            {'duration' in item && <p className="text-white">{item.duration}</p>}
          </div>
          {buttonLabel && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <button>
                {/* {buttonLabel} */}
                <FontAwesomeIcon icon={faCirclePlay} className="text-white text-5xl" />
              </button>
            </div>
          )}
        </div>
      );
    },
  );
}

function ImageCarousel({ items }: CarouselSectionDTO): JSX.Element {
  const carouselItems = renderItems(items);

  return (
    <Carousel
      showStatus={false}
      infiniteLoop={true}
      showThumbs={false}
      dynamicHeight={false}
      // emulateTouch={true}
      centerMode={true}
      centerSlidePercentage={window.innerWidth >= 768 ? 30 : 100}
      swipeScrollTolerance={window.innerWidth >= 768 ? 5 : 1}
      showIndicators={false}
    >
      {carouselItems}
    </Carousel>
  );
}

export default ImageCarousel;
