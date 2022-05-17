import React from 'react';

import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import style from './LoginPage.module.css';

import { isAuth } from 'Api/Auth-api';
import { ButtonSend, FieldInput } from 'components/common';
import { getErrorAuth, getErrorText } from 'Redux/selectors';

export const LoginPage = () => {
  const errorStatus = useSelector(getErrorAuth);
  const errorText = useSelector(getErrorText);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      subLogin: '',
      password: '',
    },
    onSubmit: values => {
      dispatch(isAuth(values));
    },
  });

  const inputAttributes = [
    {
      id: 'email',
      name: 'email',
      nameField: 'Логин',
      type: 'email',
      value: formik.values.email,
      error: formik.touched.email && !formik.values.email.length,
      onBlurInput: formik.handleBlur,
      onChangeFieldInput: formik.handleChange,
    },
    {
      id: 'subLogin',
      name: 'subLogin',
      nameField: 'Сублогин',
      type: 'subLogin',
      value: formik.values.subLogin,
      error: false,
      onBlurInput: formik.handleBlur,
      onChangeFieldInput: formik.handleChange,
    },
    {
      id: 'password',
      name: 'password',
      nameField: 'Пароль',
      type: 'password',
      value: formik.values.password,
      error: formik.touched.password && !formik.values.password.length,
      onBlurInput: formik.handleBlur,
      onChangeFieldInput: formik.handleChange,
    },
  ];
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={style.LoginPage}>
        <div className={style.LoginPage__form}>
          <h1 className={style.LoginPage__title}>Api-консолька</h1>
          {errorStatus && (
            <div className={style.LoginPage__ErrorAuth}>
              <p className={style.LoginPage__ErrorAuth__TextError}>Вход не вышел </p>
              <p className={style.LoginPage__ErrorAuth__TextError}>{errorText}</p>
            </div>
          )}

          {inputAttributes.map(atr => (
            <div key={atr.id} className={style.LoginPage__Input}>
              <FieldInput
                id={atr.id}
                name={atr.name}
                nameField={atr.nameField}
                type={atr.type}
                value={atr.value}
                error={atr.error}
                onBlurInput={atr.onBlurInput}
                onChangeFieldInput={atr.onChangeFieldInput}
              />
            </div>
          ))}

          <div className={style.LoginPage__Button}>
            <ButtonSend
              name="Войти"
              type="submit"
              disabledButton={
                !formik.values.email.length || !formik.values.password.length
              }
            />
          </div>
        </div>
      </div>
    </form>
  );
};
