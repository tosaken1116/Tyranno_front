import {
  faHouse,
  faMagnifyingGlass,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export const SIDEBAR_ITEMS = [
  {
    path: '/search',
    icon: <FontAwesomeIcon icon={faMagnifyingGlass} />,
    selectedIcon: <FontAwesomeIcon icon={faMagnifyingGlass} />,
    children: <Link href="/search">Search</Link>,
  },
  {
    path: '/home',
    icon: <FontAwesomeIcon icon={faHouse} />,
    selectedIcon: <FontAwesomeIcon icon={faHouse} />,
    children: <Link href="/home">Home</Link>,
  },
  {
    path: '/profile/my',
    icon: <FontAwesomeIcon icon={faUser} />,
    selectedIcon: <FontAwesomeIcon icon={faUser} />,
    children: <Link href="/profile/my">Profile</Link>,
  },
];
