import { NextRequest, NextResponse } from 'next/server';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST(req: NextRequest) {
  try {
    const { origin } = new URL(req.url);
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: 'price_1PkrmyK6MO17rZJ2rq5s7gpf',
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${origin}/book?success=true`,
      cancel_url: `${origin}/book?canceled=true`,
    });
    return NextResponse.redirect(session.url, 303);
  } catch (err) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const error = err as any;
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: error.statusCode || 500,
    });
  }
}
