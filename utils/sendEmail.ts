// External
const sgMail = require('@sendgrid/mail');

// Sendgrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/**
 * Send a email to our own email so we can keep in check with our attendees.
 */
const sendEmail = async ({ name, email, amountOfPersons, coming }) => {
  // Email data is all inside Sendgrid and gets dynamically set.
  const comingOrNot = coming ? 'WEL' : 'NIET';
  const emoji = coming ? '🤗' : '😢';

  const msg = {
    to: 'mikeenmonika@gmail.com',
    from: 'mikeenmonika@gmail.com',
    subject: 'Aanmelding Bruiloft Mike & Monika',
    template_id: 'd-afc36fa6f54543ab86146c47ec6e109c',
    dynamic_template_data: {
      name: name,
      coming: comingOrNot,
      emoji: emoji,
      amountOfPersons: amountOfPersons,
      email: email,
    },
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.log(error);
  }
};

export { sendEmail };
