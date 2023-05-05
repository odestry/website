import Scene from '~/components/scene';
import Balancer from 'react-wrap-balancer';
import config from 'site-config';

export function meta() {
  return [
    {title: config.title},
    {
      description:
        config.description ||
        'Odestry is a developer collective focused on open sourcing tools and packages in the Shopify ecosystem.',
    },
  ];
}

export default function Index() {
  return (
    <>
      <Heading title={config.title} />
      <Scene />
    </>
  );
}

function Heading({title}: {title: string}) {
  return (
    <h1 className="font-semibold select-none leading-tighter drop-shadow-md text-black/90 leading-tight text-4xl md:text-6xl lg:text-[6vw]">
      <Balancer>{title}</Balancer>
    </h1>
  );
}
