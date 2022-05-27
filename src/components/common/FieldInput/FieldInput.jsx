import React, { memo } from 'react';

import style from './FieldInput.module.css';

export const FieldInput = memo(
  ({ error, nameField, value, onChangeFieldInput, type, id, name, onBlurInput }) => (
    <div className={style.inputContainer}>
      <div className={error ? style.errorNameFieldInput : style.nameFieldInput}>
        {nameField}
      </div>
      <input
        id={id}
        name={name}
        onBlur={onBlurInput}
        className={error ? [style.errorInput, style.input].join(' ') : style.input}
        value={value}
        onChange={onChangeFieldInput}
        type={type}
      />
    </div>
  ),
);
