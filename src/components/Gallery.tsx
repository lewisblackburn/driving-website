import Image from 'next/image';

const images = [
  {
    src: '/images/gallery/1.jpg',
    alt: '22 July 2024',
  },
  {
    src: '/images/gallery/2.jpg',
    alt: '19 July 2024',
  },
  {
    src: '/images/gallery/3.jpg',
    alt: '19 June 2024',
  },
  {
    src: '/images/gallery/4.jpg',
    alt: '19 June 2024',
  },
  {
    src: '/images/gallery/5.jpg',
    alt: '19 June 2024',
  },
  {
    src: '/images/gallery/6.jpg',
    alt: '21 May 2024',
  },
  {
    src: '/images/gallery/7.jpg',
    alt: '21 May 2024',
  },
  {
    src: '/images/gallery/8.jpg',
    alt: '21 May 2024',
  },
  {
    src: '/images/gallery/9.jpg',
    alt: '21 May 2024',
  },
];

export const Gallery = () => {
  // const [photos, setPhotos] = useState([]);

  // useEffect(() => {
  //   const fetchPhotos = async () => {
  //     const response = await fetch('/api/photos');
  //     const data = await response.json();
  //     setPhotos(data);
  //   };

  //   fetchPhotos();
  // }, []);

  return (
    <div className='relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8'>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
        {images.map((image, index) => (
          <div key={index} className='relative group'>
            <Image
              className='object-cover object-center w-full h-[400px] max-w-full rounded-lg hover:brightness-50 transition-all duration-100'
              src={image.src}
              alt={image.alt}
              width={400}
              height={400}
            />
            <h1 className='font-bold text-lg text-white absolute bottom-5 left-5 hidden group-hover:flex'>
              {image.alt}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};
