import { Breadcrumb } from './breadcrumb.js';

export const SampleBreadcrumb = () => {
  return (
    <Breadcrumb
      typographyProps={{
        fontSize: 30,
      }}
      crumbs={[
        { crumb: 'Home', link: '/' },
        { crumb: 'Components' },
        { crumb: 'Breadcrumb', link: '/component/breadcrumb' },
      ]}
    />
  );
};
