import Hero from '../PageComponents/Hero';
import Services from '../PageComponents/services';
import FAQ from './faq';
import Contact from '../PageComponents/Contact';
import Pricing from '../PageComponents/pricing';
import Rules from '../PageComponents/Rules';

export default function Home() {
  const cleanUp = [
    'images/IMG_1647.png',
    'images/IMG_1648.png',
    'images/IMG_1649.png',
    'images/IMG_1650.png'
  ];
  const edit = [
    'images/IMG_1651.png',
    'images/IMG_1652.png',
    'images/IMG_1653.png',
    'images/IMG_1654.png'
  ];
  const hello = [
    'images/IMG_1655.png',
    'images/IMG_1656.png',
    'images/IMG_1657.png',
    'images/IMG_1658.png'
  ];

  return (
    <div className="min-h-screen">
      <main className="isolate">
        <Hero />
        <Services
          title="PHOTO CLEANUPS"
          price="£18 / €20 / $22"
          description="Restore and enhance your cherished photos with our professional cleanup services. We remove blemishes, improve clarity, and bring your memories back to life."
          buttonText="Get started"
          buttonHref="#"
          images={cleanUp}
          isFlipped={false}
        />
        <Services
          title="PAPER STAGE EDIT"
          price="£25 / €30 / $32"
          description="Transform your sketches and drafts into polished, high-quality artworks. Our editing services refine your paper-based creations, ensuring they look their best."
          buttonText="Get started"
          buttonHref="#"
          images={edit}
          isFlipped={true}
        />
        <Services
          title="FULL ART EDIT"
          price="£60 / €70 / $75"
          description="Elevate your art with comprehensive editing and enhancement. From colour correction to detailed retouching, we provide a complete overhaul to make your art stand out."
          buttonText="Get started"
          buttonHref="#"
          images={hello}
          isFlipped={false}
        />
        <Rules />
        <FAQ />
        <Pricing />
        <Contact />
      </main>
    </div>
  );
}
