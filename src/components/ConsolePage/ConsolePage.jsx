import React, { useCallback, useState } from 'react';

import frame from '../common/image/Frame 26.svg';

import style from './ConsolePage.module.css';

import { ApiConsole, ButtonSend } from 'components/common';

export const ConsolePage = () => {
  const [valueRequestField, setValueRequestField] = useState('');
  const onClickFormat = useCallback(() => {
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
  }, [valueRequestField]);

  return (
    <div className={style.ConsolePage}>
      <h1 className={style.ConsolePage_header}> Api-консолька</h1>
      <div className={style.ConsolePage_request} />
      <div className={style.ConsolePage_console}>
        <ApiConsole valueField={valueRequestField} setValueField={setValueRequestField} />
        <div role="none">
          <img src={frame} alt="" />
        </div>
        <ApiConsole valueField={valueRequestField} />
      </div>
      <div className={style.ConsolePage_footer}>
        <ButtonSend name="Отправить" />
        <p>@link-to-your-github</p>
        <p role="none" onClick={onClickFormat}>
          Форматировать
        </p>
      </div>
    </div>
  );
};
// const sendsay = new Sendsay({
//   apiUrl: 'https://api.sendsay.ru/general/api/v100/json',
//   auth: {
//     login: 'canatolij@list.ru',
//     sublogin: 'x_1652800416165752',
//     password: 'jo4Joogee',
//   },
// });
// useEffect(() => {
//   sendsay.request({ action: 'track.get' }).then(res => {
//     console.log(res);
//   });
// }, [sendsay]);
