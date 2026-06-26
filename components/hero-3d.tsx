"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import type { Group } from "three";

function Cards() {
  const group = useRef<Group>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (group.current) {
      group.current.rotation.y = Math.sin(t * 0.2) * 0.25 + state.pointer.x * 0.5;
      group.current.rotation.x = -0.12 + state.pointer.y * 0.25;
    }
  });

  const cards = [
    { z: -0.55, color: "#0d1b2e", rot: -0.16, off: [-0.1, 0.12] },
    { z: 0.2, color: "#0b2638", rot: 0.04, off: [0.05, 0.0] },
    { z: 0.95, color: "#0a3a4a", rot: 0.18, off: [0.18, -0.14] },
  ];

  return (
    <group ref={group} rotation={[-0.12, 0.3, 0]}>
      {cards.map((c, i) => (
        <Float
          key={i}
          speed={1.8}
          rotationIntensity={0.25}
          floatIntensity={0.7}
          floatingRange={[-0.12, 0.12]}
        >
          <RoundedBox
            args={[2.4, 1.5, 0.08]}
            radius={0.08}
            smoothness={4}
            position={[c.off[0], c.off[1], c.z]}
            rotation={[0, 0, c.rot]}
          >
            <meshPhysicalMaterial
              color={c.color}
              metalness={0.9}
              roughness={0.18}
              clearcoat={1}
              clearcoatRoughness={0.1}
              emissive={"#0891b2"}
              emissiveIntensity={0.1}
            />
          </RoundedBox>
        </Float>
      ))}

      {/* glowing core */}
      <Float speed={3} floatIntensity={1.2} rotationIntensity={1}>
        <mesh position={[0.25, 0.1, 0.45]}>
          <icosahedronGeometry args={[0.34, 1]} />
          <meshStandardMaterial
            color={"#22d3ee"}
            emissive={"#22d3ee"}
            emissiveIntensity={1.5}
            roughness={0.3}
            metalness={0.5}
          />
        </mesh>
      </Float>
    </group>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 40 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.3} />
      <pointLight position={[-3, 2, 3]} intensity={3} color={"#22d3ee"} />
      <pointLight position={[3, -2, 2]} intensity={2} color={"#6366f1"} />
      <Cards />
      <Sparkles count={45} scale={[9, 6, 4]} size={2} speed={0.3} color={"#22d3ee"} opacity={0.7} />
    </Canvas>
  );
}
