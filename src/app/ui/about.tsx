import Image from "next/image"

export default function AboutPage({
    id,
    className,
}: {
    id?: string,
    className?: string,
}) {
    return (
        <section id={id} className={className}>
            <div className='relative flex h-screen justify-center items-center'>
          
              <div className="absolute h-4/5 md:h-[600px] w-[200%] sm:w-[160%] md:w-[120%] bg-gradient-to-r md:bg-gradient-to-r from-dark-800 to-dark-900 opacity-50 rotate-[-10deg] md:rotate-[-6deg]"/>
              <div className="hidden absolute md:flex w-[150px] h-[150px] bg-dark-600 z-40 rounded-full top-[25%] right-[-75px] blur-[200px]"/>
              <div className="hidden absolute md:flex w-[100px] h-[100px] bg-dark-500 z-40 rounded-full top-[20%] left-[-100px] blur-[150px]"/>
              <div className="absolute flex w-[100px] h-[100px] md:w-[100px] md:h-[100px] bg-dark-500 z-40 rounded-full top-[60%] md:top-[35%] right-[30%] blur-[150px] md:blur-[300px]"/>

              <div className="absolute flex h-3/4 md:h-[600px] w-[200%] sm:w-[160%] md:w-[120%] bg-dark-200 rotate-[-20deg] md:rotate-[-10deg] z-30 justify-center items-center">
                <div className='relative flex flex-col justify-center items-center z-40 gap-1 sm:gap-2 rotate-[20deg] md:rotate-[10deg]'>
                  <h2 className='text-3xl sm:text-4xl md:text-5xl text-dark-300 drop-shadow-lg'>About Me</h2>

                  <div className='flex flex-col md:flex-row justify-center mt-6 md:mt-2 gap-6 md:gap-16 md:mx-40'>
                    <div className='flex flex-col justify-center items-center gap-4'>
                      <div className='flex justify-center items-center w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] md:w-[170px] md:h-[170px] rounded-full border-[4px] sm:border-[5px] border-dark-700'>
                        <Image className='w-[85px] h-[85px] sm:w-[110px] sm:h-[110px] md:w-[150px] md:h-[150px] rounded-full' width={110} height={110} src="/profile.jpg" objectFit="cover" alt='Nattakorn profile picture' priority />
                      </div>
                      <span className='text-base sm:text-lg font-medium'>Nattakorn Khunart</span>
                      <div className='flex justify-center items-center gap-4'>
                        <a target="_blank" href="https://www.youtube.com/@user-kz7jd3xt1u" className='flex justify-center items-center w-[38px] h-[38px] sm:w-[42px] sm:h-[42px] md:w-[50px] md:h-[50px] bg-dark-700 rounded-full'>
                          <Image className="hidden md:block sm:hidden" src="youtube.svg" width={28} height={28} alt="Youtube Nattakorn Profile" priority/>
                          <Image className="hidden md:hidden sm:block" src="youtube.svg" width={23} height={23} alt="Youtube Nattakorn Profile mobile" priority/>
                          <Image className="block md:hidden sm:hidden" src="youtube.svg" width={23} height={23} alt="Youtube Nattakorn Profile small mobile" priority/>
                        </a>
                        <a target="_blank" href="https://github.com/nattakorn600" className='flex justify-center items-center w-[38px] h-[38px] sm:w-[42px] sm:h-[42px] md:w-[50px] md:h-[50px] bg-dark-700 rounded-full'>
                          <Image className="hidden md:block sm:hidden" src="github.svg" width={28} height={28} alt="Github Nattakorn Profile" priority/>
                          <Image className="hidden md:hidden sm:block" src="github.svg" width={23} height={23} alt="Github Nattakorn Profile mobile" priority/>
                          <Image className="block md:hidden sm:hidden" src="github.svg" width={20} height={20} alt="Github Nattakorn Profile small mobile" priority/>
                        </a>
                      </div>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-4 mx-[28%] sm:mx-[24%] md:mx-0 md:max-w-[800px]'>
                      <p className='font-light text-sm'>
                        <span>
                          {`A multi-talented full-stack developer, proficient in software development, ERP systems, websites, mobile applications, and embedded systems. With a diverse skill set and extensive experience, I excel in tackling various challenges across the technology spectrum. From crafting intuitive user interfaces to optimizing back-end processes and integrating complex systems.`}
                        </span>
                      </p>
                      <p className='font-light text-sm'>
                        <span>
                          {`I'm excited to bring my skills and experience to new opportunities and contribute to innovative projects that push the boundaries of what's possible in technology.`}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
        </section>
    )
}