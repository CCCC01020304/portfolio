'use client';
import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import gsap from 'gsap';
import styles from './Hero.module.css';

function Scene() {
    const meshRef = useRef<Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;
        const time = state.clock.getElapsedTime();
        meshRef.current.rotation.x = time * 0.15;
        meshRef.current.rotation.y = time * 0.2;

        const scale = 2.0 + Math.sin(time * 0.3) * 0.2;
        meshRef.current.scale.set(scale, scale, scale);
    });

    return (
        <mesh ref={meshRef}>
            <icosahedronGeometry args={[1, 15]} /> {/* Increased detail for smoother loop look */}
            <meshStandardMaterial
                color="#FF0000"
                wireframe={true}
                transparent={true}
                opacity={0.4}
            />
        </mesh>
    );
}

export default function Hero() {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const tl = gsap.timeline();

        if (titleRef.current) {
            tl.to(titleRef.current, {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power4.out",
                delay: 0.5
            });
        }

        if (subtitleRef.current) {
            tl.to(subtitleRef.current, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=1");
        }
    }, []);

    return (
        <section className={styles.hero}>
            <div className={styles.canvasContainer}>
                <Canvas camera={{ position: [0, 0, 5] }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} color="#FF0000" intensity={2} />
                    <pointLight position={[-10, -10, -10]} color="#ffffff" intensity={0.5} />
                    <Scene />
                </Canvas>
            </div>
            <div className={styles.content}>
                <h1
                    ref={titleRef}
                    className="glitch"
                    data-text="DESIGN ENGINEER · VFX ARTIST"
                    style={{
                        opacity: 0,
                        transform: 'translateY(50px)',
                        fontSize: 'clamp(2rem, 5vw, 4rem)', /* Adjusted size for longer text */
                        fontWeight: 300, /* Thin modern font */
                        lineHeight: 1.1,
                        textTransform: 'uppercase',
                        color: '#fff',
                        letterSpacing: '0.05em',
                        textAlign: 'center',
                        marginBottom: '2rem'
                    }}
                >
                    DESIGN ENGINEER<br />
                    <span style={{ fontWeight: 700 }}>VFX ARTIST</span>
                </h1>
                <p
                    ref={subtitleRef}
                    className={styles.subtitle}
                    style={{
                        transform: 'translateY(20px)',
                        fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                        letterSpacing: '0.1em',
                        opacity: 0
                    }}
                >
                    Crafting <span className="text-accent">Vision</span> into <span className="text-accent">Reality</span>
                </p>
            </div>
        </section>
    );
}
