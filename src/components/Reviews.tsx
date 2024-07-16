/* eslint-disable @next/next/no-img-element */
import { StarIcon } from 'lucide-react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

const reviews = {
  average: 5,
  totalCount: 61,
  counts: [
    { rating: 5, count: 61 },
    { rating: 4, count: 0 },
    { rating: 3, count: 0 },
    { rating: 2, count: 0 },
    { rating: 1, count: 0 },
  ],
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
        <p>Alex was recommended to me by another instructor, and I now highly recommend him to anyone and everyone who wants to learn to drive! He is so accommodating, and fit lessons around my busy schedule. He always made time for me, and I know that he will always make time for anyone who is dedicated to their lessons. Alex's tips and tricks transformed my driving and my confidence behind the wheel. He takes a personalised approach, catering his teaching to each individual. He identified my way of thinking and taught in a way that made it so easy for me to understand. Thanks to Alex's dedication, talent, knowledge and compassion, I passed within 3 months. Thank you so much, Alex! 😊</p>
      `,
      author: 'Emily Selman',
      avatarSrc:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
    {
      id: 2,
      rating: 5,
      content: `
        <p>Thankyou Alex for the support.
Excellent instructor.
Helped me to pass the test in 2weeks .
Will recommend to everyone.
Hats off for your efforts.</p>
      `,
      author: 'Jithin J',
      avatarSrc:
        'https://lh3.googleusercontent.com/a-/ALV-UjUKb7St0IvirpVjsMjcObknhaRzq0h31FdMhzZBse1JolN1x48P=w60-h60-p-rp-mo-br100',
    },
  ],
};

export default function Reviews() {
  return (
    <div className='bg-white'>
      <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8 lg:grid lg:grid-cols-12 lg:gap-x-8'>
        <div className='lg:col-span-4'>
          <h2 className='text-2xl font-extrabold tracking-tight text-gray-900'>
            Customer Reviews
          </h2>

          <div className='mt-3 flex items-center'>
            <div>
              <div className='flex items-center'>
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={cn(
                      reviews.average > rating
                        ? 'text-yellow-400'
                        : 'text-gray-300',
                      'flex-shrink-0 h-5 w-5 fill-current'
                    )}
                    aria-hidden='true'
                  />
                ))}
              </div>
              <p className='sr-only'>{reviews.average} out of 5 stars</p>
            </div>
            <p className='ml-2 text-sm text-gray-900'>
              Based on {reviews.totalCount} reviews
            </p>
          </div>

          <div className='mt-6'>
            <h3 className='sr-only'>Review data</h3>

            <dl className='space-y-3'>
              {reviews.counts.map((count) => (
                <div key={count.rating} className='flex items-center text-sm'>
                  <dt className='flex-1 flex items-center'>
                    <p className='w-3 font-medium text-gray-900'>
                      {count.rating}
                      <span className='sr-only'> star reviews</span>
                    </p>
                    <div
                      aria-hidden='true'
                      className='ml-1 flex-1 flex items-center'
                    >
                      <StarIcon
                        className={cn(
                          count.count > 0 ? 'text-yellow-400' : 'text-gray-300',
                          'flex-shrink-0 h-5 w-5 fill-current'
                        )}
                        aria-hidden='true'
                      />

                      <div className='ml-3 relative flex-1'>
                        <div className='h-3 bg-gray-100 border border-gray-200 rounded-full' />
                        {count.count > 0 ? (
                          <div
                            className='absolute inset-y-0 bg-yellow-400 border border-yellow-400 rounded-full'
                            style={{
                              width: `calc(${count.count} / ${reviews.totalCount} * 100%)`,
                            }}
                          />
                        ) : null}
                      </div>
                    </div>
                  </dt>
                  <dd className='ml-3 w-10 text-right tabular-nums text-sm text-gray-900'>
                    {Math.round((count.count / reviews.totalCount) * 100)}%
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className='mt-10'>
            <h3 className='text-lg font-medium text-gray-900'>
              Share your thoughts
            </h3>
            <p className='mt-1 text-sm text-gray-600'>
              If you have taken lessons with Alex, consider leaving a review to
              share your thoughts with others.
            </p>

            <Link
              href='https://www.google.com/maps/place/Drive+2+Learn+with+Alex/@53.6398854,-1.3486284,15z/data=!4m6!3m5!1s0x4608cd089175e4af:0x2b5a6ab71f7937b4!8m2!3d53.5964898!4d-1.3942774!16s%2Fg%2F11t2f13q5m?entry=ttu'
              rel='noopener noreferrer'
              target='_blank'
              className='mt-6 inline-flex w-full bg-white border border-gray-300 rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full'
            >
              Write a review
            </Link>
          </div>
        </div>

        <div className='mt-16 lg:mt-0 lg:col-start-6 lg:col-span-7'>
          <h3 className='sr-only'>Recent reviews</h3>

          <div className='flow-root'>
            <div className='-my-12 divide-y divide-gray-200'>
              {reviews.featured.map((review) => (
                <div key={review.id} className='py-12'>
                  <div className='flex items-center'>
                    <img
                      src={review.avatarSrc}
                      alt={`${review.author}.`}
                      className='h-12 w-12 rounded-full'
                    />
                    <div className='ml-4'>
                      <h4 className='text-sm font-bold text-gray-900'>
                        {review.author}
                      </h4>
                      <div className='mt-1 flex items-center'>
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            className={cn(
                              review.rating > rating
                                ? 'text-yellow-400'
                                : 'text-gray-300',
                              'h-5 w-5 flex-shrink-0 fill-current'
                            )}
                            aria-hidden='true'
                          />
                        ))}
                      </div>
                      <p className='sr-only'>{review.rating} out of 5 stars</p>
                    </div>
                  </div>

                  <div
                    className='mt-4 space-y-6 text-base italic text-gray-600'
                    dangerouslySetInnerHTML={{ __html: review.content }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
