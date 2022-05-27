import React from 'react';

import style from './ApiConsole.module.css';

export const ApiConsole = ({ valueField, setValueField, error, width }) => {
  const onChangeValueField = e => {
    if (setValueField) {
      setValueField(e.currentTarget.value);
    }
  };
  return (
    <textarea
      className={
        error
          ? `${[style.api_console, style.api_console_error].join(' ')}`
          : style.api_console
      }
      value={valueField}
      onChange={e => onChangeValueField(e)}
      // style={{ width }}
    />
  );
};
