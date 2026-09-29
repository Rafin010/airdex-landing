"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

function AnimatedCard() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <RoundedBox ref={meshRef} args={[3, 4, 0.2]} radius={0.1} smoothness={4}>
        <MeshDistortMaterial
          color="#050505"
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={0.8}
          roughness={0.2}
          distort={0.2}
          speed={2}
        />
      </RoundedBox>
      <RoundedBox args={[3.2, 4.2, 0.1]} radius={0.15} smoothness={4} position={[0, 0, -0.2]}>
        <meshStandardMaterial color="#1DBF73" emissive="#1DBF73" emissiveIntensity={0.5} wireframe />
      </RoundedBox>
    </Float>
  );
}

export default function ThreeScene() {
  return (
    <div className="w-full h-full cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#1DBF73" intensity={2} />
        <AnimatedCard />
      </Canvas>
    </div>
  );
}
