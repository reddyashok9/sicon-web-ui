/**
 *
 * Asynchronously loads the component for Authenticator
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Authenticator = lazyLoad(
  () => import('./index'),
  module => module.Authenticator,
);
