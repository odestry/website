import {Link} from '@remix-run/react';
import config from 'site-config';

export function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex flex-col justify-between h-screen antialiased px-3 md:px-6 lg:px-12 w-full">
      <header className="flex items-center justify-between py-4 md:py-6">
        <Link
          to="/"
          className="md:text-xl tracking-tight select-none font-medium text-black/80"
        >
          {config.name}
        </Link>
      </header>
      <main
        role="main"
        id="mainContent"
        className="grid place-items-center outline-none"
      >
        {children}
      </main>
      <footer className="flex flex-col md:flex-row md:items-center justify-between py-4 md:py-6">
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
        <div className="hidden md:block text-sm text-black/80">
          <Link to={config.poweredBy.url} target="_blank">
            {config.poweredBy.name}
          </Link>
        </div>
      </footer>
    </div>
  );
}
