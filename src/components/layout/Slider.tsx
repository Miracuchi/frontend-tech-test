/* eslint-disable no-constant-condition */
/* eslint-disable @typescript-eslint/no-explicit-any */
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

import { Button } from '@onrewind/ui';

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
        thumbnail:
          | string
          | number
          | boolean
          | React.ReactElement<any, string | React.JSXElementConstructor<any>>
          | Iterable<React.ReactNode>
          | React.ReactPortal
          | null
          | undefined;
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
          <img
            src={item.poster || item.thumbnail}
            alt={item.name}
            className="filter brightness-50 grayscale-100 h-screen"
          />
          <div className="absolute top-0 left-10 w-96 h-full flex flex-col justify-center">
            {'description' in item && <p className="text-white text-left">{item.description}</p>}
            {'name' in item && (
              <p className="text-white font-medium text-left text-4xl">{item.name}</p>
            )}
            {buttonLabel && (
              <Button className="bg-orange-400 text-white text-sm mt-1 w-36 rounded whitespace-nowrap">
                {buttonLabel}
                <FontAwesomeIcon icon={faCirclePlay} className="text-blue-200 m-2 text-2xl" />
              </Button>
            )}
          </div>
        </div>
      );
    },
  );
}

function Slider({ items }: SlideSection): JSX.Element {
  const carouselItems = renderItems(items);

  return (
    <Carousel infiniteLoop={true} showThumbs={false} showStatus={false}>
      {carouselItems}
    </Carousel>
  );
}
export default Slider;
