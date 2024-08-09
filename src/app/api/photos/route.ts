/* eslint-disable @typescript-eslint/no-non-null-assertion */
import FB from 'fb';
import { NextResponse } from 'next/server';

interface Photo {
  id: string;
  name?: string;
  picture: string;
  link: string;
}

interface PhotosResponse {
  data: Photo[];
}

export async function GET() {
  try {
    // Initialize the Facebook SDK with your App Access Token
    FB.options({
      appId: process.env.FACEBOOK_APP_ID!,
      appSecret: process.env.FACEBOOK_APP_SECRET!,
      accessToken: process.env.FACEBOOK_PAGE_ACCESS_TOKEN!,
    });

    // Fetch photos from the Facebook page
    const photosResponse = await FB.api<PhotosResponse>(
      `/${process.env.FACEBOOK_PAGE_ID}/photos`,
      {
        fields: 'id,name,picture,link',
      },
    );

    // Return the photos in the response
    return NextResponse.json(photosResponse.data);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching photos from Facebook', error);
    return NextResponse.json(
      { error: 'Failed to fetch photos from Facebook' },
      { status: 500 },
    );
  }
}
