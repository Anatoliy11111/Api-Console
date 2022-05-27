import React, { memo, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import style from './Footer.module.css';

import { requestWithField } from 'Api/api';
import { ButtonSend } from 'components/common';
import { getAuthData } from 'Redux/selectors';

export const Footer = memo(
  ({ valueRequestField, setValueRequestField, isValidJson, setIsValid }) => {
    const dispatch = useDispatch();
    const authData = useSelector(getAuthData);
    const onClickFormat = useCallback(() => {
      const obj = JSON.parse(valueRequestField);
      setValueRequestField(JSON.stringify(obj, null, 2));
    }, [valueRequestField]);

    const onClickRequestWithField = useCallback(() => {
      if (isValidJson()) {
        dispatch(requestWithField(valueRequestField, authData));
        setIsValid(false);
      } else {
        setIsValid(true);
      }
    }, [valueRequestField]);
    return (
      <div className={style.footer}>
        <ButtonSend
          disabledButton={!valueRequestField.length}
          name="Отправить"
          onButtonClick={onClickRequestWithField}
        />
        <p className={style.footer_format_link}>@link-to-your-github</p>
        <div className={style.footer_format}>
          <div className={style.footer_format_img} />
          <p role="none" onClick={onClickFormat}>
            Форматировать
          </p>
        </div>
      </div>
    );
  },
);
