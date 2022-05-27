import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import style from './Header.module.css';

import logout from 'components/common/image/log-out.svg';
import logo from 'components/common/image/LOGO.svg';
import { authData, isAuthStatus } from 'Redux/reducers';
import { getAuthData } from 'Redux/selectors';

export const Header = () => {
  const login = useSelector(getAuthData);
  const dispatch = useDispatch();
  const onClickFullScreen = () => {
    if (document.fullscreenElement !== null) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  };
  const onClickLogOut = () => {
    dispatch(isAuthStatus(false));
    dispatch(authData({}));
  };

  return (
    <div className={style.header_container}>
      <div className={style.header}>
        <img src={logo} alt="" /> <h1 className={style.header_title}>Api-консолька</h1>
      </div>
      <div className={style.header_logout_container}>
        <div className={style.header_login}>
          {login.sublogin ? `${login.login}  :  ${login.sublogin}` : login.login}
        </div>
        <div
          onKeyDown={() => {}}
          tabIndex={0}
          role="button"
          onClick={onClickLogOut}
          className={style.header_logout}
        >
          <p className={style.header_logout_text}>выйти</p>
          <img src={logout} alt="" />
        </div>
        <div className={style.header_fullscreen_container}>
          <div
            role="none"
            onClick={onClickFullScreen}
            className={style.header_fullscreen}
          />
        </div>
      </div>
    </div>
  );
};
