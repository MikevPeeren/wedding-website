// Next
import { NextApiRequest, NextApiResponse } from 'next';

// Send Email Util
import { sendEmail } from '../../utils/sendEmail';

export default async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === 'POST') {
    const { name, email, amountOfPersons, checkboxComing } = request.body;

    try {
      await sendEmail({ name, email, amountOfPersons, coming: checkboxComing });
    } catch (error) {
      return response.status(404).end();
    }

    return response.status(200).end();
  }
};
