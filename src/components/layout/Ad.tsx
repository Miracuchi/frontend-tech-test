/* eslint-disable no-constant-condition */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import React from 'react';
import { AdvertisementSection } from '@origins-digital/types/ott';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

// function renderItems(image: string | any) {
//   return image.map(
//     (
//       item: {
//         itemType: string;
//         name: string;
//         url: string;
//       },
//       index: React.Key | null | undefined,
//     ) => {
//       return (
//         <div key={index}>
//           {'name' in item && <p>{item.name}</p>}
//           <a href={redirectionTarget} target="_blank" rel="noreferrer">
//             <img src={item.url} alt={item.name} />
//           </a>
//         </div>
//       );
//     },
//   );
// }

// interface AdProps {
//   data: AdvertisementSection;
// }

// function Ad({ data }: AdvertisementSection | any): JSX.Element {
//   return (
//     <div>
//       {/* Affichez les éléments de data ici */}
//       <img src={data.image[0].url} alt="Advertisement" />
//       <a href={data.redirectionTarget}>Cliquez ici</a>
//     </div>
//   );
// }

function Ad(dataAd: AdvertisementSection) {
  const { image, redirectionTarget } = dataAd;
  return (
    <div>
      <a href={redirectionTarget} target="_blank" rel="noreferrer">
        <img src={image[0].image.url} alt={image[0].image.name} />
      </a>
    </div>
  );
}
export default Ad;
