/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

export default function LogoCloud() {
  return (
    <div className='bg-red-200 bg-opacity-25'>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 '>
        <div className=''>
          <h2 className='max-w-md mx-auto text-3xl font-extrabold text-red-900 text-center '>
            We are huge supporters of Brake the road safety charity.
          </h2>
          <div className='flow-root self-center mt-12'>
            <div className='-mt-4 -ml-8 flex flex-wrap justify-between'>
              <Link
                href='https://www.brake.org.uk/'
                className='mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center'
              >
                <img className='h-12' src='/images/brake.png' alt='brake' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LogoCloud2() {
  return (
    <div className='bg-red-200 bg-opacity-25'>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 '>
        <div className=''>
          <h2 className='max-w-md mx-auto text-3xl font-extrabold text-red-900 text-center '>
            We are proud to be members of the following companies.
          </h2>
          <div className='flow-root self-center mt-12'>
            <div className='-mt-4 -ml-8 flex flex-wrap space-x-0 md:space-x-24 justify-center'>
              <Link
                href='https://www.driving.org/'
                className='mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4'
              >
                <img className='h-12' src='/images/dia.png' alt='DIA' />
              </Link>
              <Link
                href='http://sddia.co.uk/'
                className='mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4'
              >
                <img className='h-12' src='/images/sddia.png' alt='SDDIA' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export function LogoCloud2() {
//   return (
//     <div className='bg-red-200 bg-opacity-25'>
//       <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
//         <div className='lg:grid lg:grid-cols-2 lg:gap-8'>
//           <h2 className='max-w-md mx-auto text-3xl font-extrabold text-red-900 text-center lg:max-w-xl lg:text-left'>
//             We are proud supporters of the following companies.
//           </h2>
//           <div className='flow-root self-center mt-8 lg:mt-0'>
//             <div className='-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4'>
//               <Link
//                 href='http://sddia.co.uk/'
//                 className='mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4'
//               >
//                 <img className='h-12' src='/images/sddia.png' alt='SDDIA' />
//               </Link>
//               <Link
//                 href='https://www.driving.org/'
//                 className='mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4'
//               >
//                 <img className='h-12' src='/images/dia.png' alt='DIA' />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
