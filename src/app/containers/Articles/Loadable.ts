/**
 *
 * Asynchronously loads the component for Articles
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Articles = lazyLoad(
  () => import('./index'),
  module => module.Articles,
);
