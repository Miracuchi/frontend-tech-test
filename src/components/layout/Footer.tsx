/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { faFacebook, faInstagram, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Footer } from '@origins-digital/types/ott';
import Link from 'next/link';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Footer({ menuItems, logo, socialItems, copyright, legalLinks }: Footer) {
  return (
    <footer className="flex flex-wrap justify-between items-center p-5 bg-gradient-to-r from-orange-400 to-red-700 text-white">
      <div className="w-52">
        <img src={logo?.url} alt={logo?.name} />
      </div>
      <ul className="flex justify-between">
        {menuItems &&
          menuItems.map((menuItem: any, index: number) => (
            <li
              key={menuItem._kenticoId}
              className={`mx-1 ${index === 1 ? 'border-l-2 pl-2' : ''}`}
            >
              <Link href={menuItem.redirectionTarget || '#'}>{menuItem.name}</Link>
            </li>
          ))}
      </ul>
      <ul className="flex sm:flex md:hidden sm:ml-3 sm:text-2xl">
        {socialItems &&
          socialItems.map((socialItem: any) => (
            <li key={socialItem._kenticoId} className="ml-3 text-2xl">
              <a href={socialItem.linkUrl}>
                {socialItem.socialName === 'facebook' && <FontAwesomeIcon icon={faFacebook} />}
                {socialItem.socialName === 'instagram' && <FontAwesomeIcon icon={faInstagram} />}
                {socialItem.socialName === 'tiktok' && <FontAwesomeIcon icon={faTiktok} />}
                {socialItem.socialName === 'twitter' && <FontAwesomeIcon icon={faTwitter} />}
              </a>
            </li>
          ))}
      </ul>
      <div className="w-full mt-2 ml-20 sm:w-auto sm:mt-0">
        <p dangerouslySetInnerHTML={{ __html: copyright }} className="text-center"></p>
      </div>
    </footer>
  );
}

export default Footer;
