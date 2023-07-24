/* eslint-disable no-constant-condition */
/* eslint-disable @typescript-eslint/no-explicit-any */
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
        <div key={index}>
          {'name' in item && <p>{item.name}</p>}
          {'description' in item && <p>{item.description}</p>}
          <img src={item.poster || item.thumbnail} alt={item.name} />
          {buttonLabel && (
            <button>
              {buttonLabel}
              <FontAwesomeIcon icon={faCirclePlay} />
            </button>
          )}
          <div></div>
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
      emulateTouch={true}
      centerMode={window.innerWidth >= 768}
      centerSlidePercentage={window.innerWidth >= 768 ? 33.3333 : 100}
      swipeScrollTolerance={window.innerWidth >= 768 ? 5 : 1}
    >
      {carouselItems}
    </Carousel>
  );
}

export default ImageCarousel;
