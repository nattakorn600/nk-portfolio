import ProjectCard from '@/app/ui/project-card';
import { ProjectType } from '../lib/definition';

const { projectsData } = require('@/app/lib/data');

export default function ProjectsPage({
    id,
    className,
}: {
    id?: string,
    className?: string,
}) {
    return (
        <section id={id} className={className}>

            <hr className="w-4/5 sm:w-3/5 h-[2px] mx-auto my-2 sm:my-4 border-0 rounded bg-dark-300 mt-20"></hr>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-dark-300 drop-shadow-lg">My Project</h2>
            <hr className="w-4/5 sm:w-3/5 h-[2px] mx-auto my-2 sm:my-4 border-0 rounded bg-dark-300"></hr>
            
            <div className="flex flex-wrap gap-4 sm:gap-6 shadow-md justify-center items-center my-6 sm:my-10 lg:my-16 mx-20" >
                {(projectsData).map((project: ProjectType) => (
                    <ProjectCard key={project.title} className='h-[214px] w-[321px] sm:h-[280px] sm:w-[420px]' data={project} />
                ))}
            </div>
            
            <div className='absolute block bg-dark-500 blur-[250px] w-[200px] h-[200px] z-10 rounded-full left-[-100px] top-[25%]'/>
            <div className='absolute block bg-dark-600 blur-[300px] w-[300px] h-[300px] z-10 rounded-full right-[-150px] top-[60%]'/>
            
        </section>
    )
}