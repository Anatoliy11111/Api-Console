import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import style from './ConsolePage.module.css';

import { RequestBar } from 'components/ConsolePage/consolePageComponents/ RequestBar';
import { Consoles } from 'components/ConsolePage/consolePageComponents/Consoles';
import { Footer } from 'components/ConsolePage/consolePageComponents/Footer';
import { Header } from 'components/ConsolePage/consolePageComponents/Header';
import { getStatusIsLogin } from 'Redux/selectors';

export const ConsolePage = () => {
  const isLogin = useSelector(getStatusIsLogin);
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();
  const [valueRequestField, setValueRequestField] = useState('');
  const isValidJson = () => {
    try {
      JSON.parse(valueRequestField);
      return true;
    } catch (e) {
      return false;
    }
  };
  useEffect(() => {
    if (!isLogin) {
      navigate('/login');
    }
  }, [isLogin]);
  return (
    <div className={style.ConsolePage}>
      <Header />
      <RequestBar setValueRequestField={setValueRequestField} />
      <Consoles
        valueRequestField={valueRequestField}
        setValueRequestField={setValueRequestField}
        isValid={isValid}
      />
      <Footer
        setValueRequestField={setValueRequestField}
        valueRequestField={valueRequestField}
        isValidJson={isValidJson}
        setIsValid={setIsValid}
      />
    </div>
  );
};
