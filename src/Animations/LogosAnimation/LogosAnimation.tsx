import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { useRef, useState, useMemo, useEffect } from "react";
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

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(media.matches);
    const listener = () => setPrefersReducedMotion(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  return prefersReducedMotion;
}

function PulsingIcon({
  children,
  prefersReducedMotion,
}: {
  children: React.ReactNode;
  prefersReducedMotion: boolean;
}) {
  const ref = useRef<THREE.Group>(null);

  const { radius, speed } = useMemo(() => {
    const r = Math.random() * 2 + 1;
    const s = (Math.random() * 0.2 + 0.1) * (Math.random() > 0.5 ? 1 : -1);
    return { radius: r, speed: s };
  }, []);

  const [distance, setDistance] = useState(radius);

  useFrame(({ clock }) => {
    if (prefersReducedMotion) return;

    const t = clock.getElapsedTime() * speed;
    if (ref.current) {
      const x = Math.cos(t) * radius;
      const z = Math.sin(t) * radius;
      ref.current.position.set(x, 0, z);
      setDistance(Math.sqrt(x * x + z * z));
    }
  });

  const intensity = Math.max(0, 1.2 - distance / radius);
  const scale = prefersReducedMotion
    ? 1
    : 1 + Math.sin(Date.now() * 0.005) * 0.2 * intensity;

  return (
    <group ref={ref} scale={scale}>
      <Html center>
        <div
          style={{
            width: "40px",
            height: "40px",
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
  const prefersReducedMotion = usePrefersReducedMotion();

  const icons = [
    <SiReact style={{ fontSize: "40px" }} />,
    <SiNextdotjs style={{ fontSize: "40px" }} />,
    <SiTypescript style={{ fontSize: "40px" }} />,
    <SiJavascript style={{ fontSize: "40px" }} />,
    <SiPostgresql style={{ fontSize: "40px" }} />,
    <SiExpress style={{ fontSize: "40px" }} />,
    <SiMongodb style={{ fontSize: "40px" }} />,
    <SiDocker style={{ fontSize: "40px" }} />,
  ];

  return (
    <Canvas
      camera={{ position: [0, 2, 4] }}
      className="home-logo-animation"
      frameloop={prefersReducedMotion ? "demand" : "always"}
    >
      <ambientLight intensity={1} />
      <pointLight position={[0, 0, 0]} intensity={1.5} />

      {icons.map((icon, i) => (
        <PulsingIcon key={i} prefersReducedMotion={prefersReducedMotion}>
          {icon}
        </PulsingIcon>
      ))}

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
