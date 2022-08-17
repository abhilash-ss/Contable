import React from 'react';

const routes = [
  { name: 'Home', component: React.lazy(() => import('./home')) },
  { name: 'Stats', component: React.lazy(() => import('./stats')) },
  { name: 'Payment', component: React.lazy(() => import('./payment')) },
  { name: 'Profile', component: React.lazy(() => import('./profile')) },
];

export default routes;
