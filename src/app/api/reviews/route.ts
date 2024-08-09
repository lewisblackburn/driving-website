/* eslint-disable no-console */
import { google } from 'googleapis';

export async function GET() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n') ?? '',
    },
    scopes: ['https://www.googleapis.com/auth/business.manage'],
  });

  try {
    // Get the auth client
    const authClient = await auth.getClient();
    google.myBusiness._options.auth = authClient;

    const locationName = 'accounts/{accountId}/locations/{locationId}';
    const response = await google.myBusiness.accounts.locations.reviews.list({
      parent: locationName,
    });

    // Ensure response.data is in the correct format
    const reviews = response.data.reviews || [];

    return new Response(JSON.stringify({ reviews }), { status: 200 });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error('Error fetching reviews:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
