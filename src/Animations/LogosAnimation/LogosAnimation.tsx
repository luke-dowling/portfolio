import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";
import {
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiReact,
  SiJavascript,
  SiDocker,
  SiNextdotjs,
  SiExpress,
} from "react-icons/si";

function PulsingIcon({
  children,
  radius,
  speed,
}: {
  children: React.ReactNode;
  radius: number;
  speed: number;
}) {
  const ref = useRef<THREE.Group>(null);
  const [distance, setDistance] = useState(radius);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    if (ref.current) {
      const x = Math.cos(t) * radius;
      const z = Math.sin(t) * radius;
      ref.current.position.set(x, 0, z);
      const d = Math.sqrt(x * x + z * z);
      setDistance(d);
    }
  });

  const intensity = Math.max(0, 1.2 - distance / radius);
  const scale = 1 + Math.sin(Date.now() * 0.005) * 0.2 * intensity;

  return (
    <group ref={ref} scale={scale}>
      <Html center>
        <div
          style={{
            width: "50px",
            height: "50px",

            color: intensity > 0.2 ? "transparent" : "#db583e",
            transition: "all 0.2s ease",
          }}
        >
          {children}
        </div>
      </Html>
    </group>
  );
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 2, 4] }} className="home-logo-animation">
      <ambientLight intensity={1} />
      <pointLight position={[0, 0, 0]} intensity={1.5} />

      <PulsingIcon radius={3} speed={0.2}>
        <SiReact style={{ fontSize: "50px" }} />
      </PulsingIcon>
      <PulsingIcon radius={1.5} speed={0.17}>
        <SiNextdotjs style={{ fontSize: "50px" }} />
      </PulsingIcon>
      <PulsingIcon radius={2} speed={-0.25}>
        <SiTypescript style={{ fontSize: "50px" }} />
      </PulsingIcon>
      <PulsingIcon radius={3} speed={0.3}>
        <SiJavascript style={{ fontSize: "50px" }} />
      </PulsingIcon>
      <PulsingIcon radius={4} speed={-0.22}>
        <SiPostgresql style={{ fontSize: "50px" }} />
      </PulsingIcon>
      <PulsingIcon radius={2.5} speed={-0.28}>
        <SiExpress style={{ fontSize: "50px" }} />
      </PulsingIcon>

      <PulsingIcon radius={4} speed={0.28}>
        <SiMongodb style={{ fontSize: "50px" }} />
      </PulsingIcon>
      <PulsingIcon radius={3.5} speed={0.1}>
        <SiDocker style={{ fontSize: "50px" }} />
      </PulsingIcon>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
