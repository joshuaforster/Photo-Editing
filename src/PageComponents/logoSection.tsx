import React, { useEffect, useState, useRef } from 'react';

interface Logo {
  lightModeSrc: string;
  darkModeSrc: string;
  alt: string;
}

interface LogoSectionProps {
  theme: string;
}

interface FetchResponse {
  items: Array<{
    fields: {
      logoHeadline: string;
      individualLogos: Array<{ sys: { id: string } }>;
    };
  }>;
  includes?: {
    Entry: Array<{
      sys: { id: string };
      fields: {
        logoForLightMode: { sys: { id: string } };
        logoForDarkMode: { sys: { id: string } };
      };
    }>;
    Asset: Array<{
      sys: { id: string };
      fields: { file: { url: string } };
    }>;
  };
}

const LogoSection: React.FC<LogoSectionProps> = ({ theme }) => {
  const [logos, setLogos] = useState<Logo[]>([]);
  const [headline, setHeadline] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const url = `https://cdn.contentful.com/spaces/oyk9ajukd2hh/environments/master/entries?access_token=hByayhQ07jnSKqia90NpcS61mEksyNYX35QY75Gur60&content_type=logoSection`;

    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data: FetchResponse) => {
        if (data.items.length > 0) {
          const fields = data.items[0].fields;
          setHeadline(fields.logoHeadline);

          const logoEntries = fields.individualLogos.map(ref => {
            const entry = data.includes?.Entry.find(e => e.sys.id === ref.sys.id);
            if (!entry) return null;

            const lightModeAsset = data.includes?.Asset.find(asset => asset.sys.id === entry.fields.logoForLightMode.sys.id);
            const darkModeAsset = data.includes?.Asset.find(asset => asset.sys.id === entry.fields.logoForDarkMode.sys.id);

            return {
              lightModeSrc: lightModeAsset ? lightModeAsset.fields.file.url : '',
              darkModeSrc: darkModeAsset ? darkModeAsset.fields.file.url : '',
              alt: entry.sys.id,
            };
          }).filter(Boolean) as Logo[];

          setLogos(logoEntries);
        } else {
          setError('Content not found');
        }
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Error fetching content:', err);
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on initial render

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section ref={sectionRef} className="bg-white dark:bg-black">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 className="text-lg font-semibold leading-8 text-gray-900 dark:text-gray-100">
          {headline}
        </h2>
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-3 dark:text-gray-400 mt-8">
          {logos.map((logo, index) => (
            <LogoItem key={index} logo={logo} theme={theme} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface LogoItemProps {
  logo: Logo;
  theme: string;
  isVisible: boolean;
}

const LogoItem: React.FC<LogoItemProps> = ({ logo, theme, isVisible }) => {
  return (
    <div
      className={`flex justify-center items-center transition-transform duration-700 ease-in-out ${
        isVisible ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'
      }`}
    >
      <img
        src={theme === 'dark' ? logo.darkModeSrc : logo.lightModeSrc}
        alt={logo.alt}
        className="h-14 hover:text-gray-900 dark:hover:text-white"
      />
    </div>
  );
};

export default LogoSection;
