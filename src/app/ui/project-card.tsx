import Image from "next/image"
import { ProjectType } from '../lib/definition';

export default function ProjectCard({
    className,
    data,
  }: {
    className?: string,
    data: ProjectType,
  }) {
    return (
        <div className={`relative group overflow-hidden ${className}`}>
            <Image src={data.img} width={420} height={280} className="hidden sm:block absolute text-wrap transition-all duration-300 ease-in-out w-full h-full object-cover group-hover:scale-110" alt={`${data.title} image`} priority/>
            <Image src={data.img} width={360} height={240} className="block sm:hidden absolute text-wrap transition-all duration-300 ease-in-out w-full h-full object-cover group-hover:scale-110" alt={`${data.title} mobile image`} priority/>
            <div className='absolute block bottom-0 left-0 right-0 bg-dark-200 opacity-0 h-full w-0 transition-all ease-in-out duration-300 group-hover:w-full group-hover:opacity-100'/>
            <div className='absolute block bg-dark-600 w-[75px] h-[75px] z-10 rounded-full opacity-0 right-0 top-[calc(50%-37px)] blur-[75px] transition-all ease-in-out duration-300 group-hover:opacity-100' />
            <div className='absolute block bg-dark-500 w-[75px] h-[75px] z-10 rounded-full opacity-0 left-12 blur-[100px] transition-all ease-in-out duration-300 group-hover:opacity-100' />
            <div className='absolute block bg-dark-600 w-[75px] h-[75px] z-10 rounded-full opacity-0 pointer-events-none bottom-[-35px] left-20 blur-[75px] transition-all ease-in-out duration-300 group-hover:opacity-100' />

            <div className='absolute flex flex-col px-4 py-2 sm:px-8 sm:py-4 gap-2 sm:gap-4 mx-auto w-full h-full'>
                <h3 className="text-lg sm:text-xl text-center font-normal text-transparent bg-clip-text bg-gradient-to-r from-dark-900 to-dark-800 opacity-0 transition-all translate-y-[20px] duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-hover:delay-250">{data.title}</h3>
                <p className="text-sm sm:text-base font-normal text-dark-950 opacity-0 transition-all translate-y-[20px] duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-hover:delay-200">
                    <span>{data.description}</span>
                </p>

                <div className="flex flex-wrap gap-1 opacity-0 transition-all translate-x-[20px] duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-hover:delay-150">
                    {data.languages.map(language => (
                        <span key={language} className="text-xs font-normal bg-[#223A72] px-2 py-px sm:py-1 rounded-full">{language}</span>
                    ))}
                </div>

                <div className="flex mb-2 items-end grow gap-4 mx-auto opacity-0 transition-all translate-y-[20px] duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-hover:delay-150">
                    {data.youtube !== undefined && (
                        <a className="relative flex group/button" target="_blank" href={data.youtube}>
                            <div className='block w-[120px] h-[32px] bg-[#6A080F] rounded transition-all duration-150 translate-y-0 translate-x-0 group-hover/button:translate-y-[2px] group-hover/button:translate-x-[3px]' />
                            <div className='absolute flex justify-center items-center bg-[#E40818] rounded w-[120px] h-[32px] rotate-0 transition-all duration-150 translate-y-0 group-hover/button:translate-y-[-5px] group-hover/button:rotate-[2deg]'>
                                <Image height={24} width={24} src="youtube.svg" alt={`Youtube video project content: ${data.title}`} priority/>
                                <label className='ml-2 text-xs font-normal'>View More</label>
                            </div>
                        </a>
                    )}

                    {data.github !== undefined && (
                        <a className="relative flex group/button" target="_blank" href={data.github}>
                            <div className='block w-[120px] h-[32px] bg-[#44474D] rounded transition-all duration-150 translate-y-0 translate-x-0 group-hover/button:translate-y-[2px] group-hover/button:translate-x-[3px]' />
                            <div className='absolute flex justify-center items-center bg-[#333539] rounded w-[120px] h-[32px] rotate-0 transition-all duration-150 translate-y-0 group-hover/button:translate-y-[-5px] group-hover/button:rotate-[2deg]'>
                                <Image height={24} width={24} src="github.svg" alt={`Github source project: ${data.title}`} priority/>
                                <label className='ml-2 text-xs font-normal'>View Source</label>
                            </div>
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
  }