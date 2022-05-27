import React, { memo } from 'react';

import { useSelector } from 'react-redux';

import loader from '../image/loader.svg';

import style from './ButtonSend.module.css';

import { getStatusLoading } from 'Redux/selectors';

export const ButtonSend = memo(({ name, onButtonClick, type, disabledButton }) => {
  const preloader = useSelector(getStatusLoading);
  const styleButton = disabledButton
    ? [style.button__disabled, style.button].join(' ')
    : style.button;
  const onClickButtonSend = () => {
    if (onButtonClick) {
      onButtonClick();
    }
  };
  return (
    <button
      className={styleButton}
      type={type}
      aria-label="Save"
      onClick={onClickButtonSend}
      disabled={disabledButton}
    >
      {preloader ? <img src={loader} alt="" /> : name}
    </button>
  );
});
