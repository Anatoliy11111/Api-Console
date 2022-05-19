import React, { useCallback, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import format from '../common/image/align-right.svg';
import frame from '../common/image/Frame 26.svg';
import logo from '../common/image/LOGO.svg';

import style from './ConsolePage.module.css';

import { requestWithField } from 'Api/Auth-api';
import { ApiConsole, ButtonSend, DropDawn } from 'components/common';
import { getAllRequests, getAllResponse } from 'Redux/selectors';

export const ConsolePage = () => {
  console.log('components');
  const dispatch = useDispatch();
  const responses = useSelector(getAllResponse);
  const requests = useSelector(getAllRequests);
  const [valueRequestField, setValueRequestField] = useState('');
  const onClickFormat = () => {
    const validValue = ['{', '}', ','];
    const newString = [];
    const str = valueRequestField.split('');
    for (let i = 0; i < str.length; i++) {
      if (str[i] === validValue[0] || str[i] === validValue[2]) {
        newString.push(str[i]);
        newString.push('\n');
      } else if (str[i] === validValue[1]) {
        newString.push('\n');
        newString.push(str[i]);
      } else {
        newString.push(str[i]);
      }
    }
    setValueRequestField(newString.join(''));
  };
  const onClickRequestWithField = useCallback(() => {
    dispatch(requestWithField(valueRequestField));
  }, [valueRequestField, dispatch]);
  return (
    <div className={style.ConsolePage}>
      <div className={style.ConsolePage_header}>
        <img src={logo} alt="" /> <h1 className={style.ConsolePage_h1}>Api-консолька</h1>
      </div>
      <div className={style.ConsolePage_request}>
        {' '}
        {!requests.length
          ? '...History Request'
          : // eslint-disable-next-line react/jsx-key
            requests.map(req => <DropDawn name={req.action} />)}
      </div>
      <div className={style.ConsolePage_console}>
        <ApiConsole valueField={valueRequestField} setValueField={setValueRequestField} />
        <div role="none">
          <img src={frame} alt="" />
        </div>
        <ApiConsole
          valueField={responses.length ? JSON.stringify(responses[0], null, 2) : ''}
        />
      </div>
      <div className={style.ConsolePage_footer}>
        <ButtonSend
          disabledButton={!valueRequestField.length}
          name="Отправить"
          onButtonClick={onClickRequestWithField}
        />
        <p>@link-to-your-github</p>
        <div className={style.ConsolePage_footer_format}>
          <img style={{ marginRight: '10px' }} src={format} alt="" />
          <p role="none" onClick={onClickFormat}>
            Форматировать
          </p>
        </div>
      </div>
    </div>
  );
};
