'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
    { name: 'After Effects', level: 90 },
    { name: 'Blender', level: 85 },
    { name: 'Figma', level: 80 },
    { name: 'React / Next.js', level: 75 },
    { name: 'Three.js / WebGL', level: 70 },
];

export default function SkillsSection() {
    const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

    return (
        <section className="section container" style={{ position: 'relative' }}>
            {/* Circuit Board / Grid Background Hint */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                zIndex: -1,
                pointerEvents: 'none'
            }} />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', width: '100%', alignItems: 'center' }}>
                <div style={{ position: 'relative' }}>
                    <div style={{
                        width: '100%',
                        aspectRatio: '1/1',
                        backgroundColor: '#000',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundImage: `url(${basePath}/images/visura-eye.png)`
                    }}></div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>Style</h3>
                        <p style={{ color: '#ccc', lineHeight: '1.6' }}>
                            The chrome and glass aesthetic symbolizes advanced technology, futurism, and luxury.
                            The iris glows with iridescent rainbow colors, representing diverse visual experiences and next-generation optical technology.
                            The contrast of the silver spectrum against the black background reinforces a strong presence and brand power.
                        </p>
                    </div>

                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>Function & Brand Value</h3>
                        <p style={{ color: '#ccc', lineHeight: '1.6' }}>
                            The metallic and glass-like eye represents more than a simple lens; it embodies innovative optical and material technology.
                            Its sharp, sturdy structure conveys a message of protection.
                            The rainbow iris demonstrates that Visura provides value beyond simple correction—offering a new dimension of visual experience and individuality.
                        </p>
                    </div>

                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>Design Intention</h3>
                        <p style={{ color: '#ccc', lineHeight: '1.6' }}>
                            Through glass and metal materials, we visualize the precision of the lens and its futuristic identity.
                            Unlike traditional, natural-looking logos, this design maximizes innovation and experimentation.
                            It reveals a differentiation that goes beyond simple medical or beauty imagery to a brand where science, technology, and art combine.
                        </p>
                    </div>
                </div>
            </div>

            {/* Spacer */}
            <div style={{ height: '8rem' }}></div>

            {/* Second Section: Colorful Visura */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', width: '100%', alignItems: 'center' }}>
                <div style={{ position: 'relative' }}>
                    <div style={{
                        width: '100%',
                        aspectRatio: '1/1',
                        backgroundColor: '#000',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundImage: `url(${basePath}/images/visura-eye-colorful-v2.png)`
                    }}></div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>Style</h3>
                        <p style={{ color: '#ccc', lineHeight: '1.6' }}>
                            The pink, yellow, and mint shimmering polygonal surface symbolizes a future-oriented, fancy, and innovative nature.
                            The 3D polygons surrounding the eye express the fusion of advanced technology and artistic sense.
                            The eye and colors emphasized on the black background maximize the brand's presence and differentiation.
                        </p>
                    </div>

                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>Function & Brand Value</h3>
                        <p style={{ color: '#ccc', lineHeight: '1.6' }}>
                            Beyond simple correction, it carries the brand philosophy of offering a new colorful and artistic experience through lenses.
                            The flashy colors respect individual personality, suggesting lenses can function as part of "fashion" and "art".
                            Building on existing medical reliability, it establishes itself as a next-generation premium lens brand by adding sensuous and artistic differentiation.
                        </p>
                    </div>

                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>Design Intention</h3>
                        <p style={{ color: '#ccc', lineHeight: '1.6' }}>
                            The flashy neon colors and polyhedral structure are designed to look like artwork beyond a simple product logo.
                            It gives a young and experimental image that can connect with future cultures like fashion, metaverse, and digital art.
                            Unlike existing calm medical and technology-centered logos, this design emphasizes a colorful identity reflecting trends and senses.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
