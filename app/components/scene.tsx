import {Suspense} from 'react';
import {Canvas} from '@react-three/fiber';
import {Sky, Environment, Cloud} from '@react-three/drei';

export default function Scene() {
  return (
    <div className="absolute inset-0 w-full h-screen -z-10">
      <Canvas shadows camera={{position: [-50, -25, 120], fov: 75}}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight
            color="white"
            position={[-10, -10, 0]}
            intensity={2}
          />
          <Cloud scale={8} position={[20, 0, 0]} />
          <Cloud scale={6} position={[-20, 10, 0]} />
          <Environment preset="city" />
          <Sky
            azimuth={0.1}
            turbidity={10}
            rayleigh={0.5}
            inclination={0.6}
            distance={1000}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
