'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface SimplePlanetProps {
  name: string;
  size: number;
  distance: number;
  speed: number;
  color: string;
  emissive: string;
}

const SIMPLE_PLANETS: SimplePlanetProps[] = [
  {
    name: 'Sun',
    size: 0.6,
    distance: 0,
    speed: 0,
    color: '#FDB813',
    emissive: '#FDB813',
  },
  {
    name: 'Mercury',
    size: 0.15,
    distance: 2,
    speed: 0.04,
    color: '#8C7853',
    emissive: '#654321',
  },
  {
    name: 'Venus',
    size: 0.25,
    distance: 3.5,
    speed: 0.02,
    color: '#FFC649',
    emissive: '#FF9500',
  },
  {
    name: 'Earth',
    size: 0.25,
    distance: 5,
    speed: 0.01,
    color: '#4A90E2',
    emissive: '#2E5C8A',
  },
  {
    name: 'Mars',
    size: 0.18,
    distance: 6.5,
    speed: 0.008,
    color: '#E27B58',
    emissive: '#D64729',
  },
  {
    name: 'Jupiter',
    size: 0.4,
    distance: 8.5,
    speed: 0.003,
    color: '#C88B3A',
    emissive: '#A0680F',
  },
  {
    name: 'Saturn',
    size: 0.35,
    distance: 10.5,
    speed: 0.002,
    color: '#FAD5A5',
    emissive: '#D4A85A',
  },
];

interface PlanetProps {
  config: SimplePlanetProps;
}

interface OrbitRingProps {
  distance: number;
  color: string;
}

function OrbitRing({ distance, color }: OrbitRingProps) {
  const lineRef = useRef<THREE.Line<THREE.BufferGeometry, THREE.Material>>(null);

  useMemo(() => {
    if (!lineRef.current) return;
    
    const points: THREE.Vector3[] = [];
    for (let i = 0; i <= 64; i++) {
      const angle = (i / 64) * Math.PI * 2;
      points.push(
        new THREE.Vector3(
          Math.cos(angle) * distance,
          0,
          Math.sin(angle) * distance
        )
      );
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    lineRef.current.geometry = geometry;
  }, [distance]);

  return (
    <line ref={lineRef}>
      <lineBasicMaterial
        color={color}
        transparent
        opacity={0.2}
        linewidth={0.5}
      />
    </line>
  );
}

function SimplePlanet({ config }: PlanetProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current && config.distance > 0) {
      groupRef.current.rotation.y += config.speed;
    }
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.y += 0.005;
    }
  });

  if (config.distance === 0) {
    return (
      <Sphere args={[config.size, 32, 32]}>
        <meshStandardMaterial
          color={config.color}
          emissive={config.emissive}
          emissiveIntensity={0.8}
          metalness={0.2}
          roughness={0.5}
        />
      </Sphere>
    );
  }

  return (
    <group ref={groupRef}>
      <Sphere args={[config.size, 16, 16]} ref={meshRef} position={[config.distance, 0, 0]}>
        <meshStandardMaterial
          color={config.color}
          emissive={config.emissive}
          emissiveIntensity={0.4}
          metalness={0.2}
          roughness={0.7}
        />
      </Sphere>

      {/* Orbital ring */}
      <OrbitRing distance={config.distance} color={config.color} />
    </group>
  );
}

function SimpleStars() {
  const pointsRef = useRef<THREE.Points>(null);

  useMemo(() => {
    if (!pointsRef.current) return;
    
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 500;
    const positions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 100;
      positions[i + 1] = (Math.random() - 0.5) * 100;
      positions[i + 2] = (Math.random() - 0.5) * 100;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    pointsRef.current.geometry = starGeometry;
  }, []);

  return (
    <points ref={pointsRef}>
      <pointsMaterial size={0.3} color="#ffffff" sizeAttenuation transparent opacity={0.7} />
    </points>
  );
}

export function PlanetaryVisualizer() {
  return (
    <Canvas
      camera={{
        position: [0, 12, 18],
        fov: 50,
        near: 0.1,
        far: 500,
      }}
      style={{
        width: '100%',
        height: '100%',
      }}
      gl={{
        antialias: true,
        alpha: true,
        preserveDrawingBuffer: true,
      }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.6} color="#ffffff" />
      <pointLight
        position={[0, 3, 5]}
        intensity={1.8}
        color="#ffd89b"
        castShadow
      />
      <pointLight position={[-10, 5, -10]} intensity={0.4} color="#87ceeb" />

      {/* Background */}
      <color attach="background" args={['#0a0a0f']} />

      {/* Stars */}
      <SimpleStars />

      {/* Planets */}
      {SIMPLE_PLANETS.map((planet) => (
        <SimplePlanet key={planet.name} config={planet} />
      ))}

      {/* Central glow */}
      <Sphere args={[0.35, 16, 16]} position={[0, 0, 0]}>
        <meshBasicMaterial color="#FFD89B" fog={false} />
      </Sphere>
    </Canvas>
  );
}
