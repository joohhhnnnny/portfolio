"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function FloatingOrb({ color, position, scale = 1, speed = 1, distort = 0.4 }: {
  color: string;
  position: [number, number, number];
  scale?: number;
  speed?: number;
  distort?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.2;
    meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime * speed * 0.2) * 0.3;
  });

  return (
    <Float speed={speed * 1.5} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.15}
          distort={distort}
          speed={speed * 2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

function ParticleField({ color, count = 200 }: { color: string; count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
      sz[i] = Math.random() * 2 + 0.5;
    }
    return [pos, sz];
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        color={color}
        size={0.03}
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export default function ProjectScene({ color }: { color: string }) {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        <pointLight position={[-5, -5, -5]} intensity={0.3} color={color} />

        <FloatingOrb color={color} position={[-3, 2, -2]} scale={1.5} speed={0.8} distort={0.3} />
        <FloatingOrb color={color} position={[3.5, -1, -3]} scale={2} speed={0.5} distort={0.5} />
        <FloatingOrb color={color} position={[0, -3, -1]} scale={1} speed={1.2} distort={0.4} />
        <FloatingOrb color="#ffffff" position={[-4, -2, -4]} scale={0.8} speed={0.6} distort={0.2} />

        <ParticleField color={color} count={300} />
      </Canvas>
    </div>
  );
}
