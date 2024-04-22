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
          
              <div className="absolute h-4/5 md:h-[600px] w-[160%] md:w-[120%] bg-gradient-to-r md:bg-gradient-to-r from-dark-800 to-dark-900 opacity-50 rotate-[-10deg] md:rotate-[-6deg]"/>
              <div className="hidden absolute md:flex w-[150px] h-[150px] bg-dark-600 z-40 rounded-full top-[25%] right-[-75px] blur-[200px]"/>
              <div className="hidden absolute md:flex w-[100px] h-[100px] bg-dark-500 z-40 rounded-full top-[20%] left-[-100px] blur-[150px]"/>
              <div className="absolute flex w-[100px] h-[100px] md:w-[100px] md:h-[100px] bg-dark-500 z-40 rounded-full top-[60%] md:top-[35%] right-[30%] blur-[150px] md:blur-[300px]"/>

              <div className="absolute flex h-3/4 md:h-[600px] w-[160%] md:w-[120%] bg-dark-200 rotate-[-20deg] md:rotate-[-10deg] z-30 justify-center items-start md:items-center">
                <div className='relative flex flex-col justify-center items-center z-40 gap-2 top-10 rotate-[20deg] md:rotate-[10deg]'>
                  <h2 className='text-4xl md:text-5xl text-dark-300 drop-shadow-lg'>About Me</h2>

                  <div className='flex flex-col md:flex-row justify-center mt-6 md:mt-2 gap-6 md:gap-16 md:mx-40'>
                    <div className='flex flex-col justify-center items-center gap-2 md:gap-4'>
                      <div className='flex justify-center items-center w-[130px] h-[130px] md:w-[170px] md:h-[170px] rounded-full border-[5px] border-dark-700'>
                        <Image className='md:w-[150px] md:h-[150px] rounded-full' width={110} height={110} src="/profile.jpg" objectFit="cover" alt='Nattakorn profile picture' />
                      </div>
                      <span className='text-lg font-medium'>Nattakorn Khunart</span>
                      <div className='flex justify-center items-center gap-4'>
                        <div className='flex justify-center items-center w-[42px] h-[42px] md:w-[50px] md:h-[50px] bg-dark-700 rounded-full'>
                          <Image className="hidden md:block" src="youtube.svg" width={28} height={28} alt="Youtube Nattakorn Profile"/>
                          <Image className="block md:hidden" src="youtube.svg" width={23} height={23} alt="Youtube Nattakorn Profile mobile"/>
                        </div>
                        <div className='flex justify-center items-center w-[42px] h-[42px] md:w-[50px] md:h-[50px] bg-dark-700 rounded-full'>
                          <Image className="hidden md:block" src="github.svg" width={28} height={28} alt="Github Nattakorn Profile"/>
                          <Image className="block md:hidden" src="github.svg" width={23} height={23} alt="Github Nattakorn Profile mobile"/>
                        </div>
                      </div>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-4 mx-[24%] md:mx-0 md:max-w-[800px]'>
                      <p className='font-light'>
                        <span>
                          {`A multi-talented full-stack developer, proficient in software development, ERP systems, websites, mobile applications, and embedded systems. With a diverse skill set and extensive experience, I excel in tackling various challenges across the technology spectrum. From crafting intuitive user interfaces to optimizing back-end processes and integrating complex systems.`}
                        </span>
                      </p>
                      <p className='font-light'>
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