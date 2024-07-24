import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import Link from 'next/link';

import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const ServiceData = [
  {
    image: '/images/instructor.jpg',
    title: 'Instructor Training',
    description: 'Become a driving instructor with our training program',
    link: '/instructor_training',
  },
  {
    image: '/images/one.jpg',
    title: 'Beginner Lessons',
    description: 'Start your driving journey with our beginner lessons',
    link: '',
  },
  {
    image: '/images/two.jpg',
    title: 'Intensive Course',
    description: 'Get your driving license in the shortest time possible',
    link: '',
  },
  {
    image: '/images/three.jpg',
    title: 'Refresher Course',
    description: 'Refresh your driving skills with our refresher course',
    link: '',
  },
  {
    image: '/images/four.jpg',
    title: 'Retake Test Course',
    description: 'Prepare for your driving test with our retake test course',
    link: '',
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
              <Link href={service.link}>
                <Card className='rounded-b-lg h-[320px]'>
                  <Image
                    src={service.image}
                    className='rounded-t-lg object-cover object-center'
                    width={0}
                    height={200}
                    sizes='100vw'
                    style={{ width: '100%', height: '200px' }}
                    alt='seatbelt'
                  />
                  <div className='p-5'>
                    <h1 className='font-bold text-lg'>{service.title}</h1>
                    <p className='text-secondary-foreground/60 font-medium'>
                      {service.description}
                    </p>
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
