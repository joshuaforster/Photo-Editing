import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';

interface Skill {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: Document;
}

interface SkillsProps {
  headline: string;
  subHeadline: string;
}

interface FetchResponse {
  items: Array<{
    fields: {
      skill: string;
      skillSubText: Document;
      skillImage: { sys: { id: string } };
    };
  }>;
  includes: {
    Asset: Array<{
      sys: { id: string };
      fields: { file: { url: string } };
    }>;
  };
}

const Skills: React.FC<SkillsProps> = ({ headline, subHeadline }) => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const url = `https://cdn.contentful.com/spaces/oyk9ajukd2hh/environments/master/entries?access_token=hByayhQ07jnSKqia90NpcS61mEksyNYX35QY75Gur60&content_type=skills`;

    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data: FetchResponse) => {
        console.log('Fetch response:', data);
        const fetchedSkills = data.items.map(item => {
          const skillImage = data.includes.Asset.find(asset => asset.sys.id === item.fields.skillImage.sys.id);
          if (!skillImage) {
            return null; // Skip this skill if image is not found
          }
          return {
            imgSrc: skillImage.fields.file.url,
            imgAlt: item.fields.skill,
            title: item.fields.skill,
            description: item.fields.skillSubText,
          };
        }).filter(skill => skill !== null) as Skill[]; // Filter out null values
        setSkills(fetchedSkills);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Error fetching content:', err);
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-#FFEBE7 dark:bg-dark-gray">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center">
        <h3 className="text-4xl font-bold mb-4 text-black dark:text-white">{headline}</h3>
        <div className="text-lg mb-8 text-gray-700 dark:text-gray-300">{subHeadline}</div>
        <div className="flex flex-wrap justify-between">
          {skills.map((skill, index) => (
            <SkillItem key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface SkillItemProps {
  skill: Skill;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.75, // Using 75% of the window height
  });

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center text-center m-2 p-4 w-full md:w-1/3 lg:w-1/4 transition-transform duration-700 ease-in-out ${
        inView ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'
      }`}
    >
      <img
        src={skill.imgSrc}
        alt={skill.imgAlt}
        className="h-24 mb-4"
      />
      <h3 className="text-xl font-semibold text-black dark:text-white">{skill.title}</h3>
      <div className="text-gray-700 dark:text-gray-300">
        {documentToReactComponents(skill.description)}
      </div>
    </div>
  );
};

export default Skills;
