'use client';

import { useState } from 'react';

interface ProjectCardProps {
    title: string;
    category: string;
    src: string;
    index: number;
}

export default function ProjectCard({ title, category, src, index }: ProjectCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="project-card"
            style={{
                aspectRatio: '16/9',
                background: '#111',
                border: '1px solid #333',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'none' // For custom cursor
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                overflow: 'hidden'
            }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={src}
                    alt={title}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.7s cubic-bezier(0.19, 1, 0.22, 1), filter 0.7s ease',
                        filter: isHovered ? 'grayscale(0%) brightness(1)' : 'grayscale(100%) brightness(0.8)',
                        transform: isHovered ? 'scale(1.1)' : 'scale(1.0)'
                    }}
                />
            </div>
            <div style={{
                position: 'absolute',
                bottom: '30px',
                left: '30px',
                zIndex: 2,
                pointerEvents: 'none',
                transition: 'transform 0.5s ease'
            }}>
                <h3 style={{
                    fontSize: '2rem',
                    textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                    color: isHovered ? '#FF0000' : '#fff',
                    transition: 'color 0.3s ease'
                }}>
                    {title}
                </h3>
                <p style={{
                    color: '#ccc',
                    textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                    marginTop: '0.5rem'
                }}>
                    {category}
                </p>
            </div>
        </div>
    );
}
