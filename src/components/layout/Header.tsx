import React from 'react';
import { Header } from '@origins-digital/types/ott';
import Link from 'next/link';

function Header({ liveEvents, logo, menuItems, fixed }: Header) {
  return (
    <div className={`${fixed ? 'sticky top-0 z-100' : ''}`}>
      {liveEvents && (
        <div className={'w-full bg-blue-500 text-center md:text-left p-3'}>
          {liveEvents.map((eventItem: any, index: number) => (
            <Link key={eventItem.itemId} href={`/player/events/${eventItem.itemId}`}>
              <span className="text-red-100 md:text-black">Live event #{index + 1}</span>
            </Link>
          ))}
        </div>
      )}

      <header className="flex justify-between items-center p-5 bg-gradient-to-r from-orange-400 to-red-700">
        <nav className="flex justify-center items-center space-x-4 text-white sm:text-black">
          {menuItems &&
            menuItems.map((menuItem: any) => (
              <div key={menuItem._kenticoId}>
                <Link className="text-lg font-medium" href={menuItem.redirectionTarget || '#'}>
                  {menuItem.name}
                </Link>
              </div>
            ))}
        </nav>
        <div className="logo-footer text-black">
          <img src={logo?.url} alt={logo?.name} className="h-10 " />
        </div>

        <div className="flex items-center space-x-4">
          <button className="bg-orange-300 text-white px-12 py-2 rounded">Sign In</button>
        </div>
      </header>
    </div>
  );
}
export default Header;
