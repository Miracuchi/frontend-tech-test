/* eslint-disable no-constant-condition */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Image,
  OriginsEventCard,
  OriginsVideoCard,
  SlideSection,
} from '@origins-digital/types/ott';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

function renderItems(items: (OriginsVideoCard | OriginsEventCard | Image)[] | any) {
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
          | null
          | undefined;
        poster: any;
        thumbnail: any;
      },
      index: React.Key | null | undefined,
    ) => {
      let buttonLabel = '';

      if ('name' in item) {
        // If it's an video
        if (item.itemType === 'video') {
          buttonLabel = 'Show Video';
        }
        // If it's another
        else if (item.itemType === 'event' || 'playlist' || 'category') {
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

function Slider({ items }: SlideSection): JSX.Element {
  const carouselItems = renderItems(items);

  return (
    <Carousel infiniteLoop={true} showThumbs={false}>
      {carouselItems}
    </Carousel>
  );
}
export default Slider;
