import * as React from 'react';

import { Link } from 'components/link/Link';

// import StarterLogo from 'assets/svg/starter-logo.svg';

import s from './Header.scss';

interface IHeaderProps {
  children: React.ReactNode;
}

export const Header = ({ children }: IHeaderProps) => (
  <header className={s.header}>
    <div className={s.header__container}>
      <div className={s.header__content}>
        <p className={s.header__logo}>Loops </p>
         

        <div className={s.header__navigation}>
          {children}
        </div>
      </div>
    </div>
  </header>
);
