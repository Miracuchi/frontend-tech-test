import { useQuery } from 'react-query';
import clsx from 'clsx';
import Cms from 'src/services/Cms';

import Footer from './Footer';
import Header from './Header';

import FullPageLoader from '$components/FullPageLoader';

function Layout({ children }: { children: React.ReactNode }): JSX.Element {
  const { data: config, status } = useQuery(['dataNav'], () => Cms.getConfig());

  if (status === 'loading') return <FullPageLoader />;

  return (
    <>
      {config && <Header {...config.header} />}
      <div className="flex min-h-screen w-full flex-col gap-10 overflow-hidden">
        <main
          className={clsx('mx-auto flex w-full flex-grow flex-col content-spacer overflow-hidden')}
        >
          {children}
        </main>
        {/* Au lieu de passer l'objet config.footer, on le déconstruit ici pour ensuite passer chacun de ses objets en props au composant Footer */}
        {config && <Footer {...config.footer} />}
      </div>
    </>
  );
}

export default Layout;
