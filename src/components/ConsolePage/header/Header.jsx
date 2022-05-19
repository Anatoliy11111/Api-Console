import React from 'react';

import style from '../ConsolePage.module.css';

import logout from 'components/common/image/log-out.svg';
import logo from 'components/common/image/LOGO.svg';

export const Header = () => (
  <div className={style.ConsolePage_header_container}>
    <div className={style.ConsolePage_header}>
      <img src={logo} alt="" /> <h1 className={style.ConsolePage_h1}>Api-консолька</h1>
    </div>
    <div className={style.ConsolePage_header_logout}>
      <p className={style.ConsolePage_header_logout_p}>выйти</p>
      <img src={logout} alt="" />
    </div>
  </div>
);
