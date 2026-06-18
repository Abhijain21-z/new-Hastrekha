'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

interface PlanetConfig {
  name: string;
  size: number;
  distance: number;
  speed: number;
  color: string;
  emissive: string;
}

const PLANETS: PlanetConfig[] = [
  {
    name: 'Sun (Surya)',
    size: 0.8,
    distance: 0,
    speed: 0,
    color: '#FDB813',
    emissive: '#FDB813',
  },
  {
    name: 'Mercury (Budh)',
    size: 0.2,
    distance: 3,
    speed: 0.04,
    color: '#8C7853',
    emissive: '#654321',
  },
  {
    name: 'Venus (Shukra)',
    size: 0.35,
    distance: 5,
    speed: 0.015,
    color: '#FFC649',
    emissive: '#FF9500',
  },
  {
    name: 'Earth (Prithvi)',
    size: 0.36,
    distance: 7,
    speed: 0.01,
    color: '#4A90E2',
    emissive: '#2E5C8A',
  },
  {
    name: 'Mars (Mangal)',
    size: 0.25,
    distance: 9,
    speed: 0.008,
    color: '#E27B58',
    emissive: '#D64729',
  },
  {
    name: 'Jupiter (Brihaspati)',
    size: 0.6,
    distance: 12,
    speed: 0.002,
    color: '#C88B3A',
    emissive: '#A0680F',
  },
  {
    name: 'Saturn (Shani)',
    size: 0.5,
    distance: 15,
    speed: 0.0009,
    color: '#FAD5A5',
    emissive: '#D4A85A',
  },
  {
    name: 'Uranus (Var)',
    size: 0.4,
    distance: 18,
    speed: 0.0004,
    color: '#4FD0E7',
    emissive: '#2BB3D0',
  },
  {
    name: 'Neptune (Varun)',
    size: 0.38,
    distance: 20,
    speed: 0.0001,
    color: '#4166F5',
    emissive: '#1E3A9A',
  },
];

interface PlanetProps {
  config: PlanetConfig;
}

interface OrbitRingProps {
  distance: number;
  color: string;
}

function AdvancedOrbitRing({ distance, color }: OrbitRingProps) {
  const groupRef = useRef<THREE.Group>(null);

  useMemo(() => {
    if (!groupRef.current) return;
    
    // Clear previous children
    while (groupRef.current.children.length > 0) {
      groupRef.current.remove(groupRef.current.children[0]);
    }

    const points: THREE.Vector3[] = [];
    for (let i = 0; i <= 128; i++) {
      const angle = (i / 128) * Math.PI * 2;
      points.push(
        new THREE.Vector3(
          Math.cos(angle) * distance,
          0,
          Math.sin(angle) * distance
        )
      );
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({
      color: color,
      transparent: true,
      opacity: 0.15,
      linewidth: 1,
    });
    const line = new THREE.Line(geometry, material);
    groupRef.current.add(line);
  }, [distance, color]);

  return <group ref={groupRef} />;
}

function Planet({ config }: PlanetProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current && config.distance > 0) {
      groupRef.current.rotation.y += config.speed;
    }
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.008;
    }
  });

  if (config.distance === 0) {
    return (
      <Sphere args={[config.size, 64, 64]}>
        <meshStandardMaterial
          color={config.color}
          emissive={config.emissive}
          emissiveIntensity={0.6}
          metalness={0.4}
          roughness={0.6}
        />
      </Sphere>
    );
  }

  return (
    <group ref={groupRef}>
      <Icosahedron args={[config.size, 5]} ref={meshRef} position={[config.distance, 0, 0]}>
        <meshStandardMaterial
          color={config.color}
          emissive={config.emissive}
          emissiveIntensity={0.3}
          metalness={0.3}
          roughness={0.7}
        />
      </Icosahedron>

      {/* Orbital ring */}
      <AdvancedOrbitRing distance={config.distance} color={config.color} />
    </group>
  );
}

function CelestialLabels() {
  return (
    <group>
      {PLANETS.map((planet) => (
        <group key={planet.name} position={[planet.distance + 1.5, planet.size + 0.8, 0]}>
          <mesh
            position={[0, 0, 0.1]}
            scale={[1, 1, 1]}
          >
            <planeGeometry args={[3, 1]} />
            <meshBasicMaterial transparent color="#ffffff" opacity={0} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

export function PlanetarySystem() {
  return (
    <Canvas
      camera={{
        position: [0, 25, 35],
        fov: 50,
        near: 0.1,
        far: 1000,
      }}
      style={{
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 30% 40%, rgba(29, 53, 87, 0.4) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(67, 133, 214, 0.2) 0%, transparent 50%)',
      }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.5} color="#ffffff" />
      <pointLight
        position={[0, 5, 10]}
        intensity={1.5}
        color="#ffd89b"
        castShadow
      />
      <pointLight position={[-20, 10, -20]} intensity={0.5} color="#87ceeb" />
      <pointLight position={[20, 10, -20]} intensity={0.5} color="#b0c4de" />

      {/* Stars background */}
      <Stars />

      {/* Planets */}
      {PLANETS.map((planet) => (
        <Planet key={planet.name} config={planet} />
      ))}

      {/* Central glow */}
      <Sphere args={[0.5, 32, 32]} position={[0, 0, 0]}>
        <meshBasicMaterial color="#FFD89B" fog={false} />
      </Sphere>
    </Canvas>
  );
}

function Stars() {
  const starsRef = useRef<THREE.Points>(null);

  useMemo(() => {
    if (!starsRef.current) return;
    
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 1000;
    const positions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 200;
      positions[i + 1] = (Math.random() - 0.5) * 200;
      positions[i + 2] = (Math.random() - 0.5) * 200;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starsRef.current.geometry = starGeometry;
  }, []);

  return (
    <points ref={starsRef}>
      <pointsMaterial size={0.5} color="#ffffff" sizeAttenuation transparent opacity={0.6} />
    </points>
  );
}
