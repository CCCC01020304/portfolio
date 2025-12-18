'use client';

export default function MoreWorksSection() {
    return (
        <section className="section container" style={{ position: 'relative', padding: '4rem 0' }}>
            <h2 className="text-accent uppercase" style={{ fontSize: '3rem', marginBottom: '4rem', textAlign: 'center' }}>
                AI Short Form Video
            </h2>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '4rem',
                flexWrap: 'wrap'
            }}>
                {/* Actor Short Form */}
                <div style={{
                    border: '1px solid #333',
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(10px)',
                    padding: '1.5rem',
                    position: 'relative',
                    width: '320px',
                    aspectRatio: '9/16',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transition: 'border-color 0.3s ease',
                    cursor: 'pointer'
                }}
                    className="hover-card"
                >
                    <div style={{
                        width: '100%',
                        height: '100%',
                        background: '#111',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: '1rem',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            width: '100%',
                            height: '100%',
                            backgroundImage: 'url(/images/actor-short-form.png)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            transition: 'transform 0.5s ease'
                        }} className="card-bg"></div>
                    </div>
                    <h3 style={{ fontSize: '1.5rem', marginTop: 'auto', marginBottom: '1rem', textAlign: 'center' }}>Actor Short Form</h3>
                </div>

                {/* Ramen Song Short Form */}
                <div style={{
                    border: '1px solid #333',
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(10px)',
                    padding: '1.5rem',
                    position: 'relative',
                    width: '320px',
                    aspectRatio: '9/16',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transition: 'border-color 0.3s ease',
                    cursor: 'pointer'
                }}
                    className="hover-card"
                >
                    <div style={{
                        width: '100%',
                        height: '100%',
                        background: '#111',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: '1rem',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            width: '100%',
                            height: '100%',
                            backgroundImage: 'url(/images/ramen-short-form.png)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            transition: 'transform 0.5s ease'
                        }} className="card-bg"></div>
                    </div>
                    <h3 style={{ fontSize: '1.5rem', marginTop: 'auto', marginBottom: '1rem', textAlign: 'center' }}>Ramen Song Short Form</h3>
                </div>
            </div>

            <style jsx>{`
                .hover-card:hover {
                    border-color: #FF0000 !important;
                }
                .hover-card:hover h3 {
                    color: #FF0000;
                }
                .hover-card:hover .card-bg {
                    transform: scale(1.05);
                }
            `}</style>
        </section>
    );
}
