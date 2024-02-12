import type { NextApiRequest, NextApiResponse } from 'next';
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY || '');

interface ErrorResponse {
  error: string;
}

interface SuccessResponse {
  message: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, senderName } = req.body;

  const message = {
    to: email,
    from: 'pineheadcoder@gmail.com',
    subject: `${senderName || 'Someone'} is sending you flowers`,
    text: `${senderName || 'Someone'} is sending you flowers. Check out the link to see them: [flower-sender.vercel.app]`,
  };

  try {
    await sendgrid.send(message);
    res.status(200).json({ message: 'Email sent' });
  } catch (error) {
    if (typeof error === 'object' && error !== null && 'response' in error) {
      const sgError = error as { response: { body: string } };
      console.error(sgError.response.body);
    } else {
      console.error('An unexpected error occurred:', error);
    }
    res.status(500).json({ error: 'Failed to send email' });
  }
}
