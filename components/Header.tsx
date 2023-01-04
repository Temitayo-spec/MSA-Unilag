import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from '../styles/Header.module.css';
import { BiChevronDown } from 'react-icons/bi';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const pathname = usePathname(),
    [dropdownOne, setDropdownOne] = useState(false),
    [dropdownTwo, setDropdownTwo] = useState(false),
    [dropdownThree, setDropdownThree] = useState(false),
    [dropdownFour, setDropdownFour] = useState(false),
    toggleDropdownOne = () => {
      setDropdownOne(!dropdownOne);
    },
    toggleDropdownTwo = () => {
      setDropdownTwo(!dropdownTwo);
    },
    toggleDropdownThree = () => {
      setDropdownThree(!dropdownThree);
    },
    toggleDropdownFour = () => {
      setDropdownFour(!dropdownFour);
    },
    closeDropdowns = () => {
      setDropdownOne(false);
      setDropdownTwo(false);
      setDropdownThree(false);
      setDropdownFour(false);
      setToggle(false);
    };


  return (
    <header className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.logo__ctn}>
          <Link href="/" className={styles.logo__ctn}>
            <Image
              src="/images/msa-logo.jpg"
              alt="msa-logo"
              width={100}
              height={100}
            />
          </Link>
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
            <li className={pathname === '/blog' ? styles.active__link : ''}>
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
                onClick={() => toggleDropdownOne()}
                className={`${styles.drop__box} ${
                  dropdownOne ? styles.active : ''
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
                  dropdownOne ? styles.active : ''
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
                onClick={() => toggleDropdownTwo()}
                className={`${styles.drop__box} ${
                  dropdownTwo ? styles.active : ''
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
                  dropdownTwo ? styles.active : ''
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
                <Link onClick={closeDropdowns} href="/events/msa-tutorials">
                  MSA Tutorials
                </Link>
                <Link onClick={closeDropdowns} href="/events/msa-sports">
                  MSA Sports
                </Link>
              </div>
            </li>
            <li className={styles.dropdown}>
              <div
                onClick={() => toggleDropdownThree()}
                className={`${styles.drop__box} ${
                  dropdownThree ? styles.active : ''
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
                  dropdownThree ? styles.active : ''
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
                onClick={() => toggleDropdownFour()}
                className={`${styles.drop__box} ${
                  dropdownFour ? styles.active : ''
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
                  dropdownFour ? styles.active : ''
                }`}
              >
                <Link onClick={closeDropdowns} href="/do-something/volunteer">
                  Volunteer
                </Link>
                <Link onClick={closeDropdowns} href="/do-something/join-pr">
                  Join PR Team
                </Link>
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
