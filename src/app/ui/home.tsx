import Image from "next/image"

export default function HomePage({
    id,
    className,
}: {
    id?: string,
    className?: string,
}) {
    return (
        <section id={id} className={className}>
            <div className='block lg:absolute flex justify-center h-full w-full z-10'>
              <div className='absolute mx-auto h-1/2 top-0 overflow-hidden lg:right-0 lg:h-full lg:w-1/2'>
                <Image className="hidden lg:block w-full h-full object-cover object-top" width={720} height={720} src="/developer.png" alt="Developer coding on labtop" priority />
                <Image className="block lg:hidden w-full h-full object-cover object-top" width={340} height={340} src="/developer.png" alt="Developer coding on labtop" priority />
              </div>
            </div>

            <div className="absolute w-[85px] h-[85px] z-10 left-[40%] top-[75%] blur-[85px] bg-dark-500 rounded-full lg:left-[22%] lg:top-[40%] lg:blur-[200px] lg:w-[200px] lg:h-[200px]"/>
            
            <div className="flex flex-col justify-start mx-auto lg:mx-0 lg:justify-center h-screen w-[90%] lg:pl-[10%] gap-4 z-20 lg:w-[730px]">
                <div className="flex items-center text-4xl sm:text-5xl mx-auto lg:mx-0 font-normal text-dark-50 gap-4">
                    <span>{`Hi, I'm`}</span>
                    <hr className="none-inline lg:hidden w-[180px] sm:w-[210px]"/>
                </div>
                
                <h1 className="text-5xl sm:text-6xl text-center mx-auto lg:mx-0 lg:text-start w-[300px] lg:w-full font-medium text-transparent bg-clip-text bg-gradient-to-r from-dark-900 to-dark-800">Nattakorn Khunart</h1>
                <span className="text-2xl sm:text-3xl mx-auto lg:mx-0 font-normal text-dark-50"> {'<Full stack Developer />'} </span>
                <p className="text-lg sm:text-xl text-dark-300 text-center mx-auto lg:mx-0 lg:text-start max-w-[400px] sm:max-w-[490px]">
                    <span>
                        {'I am committed to continual self-improvement and remain perpetually open to acquiring new knowledge and skills.'}
                    </span>
                </p>
            </div>
        </section>
    )
}