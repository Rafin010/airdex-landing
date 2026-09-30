"use client";

import { useRef, useMemo, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/* ---------- Animated wireframe TorusKnot (threejs.org inspired) ---------- */
function WireframeKnot() {
  const meshRef = useRef<THREE.Mesh>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const materialRef = useRef<THREE.LineBasicMaterial>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.12;
      meshRef.current.rotation.x = Math.sin(t * 0.15) * 0.3;
      meshRef.current.rotation.z = Math.cos(t * 0.1) * 0.1;
    }
    if (linesRef.current) {
      linesRef.current.rotation.y = t * 0.12;
      linesRef.current.rotation.x = Math.sin(t * 0.15) * 0.3;
      linesRef.current.rotation.z = Math.cos(t * 0.1) * 0.1;
    }
    // Subtle glow pulse
    if (materialRef.current) {
      materialRef.current.opacity = 0.35 + Math.sin(t * 0.8) * 0.1;
    }
  });

  const geometry = useMemo(() => new THREE.TorusKnotGeometry(2.2, 0.65, 200, 32, 2, 3), []);
  const edges = useMemo(() => new THREE.EdgesGeometry(geometry, 15), [geometry]);

  return (
    <group>
      {/* Solid dark fill so wireframe pops */}
      <mesh ref={meshRef} geometry={geometry}>
        <meshBasicMaterial color="#050505" transparent opacity={0.85} side={THREE.DoubleSide} />
      </mesh>
      {/* Wireframe overlay */}
      <lineSegments ref={linesRef} geometry={edges}>
        <lineBasicMaterial ref={materialRef} color="#1DBF73" transparent opacity={0.4} />
      </lineSegments>
    </group>
  );
}

/* ---------- Floating grid particles ---------- */
function GridParticles() {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, count] = useMemo(() => {
    const n = 600;
    const pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return [pos, n] as const;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial color="#1DBF73" size={0.03} transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

/* ---------- Mouse-reactive camera ---------- */
function CameraRig() {
  const { camera } = useThree();
  const mouseRef = useRef({ x: 0, y: 0 });

  const handlePointerMove = useCallback((e: PointerEvent) => {
    mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
  }, []);

  // Attach listener once
  useMemo(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("pointermove", handlePointerMove);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("pointermove", handlePointerMove);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useFrame(() => {
    camera.position.x += (mouseRef.current.x * 0.8 - camera.position.x) * 0.02;
    camera.position.y += (-mouseRef.current.y * 0.5 - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

/* ---------- Exported scene ---------- */
export default function ThreeScene() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={["#050505"]} />
        <fog attach="fog" args={["#050505", 8, 22]} />
        <ambientLight intensity={0.3} />
        <WireframeKnot />
        <GridParticles />
        <CameraRig />
      </Canvas>
    </div>
  );
}
