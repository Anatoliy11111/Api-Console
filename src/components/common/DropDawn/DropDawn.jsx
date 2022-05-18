import React, { useState } from 'react';

import style from './DropDawn.module.css';

export const DropDawn = ({ name }) => {
  const [active, setActive] = useState(false);
  const onClickOpenMenu = () => {
    setActive(!active);
  };
  return (
    <div className={style.drop_dawn_container}>
      <div
        onKeyDown={() => {}}
        role="button"
        tabIndex={0}
        className={style.drop_dawn}
        onClick={onClickOpenMenu}
      >
        {name}
      </div>
      {active && (
        <div className={style.drop_dawn_action_menu}>
          <div className={style.drop_dawn_action}>
            <div className={style.drop_dawn_come}>Войти</div>
          </div>
          <div className={style.drop_dawn_action}>
            <div className={style.drop_dawn_copy}>Скопировать</div>
          </div>
          <hr className={style.drop_dawn_copy_hr} />
          <div className={style.drop_dawn_action}>
            <div className={style.drop_dawn_delete}>Удалить</div>
          </div>
        </div>
      )}
    </div>
  );
};
