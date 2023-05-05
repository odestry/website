import {Link} from '@remix-run/react';
import config from 'site-config';

export function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex flex-col min-h-screen antialiased bg-white px-6 md:px-8 lg:px-12 w-full">
      <main
        role="main"
        id="mainContent"
        className="grid place-items-center outline-none h-[calc(100vh-4rem)]"
      >
        {children}
      </main>
      <footer className="flex items-center justify-between h-4">
        <ul className="flex items-center gap-x-4 list-none">
          {config.links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.url}
                target="_blank"
                className="text-sm capitalize text-black/80"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-sm text-black/80">
          {config.poweredBy.label}{' '}
          <Link to={config.poweredBy.url} target="_blank">
            {config.poweredBy.name}
          </Link>
        </p>
      </footer>
    </div>
  );
}
