import Image from "next/image";
import { useFormState } from 'react-dom';
import { sendMessage, State } from "../lib/action";
import { useState, useEffect } from "react";

export default function SendMsgForm({
    className,
    updateMsgState,
}:{
    className?: string;
    updateMsgState: (newState: State) => void;
}) {
    const initialState: State = { status: null, message: null };
    const [state, dispatch] = useFormState(sendMessage, initialState);
    const [isSending, setIsSending] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        updateMsgState(state);
        setIsSending(false);

        if (state.status === 200) {
            setName('');
            setEmail('');
            setMessage('');
        }
    },[state]);

    const handleSubmit = () => {
        setIsSending(true);
    }

    return (
        <div className={className}>
            <div className="absolute px-auto mx-auto min-w-[400px] w-[95%] max-w-[600px] xl:max-w-[100%] xl:w-[520px] h-full bg-dark-100 opacity-70 rounded-lg z-40"/>
            <div className="absolute px-auto mx-auto min-w-[400px] w-[95%] max-w-[600px] xl:max-w-[100%] xl:w-[520px] h-full flex flex-col justify-center z-50 px-8 md:px-12 gap-4 xl:gap-6">
                <span className="text-dark-50 text-xl md:text-2xl font-medium">Send me a message</span>

                <form className="flex flex-col gap-4" action={dispatch} onSubmit={() => handleSubmit()}>
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full font-normal rounded bg-dark-100 bg-opacity-70 py-1 px-3 text-base leading-8 text-dark-50 outline-none focus:ring-2 focus:ring-dark-700 placeholder-dark-400" placeholder="Full Name" required />
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full font-normal rounded bg-dark-100 bg-opacity-70 py-1 px-3 text-base leading-8 text-dark-50 outline-none focus:ring-2 focus:ring-dark-700 placeholder-dark-400" placeholder="Email" required />
                    <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} className="w-full h-[150px] font-normal rounded bg-dark-100 bg-opacity-70 py-1 px-3 text-base leading-8 text-dark-50 outline-none focus:ring-2 focus:ring-dark-700 resize-none placeholder-dark-400" placeholder="Type your Message..." required />
                    <button type="submit" className="flex justify-center items-center rounded w-full h-[40px] bg-dark-700 text-dark-50 gap-1 active:bg-[#662FD3]">
                        {!isSending ? (
                            <>
                                <Image src="/contacts/send.svg"
                                    alt="Message"
                                    width={20}
                                    height={20}
                                />
                                <span>Send Message</span>
                            </>
                        ) : (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                <span>Sending...</span>
                            </>
                        )}
                    </button>
                </form>
                
            </div>
        </div>
    )
}