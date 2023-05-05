import {Suspense} from 'react';
import {Canvas} from '@react-three/fiber';
import {Sky, Environment, Cloud} from '@react-three/drei';

export default function Scene() {
  return (
    <div className="absolute inset-0 w-full h-screen -z-10">
      <Canvas shadows camera={{position: [-50, -25, 150], fov: 15}}>
        <Suspense fallback={null}>
          <hemisphereLight intensity={1} />
          <spotLight
            angle={0.4}
            penumbra={1}
            position={[20, 30, 2.5]}
            castShadow
            shadow-bias={-0.00001}
          />
          <directionalLight
            color="violet"
            position={[-10, -10, 0]}
            intensity={1.5}
          />
          <Cloud scale={1} position={[20, 0, 0]} />
          <Cloud scale={2} position={[-20, 10, 0]} />
          <Environment preset="city" />
          <Sky />
        </Suspense>
      </Canvas>
    </div>
  );
}
