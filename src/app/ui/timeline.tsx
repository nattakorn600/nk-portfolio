import { ExperienceType } from '@/app/lib/definition';
import clsx from 'clsx';

export default function Timeline({
    index,
    className,
    data,
}: {
    index: number,
    className?: string,
    data: ExperienceType,
}) {
    return (
        <div className={`relative pl-10 lg:pl-32 py-6 group ${className}`}>    
            <div className="flex flex-col items-start mb-1 lg:flex-row group-last:before:hidden before:absolute before:left-6 before:h-full before:px-px before:bg-slate-300 before:self-start before:-translate-x-1/2 before:translate-y-4 lg:before:left-24 lg:before:ml-[6.5rem]"> 
                <div className="after:absolute after:left-6 after:w-6 after:h-6 after:bg-dark-700 after:box-content after:border-slate-50 after:rounded-full after:-translate-x-1/2 after:translate-y-2.5 lg:after:ml-[6.5rem] lg:after:left-24">
                    <div className={clsx('absolute bg-dark-700 w-6 h-6 rounded-full -ml-[12px] mt-2.5 left-6 lg:ml-[92px] lg:mt-2.5 lg:left-24', {'animate-ping': index===0})} />
                </div>

                <div className="lg:absolute left-0 w-[150px] h-[40px] ml-4 inline-flex items-start justify-start lg:justify-end">
                    <time className="flex items-center justify-center text-lg font-normal px-4 py-1 mb-3 min-w-[120px] lg:mb-0 text-dark-50 bg-dark-700 rounded-md">{data.period}</time>
                </div>
                
                <div className="block w-[80%] ml-4 mb-1 lg:mb-0 lg:ml-28">
                    <p className="font-medium text-2xl text-dark-700">{data.jobtitle}</p>
                    <p className="my-1 text-lg font-normal text-dark-50">{data.company}</p>
                    <div className="mt-4">
                        {data.descriptions.map((description, index) => (
                            <p key={index} className="flex font-normal text-base text-dark-400">
                                &#8226;
                                <span className="ml-2">{description}</span>
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}