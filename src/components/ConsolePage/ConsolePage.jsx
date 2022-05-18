import React from 'react';

import style from './ConsolePage.module.css';

import { ApiConsole, ButtonSend } from 'components/common';

export const ConsolePage = () => (
  <div className={style.ConsolePage}>
    <h1 className={style.ConsolePage_header}> Api-консолька</h1>
    <div className={style.ConsolePage_request} />
    <div className={style.ConsolePage_console}>
      <ApiConsole />
      <div>()</div>
      <ApiConsole />
    </div>
    <div className={style.ConsolePage_footer}>
      <ButtonSend name="Отправить" />
      <p>@link-to-your-github</p>
      <p>Форматировать</p>
    </div>
  </div>
);
