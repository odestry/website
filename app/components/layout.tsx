export function Layout({children}: {children: React.ReactNode}) {
  return (
    <main
      role="main"
      id="mainContent"
      className="flex-grow px-6 md:px-8 lg:px-12 w-full"
    >
      {children}
    </main>
  );
}
