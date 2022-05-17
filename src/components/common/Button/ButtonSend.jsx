import React from 'react';

import style from './ButtonSend.module.css';

export const ButtonSend = ({ name, onButtonClick, type, disabledButton }) => {
  const styleButton = disabledButton ? style.button__disabled : style.button;
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
      {name}
    </button>
  );
};
