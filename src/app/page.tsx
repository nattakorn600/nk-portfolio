'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import MouseMoveEffect from '@/app/utils/mouse-effect';
import HomePage from '@/app/ui/home';
import AboutPage from '@/app/ui/about';
import SkillsPage from '@/app/ui/skills';
import ExperiencePage from '@/app/ui/experience';
import ProjectsPage from '@/app/ui/projects';
import ContactPage from '@/app/ui/contact';

export default function Home() {
  const [prevSection, setPrevSection] = useState('');
  const { push } = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const handleScroll = useDebouncedCallback(() => {
    if (containerRef.current) {
      const windowHeight = window.innerHeight;
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      let currSection = ''
      for (const sectionId of sections) {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          if (rect.top <= windowHeight/2 && rect.bottom >= windowHeight/2) {
            currSection = sectionId;
            break;
          }
        }
      }
      if (prevSection !== currSection)
        push(`#${currSection}`, { scroll: false });
      setPrevSection(currSection);
    }
  }, 50);
  return (
    <main className="flex flex-col flex-wrap min-h-screen items-center justify-between text-gray-100">
      <MouseMoveEffect/>
        <div ref={containerRef} className="flex flex-col h-screen w-full overflow-y-auto overflow-x-hidden">
          <HomePage id="home" className='relative flex flex-col' />
          <AboutPage id="about" className="flex flex-col" />
          <SkillsPage id="skills" className="relative flex flex-col justify-center items-center" />
          <ProjectsPage id="projects" className="relative flex flex-col justify-center items-center" />
          <ExperiencePage id="experience" className="relative flex flex-col items-center lg:items-start pb-8 md:pb-16" />
          <ContactPage id="contact" className="relative flex flex-col"/>
        </div>
    </main>
  );
}
