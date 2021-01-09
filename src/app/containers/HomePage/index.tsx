import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <BreadcrumbsItem to="/">Main Page</BreadcrumbsItem>
      <span>HomePage container</span>
    </>
  );
}
