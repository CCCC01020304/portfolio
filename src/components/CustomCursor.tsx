'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        if (!cursor || !follower) return;

        // Center cursor initially
        gsap.set(cursor, { xPercent: -50, yPercent: -50 });
        gsap.set(follower, { xPercent: -50, yPercent: -50, x: window.innerWidth / 2, y: window.innerHeight / 2 });

        const onMouseMove = (e: MouseEvent) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.05, // Very fast
                ease: 'power2.out'
            });
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.5, // Laggy
                ease: 'power2.out'
            });
        };

        const linkHover = () => follower.classList.add(styles.active);
        const linkLeave = () => follower.classList.remove(styles.active);

        window.addEventListener('mousemove', onMouseMove);

        const links = document.querySelectorAll('a, button, [role="button"]');
        links.forEach(link => {
            link.addEventListener('mouseenter', linkHover);
            link.addEventListener('mouseleave', linkLeave);
        });

        // Observer for new elements (e.g. client side routing)
        const observer = new MutationObserver((mutations) => {
            const newLinks = document.querySelectorAll('a, button, [role="button"]');
            newLinks.forEach(link => {
                link.removeEventListener('mouseenter', linkHover); // Clean up old listeners (inefficient but safe)
                link.removeEventListener('mouseleave', linkLeave);
                link.addEventListener('mouseenter', linkHover);
                link.addEventListener('mouseleave', linkLeave);
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            observer.disconnect();
            links.forEach(link => {
                link.removeEventListener('mouseenter', linkHover);
                link.removeEventListener('mouseleave', linkLeave);
            });
        };
    }, []);

    return (
        <>
            <div ref={cursorRef} className={styles.cursor} />
            <div ref={followerRef} className={styles.follower} />
        </>
    );
}
