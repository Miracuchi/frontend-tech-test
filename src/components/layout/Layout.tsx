/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable simple-import-sort/imports */
import clsx from 'clsx';

import Footer from './Footer';
import Header from './Header';
// import Slider from './Slider';
// import Carousel from './Carousel';
import FullPageLoader from '$components/FullPageLoader';
import { useQuery } from 'react-query';
import { InitConfig } from '@origins-digital/types/ott';
import Cms from 'src/services/Cms';

function Layout({ children }: { children: React.ReactNode }): JSX.Element {
  const { data: config, status } = useQuery(['dataNav'], () => Cms.getConfig());

  if (status === 'loading') return <FullPageLoader />;

  return (
    <>
      <Header {...config.header} />
      {/* <Slider {...config.SlideSection} /> */}
      {/* <Carousel /> */}
      <div className="flex min-h-screen w-full flex-col gap-10 overflow-hidden">
        <main
          className={clsx('mx-auto flex w-full flex-grow flex-col content-spacer overflow-hidden')}
        >
          {children}
        </main>
        {/* Au lieu de passer l'objet config.footer, on le déconstruit ici pour ensuite passer chacun de ses objets en props au composant Footer */}
        <Footer {...config.footer} />
      </div>
    </>
  );
}

export default Layout;
