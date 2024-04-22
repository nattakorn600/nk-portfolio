'use client'

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { State } from "../lib/action";
import SendMsgForm from "./sendmsgform";
import ToastsBox from "./toasts";

export type ToastType = {
    id: string;
    type: string;
    message: string;
}

export default function ContactPage({
    id,
    className,
}: {
    id?: string,
    className?: string,
}) {
    const [toastsBox, setToastsBox] = useState<ToastType[]>([]);
    const idRef = useRef(0);

    const updateMsgState = (newState: State) => {
        if (newState.status && newState.message) {
            idRef.current++;
            const newToast: ToastType = {
                id: idRef.current.toString(),
                message: newState.message || '',
                type: newState.status==200 ? 'success' : 'error'
            };
            setToastsBox(prevState => [...prevState, newToast]);
            console.log(`updateMsgState: ${JSON.stringify(newToast)}`);

            const timeoutId = setTimeout(() => {
                setToastsBox(prevState => prevState.filter(toast => toast.id !== newToast.id));
            }, 10000);
            return () => clearTimeout(timeoutId);
        }
    };

    const handleToast = (toastList: ToastType[]) => (
        setToastsBox(toastList)
    )
    
    return (
        <footer id={id} className={className}>
            <div className='absolute w-full h-full z-10'>
                <img className="w-full h-full object-cover object-bottom" src="contacts/darkbgcontact.jpg" alt="Developer coding on labtop" />
            </div>
            <div className="absolute w-full h-full bg-dark-100 opacity-60 z-20" />
            <div className="flex flex-col items-center min-h-screen pt-10 lg:pt-12 xl:py-2t z-30">
                <div className="flex items-center w-[900px]">
                    <hr className="grow h-px mx-auto my-10 rounded bg-dark-50"></hr>
                    <h2 className='mx-4 text-4xl md:text-5xl text-dark-300 drop-shadow-lg'>Contact Me</h2>
                    <hr className="grow h-px mx-auto my-10 rounded bg-dark-50"></hr>
                </div>
                <span className="text-base xl:text-lg font-normal text-dark-950 text-center max-w-[90%] w-[500px]">
                    I’m happy to answer to your question. Fill out the form and I’ll be in touch as soon as posible
                </span>

                <div className="flex flex-col h-full xl:flex-row w-3/4 my-8 xl:my-16 justify-center items-center gap-6 xl:gap-0">
                    <div className="relative flex flex-col w-full min-w-[400px] w-[95%] max-w-[600px] xl:max-w-[100%] xl:w-1/2 justify-start items-center gap-4 xl:gap-16">
                        <div className="flex w-full h-full xl:w-auto justify-start xl:items-center mx-auto xl:gap-4">
                            <div className="flex justify-center items-center w-[46px] h-[46px] md:w-[54px] md:h-[54px] xl:w-[64px] xl:h-[64px] bg-dark-50 rounded-full">
                                <Image className="hidden xl:block md:hidden" src="/contacts/address.svg"
                                    alt="Address"
                                    width={28}
                                    height={28}
                                />
                                <Image className="hidden xl:hidden md:block" src="/contacts/address.svg"
                                    alt="Address middle"
                                    width={24}
                                    height={24}
                                />
                                <Image className="block xl:hidden md:hidden" src="/contacts/address.svg"
                                    alt="Address mobile"
                                    width={20}
                                    height={20}
                                />
                            </div>
                            <div className="flex flex-col mx-4 w-[320px] gap-1">
                                <span className="hidden xl:block text-xl font-medium text-dark-700">Address</span>
                                <span className="text-lg font-normal">120/39 C Building, Lumpini Condo Town Bodindecha - Ramkhamhaeng</span>
                            </div>
                        </div>

                        <div className="flex w-full h-full xl:w-auto justify-start items-center mx-auto xl:gap-4">
                            <div className="flex justify-center items-center w-[46px] h-[46px] md:w-[54px] md:h-[54px] xl:w-[64px] xl:h-[64px] bg-dark-50 rounded-full">
                                <Image className="hidden xl:block md:hidden" src="/contacts/phone.svg"
                                    alt="Phone"
                                    width={28}
                                    height={28}
                                />
                                <Image className="hidden xl:hidden md:block" src="/contacts/phone.svg"
                                    alt="Phone middle"
                                    width={24}
                                    height={24}
                                />
                                <Image className="block xl:hidden md:hidden" src="/contacts/phone.svg"
                                    alt="Phone mobile"
                                    width={20}
                                    height={20}
                                />
                            </div>
                            <div className="flex flex-col mx-4 w-[320px] gap-1">
                                <span className="hidden xl:block text-xl font-medium text-dark-700">Phone</span>
                                <span className="text-lg font-normal">096-2756567</span>
                            </div>
                        </div>

                        <div className="flex w-full h-full xl:w-auto justify-start items-center mx-auto xl:gap-4">
                            <div className="flex justify-center items-center w-[46px] h-[46px] md:w-[54px] md:h-[54px] xl:w-[64px] xl:h-[64px] bg-dark-50 rounded-full">
                                <Image className="hidden xl:block md:hidden" src="/contacts/email.svg"
                                    alt="Email"
                                    width={28}
                                    height={28}
                                />
                                <Image className="hidden xl:hidden md:block" src="/contacts/email.svg"
                                    alt="Email middle"
                                    width={24}
                                    height={24}
                                />
                                <Image className="block xl:hidden md:hidden" src="/contacts/email.svg"
                                    alt="Email mobile"
                                    width={20}
                                    height={20}
                                />
                            </div>
                            <div className="flex flex-col mx-4 w-[320px] gap-1">
                                <span className="hidden xl:block text-xl font-medium text-dark-700">Email</span>
                                <span className="text-lg font-normal">nattakornkhunart@gmail.com</span>
                            </div>
                        </div>
                    </div>

                    <SendMsgForm className="relative flex items-center justify-center w-full xl:w-1/2 h-[400px] md:h-[460px]" updateMsgState={updateMsgState} />

                </div>
            </div>
            
            <ToastsBox toastList={toastsBox} callback={handleToast} />
                
        </footer>
    )
}