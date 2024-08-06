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
    description:
      'A course that suits people who can drive, have an understanding of road safety and are nearly test ready.',
    link: '',
  },
  {
    image: '/images/two.jpg',
    title: 'Advanced',
    hours: '15 Hour Course',
    description:
      'Ideal for those who have had lessons in the past and just need to improve some skills to be test ready.',
    link: '',
    price: '£645',
  },
  {
    image: '/images/three.jpg',
    title: 'Intermediate',
    hours: '20 Hour Course',
    description:
      'This course is for people who have had lessons in the past and are ready to commit their time for lessons to be test ready.',
    link: '',
    price: '£840',
  },
  {
    image: '/images/four.jpg',
    title: 'Beginner',
    hours: '25 Hour Course',
    description:
      'The beginner course is for people who are fairly new to driving and wish to start over with the basics.',
    link: '',
    price: '£1025',
  },
  {
    image: '/images/four.jpg',
    title: 'Introduction',
    hours: '30 Hour Course',
    description:
      'This course is for people who have never had a lesson before and are brand new learners.',
    link: '',
    price: '£1200',
  },
];

export const Services = () => {
  return (
    <section className='flex flex-col space-y-20 items-center justify-center text-black px-0 sm:px-20 pb-40 pt-60'>
      <h1 className='text-5xl font-bold text-center'>
        Services customised for you
      </h1>
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
                <Card className='rounded-b-lg h-[450px] flex flex-col'>
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
                    <p className='text-secondary-foreground/60 font-medium'>
                      {service.description}
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
