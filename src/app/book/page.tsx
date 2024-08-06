'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from 'next/navigation';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import '@/lib/env';

import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import { ServiceData } from '@/components/Services';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from '@/components/ui/use-toast';

export default function AboutPage() {
  return (
    <main className='flex flex-col h-screen justify-between'>
      <header>
        <Banner />
        <Navbar />
      </header>
      {/* mb-auto needed for bottom footer */}
      <section className='mb-auto'>
        <PageHeader
          title='Choose Your Course'
          description='Pick a course that suits you.'
        />
        <div className='relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8'>
          <div className='container mx-auto px-4 py-8'>
            <h1 className='text-3xl font-bold mb-4'>Terms and Conditions</h1>

            <p className='mb-4'>
              These terms and conditions outline the rules and regulations for
              driving lessons with Drive 2 Learn.
            </p>

            <h2 className='text-2xl font-bold mb-2'>Requirements</h2>

            <p className='mb-4'>In order to have driving lessons you must:</p>

            <ul className='list-disc list-inside mb-4'>
              <li>Be aged 17 or older (16 or over if disabled)</li>
              <li>
                Hold a driving licence that is valid for the UK (provisional,
                full or an appropriate foreign licence)
              </li>
            </ul>

            <p className='mb-4'>
              It is your responsibility to provide your instructor with proof
              that you have a valid licence to drive before the commencement of
              your first driving lesson. If you fail to provide this proof, your
              instructor is entitled to refuse to conduct the driving lesson but
              may still charge you for such driving lesson.
            </p>

            <h2 className='text-2xl font-bold mb-2'>Paying For Lessons</h2>

            <p className='mb-4'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              doloribus vero dolore voluptatem ea, explicabo eum fuga optio in
              eveniet ad repellendus magni quidem corporis? Aliquam optio
              recusandae dicta voluptas.
            </p>

            <h3 className='text-xl font-semibold mb-2'>Refund Policy</h3>

            <p className='mb-4'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              doloribus vero dolore voluptatem ea, explicabo eum fuga optio in
              eveniet ad repellendus magni quidem corporis? Aliquam optio
              recusandae dicta voluptas.
            </p>

            <div className='mt-10'>
              <SelectForm />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

const FormSchema = z.object({
  course: z.string({
    required_error: 'Please select a course.',
  }),
});

export function SelectForm() {
  const searchParams = useSearchParams();
  const course = searchParams.get('course');

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-2/3 space-y-6'>
        <FormField
          control={form.control}
          name='course'
          defaultValue={course || ServiceData[0].title}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Course Selection</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Select a course to book' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {ServiceData.map((service, index) => (
                    <SelectItem key={index} value={service.title}>
                      {service.title} ({service.price})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>
                You can change your course selection above.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Book</Button>
      </form>
    </Form>
  );
}
