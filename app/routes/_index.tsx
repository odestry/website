import Scene from '~/components/scene';

export function meta() {
  return [
    {title: 'Odystra'},
    {
      description:
        'Shopify developer collective focused on open sourcing tools and packages in the Shopify ecosystem.',
    },
  ];
}

export default function Index() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Scene />
    </>
  );
}
