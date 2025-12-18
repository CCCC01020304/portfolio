'use client';
import { useState } from 'react';

export default function ContactSection() {
    return (
        <section className="section container" id="contact">
            <h2 className="text-accent uppercase" style={{ marginBottom: '3rem', fontSize: '3rem' }}>The Connection</h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }} onSubmit={(e) => e.preventDefault()}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontSize: '0.9rem', color: '#666', textTransform: 'uppercase' }}>Name</label>
                        <input
                            type="text"
                            style={{
                                background: 'transparent',
                                border: 'none',
                                borderBottom: '1px solid #fff',
                                padding: '10px 0',
                                color: '#fff',
                                outline: 'none',
                                fontSize: '1.2rem'
                            }}
                        />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontSize: '0.9rem', color: '#666', textTransform: 'uppercase' }}>Email</label>
                        <input
                            type="email"
                            style={{
                                background: 'transparent',
                                border: 'none',
                                borderBottom: '1px solid #fff',
                                padding: '10px 0',
                                color: '#fff',
                                outline: 'none',
                                fontSize: '1.2rem'
                            }}
                        />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontSize: '0.9rem', color: '#666', textTransform: 'uppercase' }}>Message</label>
                        <textarea
                            rows={4}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                borderBottom: '1px solid #fff',
                                padding: '10px 0',
                                color: '#fff',
                                outline: 'none',
                                fontSize: '1.2rem',
                                resize: 'none'
                            }}
                        />
                    </div>

                    <button
                        type="submit"
                        className="send-btn"
                        style={{
                            marginTop: '2rem',
                            padding: '1.5rem 3rem',
                            background: '#fff',
                            color: '#FF0000',
                            fontWeight: 700,
                            fontSize: '1.2rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            transition: 'all 0.3s ease',
                            cursor: 'none',
                            alignSelf: 'flex-start'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#000';
                            e.currentTarget.style.color = '#fff';
                            e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#fff';
                            e.currentTarget.style.color = '#FF0000';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        Send Message
                    </button>
                </form>

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Welcome</h3>
                        <p style={{ color: '#ccc', lineHeight: 1.6, marginBottom: '3rem' }}>
                            Hello. Thank you for visiting my portfolio site.<br /><br />
                            Here, I focus on introducing the product design, 3D modeling, and user-centered design works I have conducted. Each project is the result of contemplating the balance between usability, form, and technical implementation.<br /><br />
                            If you have any questions about my work, or if you would like to collaborate or propose a project, please feel free to leave a message using the form below. I would be happy to discuss it.<br /><br />
                            Thank you.
                        </p>

                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Contact Info</h3>
                        <p style={{ color: '#999', lineHeight: 1.6 }}>
                            <strong style={{ color: '#fff' }}>Yoon Myeongui</strong><br />
                            Gwangju, South Korea<br />
                            20253794@chsun.ac.kr
                        </p>
                    </div>

                    <div style={{ display: 'flex', gap: '2rem', marginTop: '3rem' }}>
                        {['Instagram', 'LinkedIn', 'Behance'].map(social => (
                            <a
                                key={social}
                                href="#"
                                style={{
                                    fontSize: '1.1rem',
                                    color: '#fff',
                                    transition: 'all 0.3s ease',
                                    position: 'relative'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = '#FF0000';
                                    e.currentTarget.style.textShadow = '0 0 10px rgba(255, 0, 0, 0.5)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = '#fff';
                                    e.currentTarget.style.textShadow = 'none';
                                }}
                            >
                                {social}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
