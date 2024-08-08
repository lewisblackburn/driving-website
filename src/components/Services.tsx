import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export const ServiceData = [
  {
    image: '/images/one.jpg',
    title: 'Experienced / Refresher',
    hours: '10 hour course',
    price: '£440',
    deposit: '£90',
    description:
      'A course that suits people who can drive, have an understanding of road safety and are nearly test ready.',
    link: '',
    priceId: 'price_1PlVhpIDIC6jLb4jybbWVULA',
  },
  {
    image: '/images/two.jpg',
    title: 'Advanced',
    hours: '15 Hour Course',
    description:
      'Ideal for those who have had lessons in the past and just need to improve some skills to be test ready.',
    link: '',
    price: '£645',
    deposit: '£120',
    priceId: 'price_1PlViuIDIC6jLb4jKfyMu8JA',
  },
  {
    image: '/images/three.jpg',
    title: 'Intermediate',
    hours: '20 Hour Course',
    description:
      'This course is for people who have had lessons in the past and are ready to commit their time for lessons to be test ready.',
    link: '',
    price: '£840',
    deposit: '£140',
    priceId: 'price_1PlVjkIDIC6jLb4jKvdmkf40',
  },
  {
    image: '/images/four.jpg',
    title: 'Beginner',
    hours: '25 Hour Course',
    description:
      'The beginner course is for people who are new to driving and wish to start with the basics.',
    link: '',
    price: '£1025',
    deposit: '£150',
    priceId: 'price_1PlVkUIDIC6jLb4jOF5YycvH',
  },
];

export const Services = () => {
  return (
    <section className='flex flex-col space-y-20 items-center justify-center text-black px-0 sm:px-20 pb-40 pt-60'>
      <div className='container mx-auto'>
        <div className='-mx-4 flex flex-wrap'>
          <div className='w-full px-4'>
            <div className='mx-auto mb-[60px] max-w-[610px] text-center'>
              <h2 className='mb-6 text-3xl font-bold leading-[1.208] text-dark sm:text-4xl md:text-[40px]'>
                Services Customised For You
              </h2>
              <p className='text-base text-body-color'>
                The description of each course is only an advisory by our
                approved driving instructors. If you wish to take the 10 hour
                course as a beginner then you are free to do so. The choice is
                yours.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className='container w-full'
      >
        <CarouselContent>
          {ServiceData.map((service, index) => (
            <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
              <Link href={`/book?course=${service.title}`}>
                <Card className='rounded-b-lg h-[500px] flex flex-col'>
                  <Image
                    src={service.image}
                    className='rounded-t-lg object-cover object-center'
                    width={0}
                    height={200}
                    sizes='100vw'
                    style={{ width: '100%', height: '200px' }}
                    alt='seatbelt'
                  />
                  <div className='p-5 flex-grow'>
                    <h1 className='font-bold text-lg'>{service.title}</h1>
                    <h2 className='font-semibold text-md my-2'>
                      {service.hours} - {service.price}
                    </h2>
                    <p className='text-secondary-foreground/60 font-medium mb-4'>
                      {service.description}
                    </p>
                    {service.title === 'Beginner' && <br />}
                    <p className='text-secondary-foreground/60 font-medium'>
                      Deposit: {service.deposit}
                    </p>
                  </div>
                  <div className='p-5 mt-auto'>
                    <Button className='w-full'>Find Out More</Button>
                  </div>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='top-96 left-10 sm:-left-12 sm:top-1/2' />
        <CarouselNext className='top-96 right-10 sm:-right-12 sm:top-1/2' />
      </Carousel>
    </section>
  );
};
