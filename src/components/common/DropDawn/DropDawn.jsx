import React, { memo, useState } from 'react';

import style from './DropDawn.module.css';

import { DropDawnSetting } from 'components/common/DropDawn/dropDawnSetting/DropDawnSetting';

export const DropDawn = memo(
  ({ name, onClickTitle, onClickExecute, onClickCopy, isCopy, onClickDeleteRequest }) => {
    const [active, setActive] = useState(false);
    const onClickOpenMenu = () => {
      setActive(!active);
    };
    return (
      <div className={style.drop_dawn_container}>
        <div className={style.drop_dawn_title}>
          <div
            onKeyDown={() => {}}
            tabIndex={0}
            role="button"
            onClick={onClickTitle}
            className={isCopy ? style.drop_dawn_is_copy : ''}
          >
            {name}
          </div>
          <div
            className={style.drop_dawn_button_image}
            role="none"
            onClick={onClickOpenMenu}
          />
        </div>
        {active && (
          <DropDawnSetting
            onClickDeleteRequest={onClickDeleteRequest}
            onClickCopy={onClickCopy}
            onClickExecute={onClickExecute}
          />
        )}
      </div>
    );
  },
);
