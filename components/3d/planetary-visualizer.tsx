'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Text, OrbitControls, useTexture } from '@react-three/drei';
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
    name: 'Surya',
    size: 0.8,
    distance: 0,
    speed: 0,
    color: '#FDB813',
    emissive: '#FDB813',
  },
  {
    name: 'Budh',
    size: 0.2,
    distance: 2.5,
    speed: 0.05,
    color: '#8C7853',
    emissive: '#654321',
  },
  {
    name: 'Shukra',
    size: 0.28,
    distance: 4,
    speed: 0.025,
    color: '#FFC649',
    emissive: '#FF9500',
  },
  {
    name: 'Prithvi',
    size: 0.28,
    distance: 5.8,
    speed: 0.015,
    color: '#4A90E2',
    emissive: '#2E5C8A',
  },
  {
    name: 'Mangal',
    size: 0.22,
    distance: 7.5,
    speed: 0.01,
    color: '#E27B58',
    emissive: '#D64729',
  },
  {
    name: 'Brihaspati',
    size: 0.45,
    distance: 9.5,
    speed: 0.005,
    color: '#C88B3A',
    emissive: '#A0680F',
  },
  {
    name: 'Shani',
    size: 0.4,
    distance: 11.5,
    speed: 0.003,
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
  const groupRef = useRef<THREE.Group>(null);

  useMemo(() => {
    if (!groupRef.current) return;
    
    // Clear previous children
    while (groupRef.current.children.length > 0) {
      groupRef.current.remove(groupRef.current.children[0]);
    }

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
    const material = new THREE.LineBasicMaterial({
      color: color,
      transparent: true,
      opacity: 0.2,
      linewidth: 0.5,
    });
    const line = new THREE.Line(geometry, material);
    groupRef.current.add(line);
  }, [distance, color]);

  return <group ref={groupRef} />;
}

function SimplePlanet({ config }: PlanetProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current && config.distance > 0) {
      groupRef.current.rotation.y += config.speed;
    }
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002;
      meshRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group ref={groupRef}>
      <OrbitRing distance={config.distance} color={config.color} />
      {config.distance > 0 && (
        <group position={[config.distance, 0, 0]}>
          <Sphere
            ref={meshRef}
            args={[config.size, 32, 32]}
            position={[0, 0, 0]}
          >
            <meshStandardMaterial
              color={config.color}
              emissive={config.emissive}
              emissiveIntensity={0.4}
              metalness={0.3}
              roughness={0.6}
              wireframe={false}
            />
          </Sphere>
          {/* Glow effect */}
          <Sphere
            args={[config.size * 1.15, 32, 32]}
            position={[0, 0, 0]}
          >
            <meshBasicMaterial
              color={config.emissive}
              transparent
              opacity={0.15}
              wireframe={false}
            />
          </Sphere>
        </group>
      )}
      {config.distance === 0 && (
        <Sphere
          ref={meshRef}
          args={[config.size, 64, 64]}
          position={[0, 0, 0]}
        >
          <meshStandardMaterial
            color={config.color}
            emissive={config.emissive}
            emissiveIntensity={0.6}
            metalness={0.1}
            roughness={0.3}
            wireframe={false}
          />
        </Sphere>
      )}
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
      camera={{ position: [0, 15, 20], fov: 50 }}
      style={{ width: '100%', height: '100%' }}
      gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[0, 5, 10]} intensity={1.2} />
      <pointLight position={[-10, 5, -10]} intensity={0.4} />
      
      {/* Background */}
      <SimpleStars />
      
      {/* Planets and orbits */}
      <group rotation={[0.2, 0, 0]}>
        {SIMPLE_PLANETS.map((planet) => (
          <SimplePlanet key={planet.name} config={planet} />
        ))}
      </group>

      {/* Central sun glow */}
      <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
        <meshBasicMaterial
          color="#FDB813"
          transparent
          opacity={0.08}
        />
      </Sphere>

      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        autoRotate={true}
        autoRotateSpeed={1}
      />
    </Canvas>
  );
}
