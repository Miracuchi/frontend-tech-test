/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Footer } from '@origins-digital/types/ott';
import Link from 'next/link';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Footer({ menuItems, logo, socialItems, copyright, legalLinks }: Footer) {
  return (
    <footer>
      <div className="logo-footer">
        <img src={logo?.url} />
      </div>
      <ul>
        {menuItems &&
          menuItems.map((e: any) => (
            <li key={e._kenticoId}>
              <Link href={e.redirectionTarget || '#'}>{e.name}</Link>
            </li>
          ))}
      </ul>
      <div className="copyright" dangerouslySetInnerHTML={{ __html: copyright }}></div>
      <ul>
        {socialItems &&
          socialItems.map((socialItem: any) => (
            <li key={socialItem._kenticoId}>
              <a href={socialItem.linkUrl}>
                <p>{socialItem.socialName}</p>
              </a>
            </li>
          ))}
      </ul>
    </footer>
  );
}

export default Footer;
