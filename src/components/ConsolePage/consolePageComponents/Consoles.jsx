import React, { memo, useState } from 'react';

import { useSelector } from 'react-redux';

import style from './Consoles.module.css';

import { ApiConsole } from 'components/common';
import frame from 'components/common/image/Frame 26.svg';
import { getAllResponse } from 'Redux/selectors';

export const Consoles = memo(({ valueRequestField, setValueRequestField, isValid }) => {
  const responses = useSelector(getAllResponse);
  const [stateWindow, setStateWindow] = useState(['600px', '600px']);
  const widthWindow = e => {};
  return (
    <div className={style.consoles_container} onMouseMove={e => widthWindow(e.pageX)}>
      <ApiConsole
        valueField={valueRequestField}
        setValueField={setValueRequestField}
        error={isValid}
        width={stateWindow[0]}
      />
      <div role="button">
        <img src={frame} alt="" draggable="false" />
      </div>
      <ApiConsole
        valueField={responses.length ? JSON.stringify(responses[0], null, 2) : ''}
        width={stateWindow[1]}
      />
    </div>
  );
});
