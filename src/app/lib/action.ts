'use server'

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'nattakornkhunart@gmail.com',
      pass: 'amcz ssyh fzvf vzzc',
    },
});

async function delay(ms: number) {
    return new Promise<void>((resolve) => {
      setTimeout(resolve, ms);
    });
}

export type State = {
    status?: number | null;
    message?: string | null;
}

export async function sendMessage(prevState: State, formData: FormData) {

    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (!name || !email || !message) {
        return {
            status: 400,
            message: 'Incomplete information.',
        };
    }

    try {
        
        await transporter.sendMail({
            from: 'nattakornkhunart@gmail.com',
            to: 'nattakornkhunart@gmail.com',
            subject: `Message from ${name} (Portfolio website)`,
            text: `From: ${name}\nEmail: ${email}\n\n${message}`,
        });

        return {
            status: 200,
            message: 'You have sent a message to Nattakorn. Please wait for a response within 48 hours.',
        }
    } catch (error) {
        return {
            status: 500,
            message: 'Unable to send messages to Nattakorn at this time. Please contact me via phone or email directly.',
        };
    }
}