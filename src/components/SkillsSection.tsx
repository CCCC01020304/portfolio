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
    const sectionRef = useRef(null);
    const barsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        barsRef.current.forEach((bar, index) => {
            if (!bar) return;
            gsap.fromTo(bar,
                { width: '0%' },
                {
                    width: `${skills[index].level}%`,
                    duration: 1.5,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 70%',
                    }
                }
            );
        });
    }, []);

    return (
        <section ref={sectionRef} className="section container" style={{ position: 'relative' }}>
            {/* Circuit Board / Grid Background Hint */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                zIndex: -1,
                pointerEvents: 'none'
            }} />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', width: '100%' }}>
                <div style={{ position: 'relative' }}>
                    {/* Placeholder for Profile Picture - B&W */}
                    <div style={{
                        width: '100%',
                        aspectRatio: '3/4',
                        backgroundColor: '#222',
                        filter: 'grayscale(100%)',
                        backgroundSize: 'cover',
                        backgroundImage: 'url(/images/profile-placeholder.jpg)' /* Assuming user will add this */
                    }}></div>
                    <h2 className="text-accent uppercase" style={{ position: 'absolute', top: '-1rem', left: '-1rem', mixBlendMode: 'difference' }}>About Me</h2>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h3 style={{ marginBottom: '2rem', fontSize: '2rem', fontWeight: 300 }}>The Blueprint</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {skills.map((skill, index) => (
                            <div key={skill.name}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                    <span style={{ fontSize: '1.2rem' }}>{skill.name}</span>
                                    <span className="text-accent">{skill.level}%</span>
                                </div>
                                <div style={{ width: '100%', height: '2px', background: '#333' }}>
                                    <div
                                        ref={el => { barsRef.current[index] = el; }}
                                        style={{ height: '100%', background: '#FF0000', width: '0%' }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
