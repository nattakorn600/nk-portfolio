import Image from "next/image";
import { SkillType } from "../lib/definition";

const { skillsData } = require('@/app/lib/data');

export default function SkillsPage({
    id,
    className,
}: {
    id?: string,
    className?: string,
}) {
    return (
        <section id={id} className={className}>
            <div className="absolute w-[150px] h-[150px] bg-dark-500 rounded-full blur-[200px]"/>
            <div className="flex w-full justify-center items-center mt-16 md:mt-24">
                <h2 className='text-3xl sm:text-4xl md:text-5xl text-dark-300 drop-shadow-lg'>My Skills</h2>
            </div>

            <div className="flex flex-wrap w-3/4 md:w-3/5 h-full justify-center items-center gap-10 md:gap-12 my-12 sm:my-16 md:my-32">
                {skillsData.map((skill: SkillType) => (
                    <div  key={skill.skill} className="flex flex-col gap-3 justify-center items-center">
                        <div className="w-[42px] h-[42px] md:w-[50px] md:h-[50px]">
                            <Image className="hidden md:block w-full h-full" src={skill.icon} width={50} height={50} alt={`${skill.skill} skill`} priority/>
                            <Image className="block md:hidden w-full h-full" src={skill.icon} width={42} height={42} alt={`${skill.skill} skill mobile`} priority/>
                        </div>
                        <span className="text-sm md:text-base">{skill.skill}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}