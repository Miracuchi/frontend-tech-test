/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Header } from '@origins-digital/types/ott';
import Link from 'next/link';

function Header({ favicon, liveEvents, logo, menuItems, fixed }: Header) {
  return (
    <header>
      <div className="liveEvent">
        {liveEvents &&
          liveEvents.map((eventItem: any, index: number) => (
            <Link key={eventItem.itemId} href={`/player/events/${eventItem.itemId}`}>
              <span>Live event #{index + 1}</span>
            </Link>
          ))}
      </div>
      <ul>
        {menuItems &&
          menuItems.map((e: any) => (
            <li key={e._kenticoId}>
              <Link href={e.redirectionTarget || '#'}>{e.name}</Link>
            </li>
          ))}
      </ul>
      <div className="logo-footer">
        <img src={logo?.url} alt={logo?.name} />
      </div>
    </header>
  );
}
export default Header;
