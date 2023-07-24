/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import { useQuery } from 'react-query';
import {
  AdvertisementSection,
  CarouselSectionDTO,
  KenticoPageLayoutDTO,
  SectionContent,
  SlideSection,
} from '@origins-digital/types/ott';
import { OriginsVideoCard } from '@origins-digital/types/ott';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Cms from 'src/services/Cms';

import Ad from '$components/layout/Ad';
import Carousel from '$components/layout/Carousel';
import Slider from '$components/layout/Slider';
import { DEFAULT_LANGUAGE, KENTICO_HARDCODED_PAGES } from '$utils/constants';

type IProps = InferGetStaticPropsType<typeof getStaticProps>;

function Home({ page }: IProps): JSX.Element | null {
  const findComponent = (data: any[], key: any) => {
    return data.find(
      (dataComponent: { _kenticoItemType: any }) => dataComponent._kenticoItemType === key,
    );
  };
  const { components } = page;
  const dataSlider = findComponent(components, 'section_static_slider');
  const dataCarousel = findComponent(components, 'section_static_carousel');
  const dataAd = findComponent(components, 'section_static_ad');
  console.log('INDEX: receiving page ', page);
  console.log('INDEX: found ad ', dataAd);
  return (
    <>
      {dataSlider && <Slider {...dataSlider} />}
      {dataCarousel && <Carousel {...dataCarousel} />}
      {dataAd && <Ad {...dataAd} />}
      {/* <pre>{JSON.stringify(page, null, 2)}</pre> */}
    </>
  );
}

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  const pageLocale = locale ?? DEFAULT_LANGUAGE;

  try {
    const [page, webConfig] = await Promise.allSettled([
      Cms.getPageContent(KENTICO_HARDCODED_PAGES.HOME, {
        params: {
          language: pageLocale,
        },
      }),
      Cms.getConfig(),
    ]);
    console.log('Promesse', page, webConfig);
    return {
      props: {
        page: page.status === 'fulfilled' ? page.value : null,
        webConfig: webConfig.status === 'fulfilled' ? webConfig.value : null,
      },
    };
  } catch (error) {
    console.log('Erreur', error);
    return { notFound: true };
  }
};

export default Home;
