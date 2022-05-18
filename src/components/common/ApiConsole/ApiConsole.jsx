import React from 'react';

import style from './ApiConsole.module.css';

export const ApiConsole = ({ valueField, setValueField }) => {
  const onChangeValueField = e => {
    if (setValueField) {
      setValueField(e.currentTarget.value);
    }
  };
  return (
    <div>
      <textarea
        className={style.api_console}
        value={valueField}
        onChange={e => onChangeValueField(e)}
      />
    </div>
  );
};
