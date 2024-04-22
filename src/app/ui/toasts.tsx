import { ToastType } from './contact';
import clsx from 'clsx';

export default function ToastsBox({ 
    toastList,
    callback,
}: {
    toastList: ToastType[];
    callback: (toastList: ToastType[]) => void;
}) {
    const handleToastClose = (id: string) => {
        const updatedToasts = toastList.filter(toast => toast.id !== id);
        callback(updatedToasts);
    }
    return (
        <div className="fixed z-[999] bottom-8 right-8 flex flex-col gap-4">
            {toastList.map(toast => (
                <div key={toast.id} id={toast.id} className={`max-w-xs bg-gray-800 rounded-xl shadow-lg ${toast.type}`} role="alert">
                    <div className="flex p-4">
                        <div className="flex-shrink-0">
                            <svg className={`flex-shrink-0 size-4 mt-0.5 ${clsx({'text-red-500': toast.type==='error', 'text-teal-500': toast.type!=='error'})}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d={toast.type === 'error' ? "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" : "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"}></path>
                            </svg>
                        </div>
                        <div className="ms-3">
                            <p className="text-sm text-gray-400">
                                {toast.message}
                            </p>
                        </div>
                        <button type="button" onClick={() => handleToastClose(toast.id)} className="inline-flex flex-shrink-0 justify-center items-center size-5 rounded-lg text-white opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100">
                            <span className="sr-only">Close</span>
                            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}