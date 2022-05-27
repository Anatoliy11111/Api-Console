import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useClipboard } from 'use-clipboard-copy';

import style from './RequestBar.module.css';

import { requestWithField } from 'Api/api';
import { DropDawn } from 'components/common';
import { deleteRequest } from 'Redux/reducers';
import { getAllRequests, getAuthData } from 'Redux/selectors';

export const RequestBar = ({ setValueRequestField }) => {
  const dispatch = useDispatch();
  const authData = useSelector(getAuthData);
  const clipboard = useClipboard({
    copiedTimeout: 1000,
  });
  const onClickTitleRequest = request => {
    setValueRequestField(JSON.stringify(request, null, 2));
  };
  const onClickExecute = request => {
    setValueRequestField(JSON.stringify(request, null, 2));
    dispatch(requestWithField(JSON.stringify(request), authData));
  };
  const onClickCopy = request => {
    clipboard.copy(JSON.stringify(request, null, 2));
  };
  const onClickDeleteRequest = request => {
    dispatch(deleteRequest(request));
  };
  const requests = useSelector(getAllRequests);
  return (
    <div className={style.request_bar}>
      {' '}
      {!requests.length
        ? '...History Request'
        : requests.map(req => (
            <DropDawn
              key={req.action}
              name={req.action}
              onClickTitle={() => onClickTitleRequest(req)}
              onClickExecute={() => onClickExecute(req)}
              onClickCopy={() => onClickCopy(req)}
              onClickDeleteRequest={() => onClickDeleteRequest(req)}
              isCopy={clipboard.copied}
            />
          ))}
    </div>
  );
};
