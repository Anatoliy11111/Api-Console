import React from 'react';

import style from './DropDawnSetting.module.css';

export const DropDawnSetting = ({
  onClickExecute,
  onClickCopy,
  onClickDeleteRequest,
}) => (
  <div className={style.drop_dawn_action_menu}>
    <div className={style.drop_dawn_action}>
      <div role="none" className={style.drop_dawn_come} onClick={onClickExecute}>
        Выполнить
      </div>
    </div>
    <div role="none" className={style.drop_dawn_action} onClick={onClickCopy}>
      <div className={style.drop_dawn_copy}>Скопировать</div>
    </div>
    <hr className={style.drop_dawn_copy_hr} />
    <div role="none" className={style.drop_dawn_action} onClick={onClickDeleteRequest}>
      <div className={style.drop_dawn_delete}>Удалить</div>
    </div>
  </div>
);
