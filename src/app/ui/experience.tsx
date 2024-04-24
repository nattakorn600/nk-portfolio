import { ExperienceType } from '../lib/definition';
import Timeline from './timeline';
const { experiencesData } = require('@/app/lib/data');

export default function ExperiencePage({
    id,
    className,
}: {
    id?: string,
    className?: string,
}) {
    return (
        <section id={id} className={className}>
            <div className='absolute block lg:ml-[23%] top-4 xl:top-3 lg:top-[90px] bg-dark-500 w-[50px] h-[50px] rounded-full blur-[80px]' />
            <h2 className="lg:ml-[20%] my-4 mt-16 lg:mt-24 text-3xl sm:text-4xl md:text-5xl text-dark-300 drop-shadow-lg">Experience</h2>
            <div className="my-2 sm:my-6 lg:mx-[15%]">
                {experiencesData.map((experience: ExperienceType, index: number) => (
                    <Timeline key={index} index={index} data={experience}/>
                ))}
            </div>
            <div className='absolute block top-[20%] -left-[75px] bg-dark-500 w-[150px] h-[150px] rounded-full blur-[200px]' />
            <div className='absolute block top-[50%] left-[45%] bg-dark-500 w-[250px] h-[250px] rounded-full blur-[350px]' />
            <div className='absolute block top-[60%] -right-[100px] bg-dark-600 w-[200px] h-[200px] rounded-full blur-[250px]' />
        </section>
    )
}