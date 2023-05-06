import {type LinksFunction} from '@shopify/remix-oxygen';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import styles from './styles/app.css';
import favicon from '../public/favicon.png';
import {Layout} from './components/layout';
import config from 'site-config';
import {useEffect} from 'react';

export const links: LinksFunction = () => {
  return [
    {rel: 'stylesheet', href: styles},
    {
      rel: 'preconnect',
      href: 'https://cdn.shopify.com',
    },
    {rel: 'icon', type: 'image/png', href: favicon},
  ];
};

export default function App() {
  useEffect(() => {
    new ResizeObserver((entries) =>
      document.documentElement.style.setProperty(
        '--screen-height',
        `${entries[0].contentRect.height}px`,
      ),
    ).observe(document.documentElement);
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta property="theme-color" content={config.color} />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
