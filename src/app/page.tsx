import CustomCursor from '@/components/CustomCursor';
import SmoothScroll from '@/components/SmoothScroll';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main>
      <SmoothScroll />
      <CustomCursor />
      <Hero />

      {/* The Works Section */}
      <section className="section container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
          <h2 className="text-accent uppercase" style={{ fontSize: '3rem' }}>The Works</h2>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['ALL', 'UI/UX', 'VFX', '3D MODELING'].map((filter, i) => (
              <button
                key={filter}
                style={{
                  color: i === 0 ? '#000' : '#fff',
                  background: i === 0 ? '#FF0000' : 'transparent',
                  padding: '0.5rem 1rem',
                  border: '1px solid #333',
                  fontSize: '0.9rem',
                  cursor: 'none'
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '2rem',
          width: '100%'
        }}>
          {[
            { id: 1, title: 'Figure Board', cat: 'Product Design', src: '/images/figure-board.jpg' },
            { id: 2, title: 'Foreigner', cat: 'Character Art', src: '/images/figure-foreigner.png' },
            { id: 3, title: 'The Mouse', cat: '3D Sculpting', src: '/images/figure-mouse.png' },
            { id: 4, title: 'Helmet Concept', cat: 'Hard Surface', src: '/images/figure-helmet.png' }
          ].map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              title={project.title}
              category={project.cat}
              src={project.src}
            />
          ))}
        </div>
      </section>

      <SkillsSection />

      <ContactSection />

      <footer style={{ padding: '2rem 0', textAlign: 'center', color: '#333', fontSize: '0.8rem' }}>
        &copy; {new Date().getFullYear()} Design Engineer Portfolio. All Rights Reserved.
      </footer>
    </main>
  );
}
