import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from '../styles/Header.module.css';
import { BiChevronDown } from 'react-icons/bi';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const pathname = usePathname(),
    [dropdown, setDropdown] = useState(''),
    closeDropdowns = () => {
      setDropdown('');
      setToggle(false);
    };

  return (
    <header className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.logo__ctn}>
          <div className={styles.center}>
            <Link href="/" className={styles.img__ctn}>
              <Image
                src="/images/MSA_LOGO.png"
                alt="msa-logo"
                width={70}
                height={70}
              />
            </Link>
            <div className={styles.logo__text}>
              <h6>Management students association</h6>
            </div>
          </div>
          <div
            className={`${styles.burger} ${
              toggle ? styles.active__burger : ''
            }`}
            onClick={() => setToggle(!toggle)}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <nav
          className={`${styles.nav__ctn} ${toggle ? styles.active__nav : ''}`}
        >
          <ul className={styles.nav__links}>
            <li className={pathname === '/' ? styles.active__link : ''}>
              <Link onClick={closeDropdowns} href="/">
                Home
              </Link>
            </li>
            <li
              className={
                pathname === '/blog' || pathname?.includes('blog')
                  ? styles.active__link
                  : ''
              }
            >
              <Link onClick={closeDropdowns} href="/blog">
                Blog
              </Link>
            </li>
            <li className={pathname === '/gallery' ? styles.active__link : ''}>
              <Link onClick={closeDropdowns} href="/gallery">
                Gallery
              </Link>
            </li>
            <li className={styles.dropdown}>
              <div
                onClick={() => {
                  if (dropdown === 'associations') {
                    setDropdown('');
                  } else {
                    setDropdown('associations');
                  }
                }}
                className={`${styles.drop__box} ${
                  dropdown === 'associations' ? styles.active : ''
                } ${
                  pathname === '/associations' ||
                  pathname?.includes('associations')
                    ? styles.active__link
                    : ''
                }`}
              >
                <p>Associations</p>
                <BiChevronDown className={styles.dropdown__icon} />
              </div>
              <div
                className={`${styles.dropdown__content} ${
                  dropdown === 'associations' ? styles.active : ''
                }`}
              >
                <Link
                  onClick={closeDropdowns}
                  href="/associations/department-associations"
                >
                  Department Associations
                </Link>
                <Link onClick={closeDropdowns} href="/associations/societies">
                  Societies
                </Link>
              </div>
            </li>
            <li className={styles.dropdown}>
              <div
                onClick={() => {
                  if (dropdown === 'events') {
                    setDropdown('');
                  } else {
                    setDropdown('events');
                  }
                }}
                className={`${styles.drop__box} ${
                  dropdown === 'events' ? styles.active : ''
                } ${
                  pathname === '/events' || pathname?.includes('events')
                    ? styles.active__link
                    : ''
                }`}
              >
                <p>Events</p>
                <BiChevronDown className={styles.dropdown__icon} />
              </div>
              <div
                className={`${styles.dropdown__content} ${
                  dropdown === 'events' ? styles.active : ''
                }`}
              >
                <Link onClick={closeDropdowns} href="/events/msa-events">
                  MSA Events
                </Link>
                <Link
                  onClick={closeDropdowns}
                  href="/events/msa-community-service"
                >
                  MSA Community Service
                </Link>
                {/* <Link onClick={closeDropdowns} href="/pq_tutorial">
                  PQ & Tutorials
                </Link> */}
                <Link onClick={closeDropdowns} href="/events/msa-sports">
                  MSA Sports
                </Link>
              </div>
            </li>
            <li className={styles.dropdown}>
              <div
                onClick={() => {
                  if (dropdown === 'leadership') {
                    setDropdown('');
                  } else {
                    setDropdown('leadership');
                  }
                }}
                className={`${styles.drop__box} ${
                  dropdown === 'leadership' ? styles.active : ''
                } ${
                  pathname === '/leadership' || pathname?.includes('leadership')
                    ? styles.active__link
                    : ''
                }`}
              >
                <p>Leadership</p>
                <BiChevronDown className={styles.dropdown__icon} />
              </div>
              <div
                className={`${styles.dropdown__content} ${
                  dropdown === 'leadership' ? styles.active : ''
                }`}
              >
                <Link
                  onClick={closeDropdowns}
                  href="/leadership/msa-executives"
                >
                  MSA Executives
                </Link>
                <Link
                  onClick={closeDropdowns}
                  href="/associations/department-associations"
                >
                  Department Executives
                </Link>
                <Link
                  onClick={closeDropdowns}
                  href="/leadership/class-representatives"
                >
                  Class Representatives
                </Link>
              </div>
            </li>
            <li className={pathname === '/about' ? styles.active__link : ''}>
              <Link onClick={closeDropdowns} href="/about">
                About
              </Link>
            </li>
            <li className={pathname === '/contact' ? styles.active__link : ''}>
              <Link onClick={closeDropdowns} href="/contact">
                Contact
              </Link>
            </li>
            <li className={styles.dropdown}>
              <div
                onClick={() => {
                  if (dropdown === 'do-something') {
                    setDropdown('');
                  } else {
                    setDropdown('do-something');
                  }
                }}
                className={`${styles.drop__box} ${
                  dropdown === 'do-something' ? styles.active : ''
                } ${
                  pathname === '/do-something' ||
                  pathname?.includes('do-something')
                    ? styles.active__link
                    : ''
                }`}
              >
                <p>Do Something</p>
                <BiChevronDown className={styles.dropdown__icon} />
              </div>
              <div
                className={`${styles.dropdown__content} ${
                  dropdown === 'do-something' ? styles.active : ''
                }`}
              >
                {/* <Link onClick={closeDropdowns} href="/do-something/volunteer">
                  Volunteer
                </Link>
                <Link onClick={closeDropdowns} href="/do-something/join-pr">
                  Join PR Team
                </Link> */}
                <Link onClick={closeDropdowns} href="/do-something/sponsorship">
                  Sponsorship
                </Link>
                <Link onClick={closeDropdowns} href="/do-something/donations">
                  Donations
                </Link>
                <Link onClick={closeDropdowns} href="/do-something/msa-dues">
                  MSA Dues
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
