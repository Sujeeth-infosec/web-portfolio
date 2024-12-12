import emailjs from '@emailjs/browser';

const EMAIL_CONFIG = {
  SERVICE_ID: 'service_tmumg3z',
  TEMPLATE_ID: 'template_9deq8n8',
  PUBLIC_KEY: 'QQsFqcE_3mTo7gtjD'
};

export const sendEmail = async (form: HTMLFormElement) => {
  try {
    const result = await emailjs.sendForm(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_ID,
      form,
      EMAIL_CONFIG.PUBLIC_KEY
    );
    
    if (result.status !== 200) {
      throw new Error('Failed to send email');
    }
    
    return result;
  } catch (error) {
    console.error('Email sending error:', error);
    throw new Error('Failed to send message. Please try again later.');
  }
};