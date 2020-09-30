import AWS from 'aws-sdk';

const ses = new AWS.SES({ region: 'us-west-2' });

async function sendMail(event, context) {
  const params = {
    Source: 'loren@lorenkerr.com',
    Destination: {
      ToAddresses: ['loren@lorenkerr.com'],
    },
    Message: {
      Body: {
        Text: {
          Data: 'Hello from Loren!',
        },
      },
      Subject: {
        Data: 'Test E-mail'
      }
    },
  };

  try {
    const result = await ses.sendEmail(params).promise();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}

export const handler = sendMail;
