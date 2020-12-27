/**
 *
 * Articles
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectArticles } from './selectors';
import { articlesSaga } from './saga';
import { messages } from './messages';

interface Props {}

export const Articles = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: articlesSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const articles = useSelector(selectArticles);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Articles</title>
        <meta name="description" content="Description of Articles" />
      </Helmet>
      <div>
        {t('test')}
        {/*  {t(...messages.someThing)}  */}
      </div>
    </>
  );
});
