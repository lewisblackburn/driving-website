import Image from 'next/image';

const images = [
  {
    src: 'https://scontent.flba3-2.fna.fbcdn.net/v/t39.30808-6/452530952_809904847993569_7673137301124168909_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=MQcmfEvMEw0Q7kNvgFxxohn&_nc_ht=scontent.flba3-2.fna&gid=A5qu_YX5xzsSPO2Gqz-TjTU&oh=00_AYDa2sSg9AG159l6UTXOZOjYBi5TOpdLMJEZ3rFnG858CQ&oe=66B145DD',
    alt: '22 July 2024',
  },
  {
    src: 'https://scontent.flba3-2.fna.fbcdn.net/v/t39.30808-6/448658947_790235476627173_5711426955221379068_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=RTPfND94usUQ7kNvgGDybHb&_nc_ht=scontent.flba3-2.fna&oh=00_AYAj9SKULUd1ZzY7QjtMgcvlewr_vXNo71xJQp6n33kD7Q&oe=66B167BC',
    alt: '19 July 2024',
  },
  {
    src: 'https://scontent.flba3-1.fna.fbcdn.net/v/t39.30808-6/448652890_790235319960522_228687155991594065_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=m0V5SElXH68Q7kNvgFboqcw&_nc_ht=scontent.flba3-1.fna&oh=00_AYBtIfrCMScWpkpi80pwyHqEEHr5lAhOUQiCHNtT9jUnGw&oe=66B143D0',
    alt: '19 June 2024',
  },
  {
    src: 'https://scontent.flba3-2.fna.fbcdn.net/v/t39.30808-6/448707236_790235386627182_7508225412116175971_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=A3PUC7GtO7EQ7kNvgFktz4V&_nc_ht=scontent.flba3-2.fna&gid=A5cdlzsze0I1Tp5lXIzBDaC&oh=00_AYD3JFq-kZwEAHdHzcAVnmp-_AhfPj9pItd-Ub4Gcm2aMA&oe=66B17066',
    alt: '19 June 2024',
  },
  {
    src: 'https://scontent.flba3-1.fna.fbcdn.net/v/t39.30808-6/448802662_790235349960519_8274792369304190152_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=bZvXyCKP7JsQ7kNvgEy8JqA&_nc_ht=scontent.flba3-1.fna&oh=00_AYB39wxqP-jFP8qNR_ZckslY75lWwiek2p230wWBF56LBg&oe=66B14758',
    alt: '19 June 2024',
  },
  {
    src: 'https://scontent.flba3-1.fna.fbcdn.net/v/t39.30808-6/442495886_773244951659559_4069712902001854005_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=-4txhYHeYbQQ7kNvgFyGpV5&_nc_ht=scontent.flba3-1.fna&oh=00_AYAhKlilQVAzvyUqQMeeWz3vVwlEyw3tVgfbJOl8mAexYg&oe=66B13E70',
    alt: '21 May 2024',
  },
  {
    src: 'https://scontent.flba3-1.fna.fbcdn.net/v/t39.30808-6/442493144_773244914992896_4538421811261789791_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=HN4XZGcSthcQ7kNvgFWts1F&_nc_ht=scontent.flba3-1.fna&gid=AvJsnbm0QuEIJQPKOQfOcKk&oh=00_AYAIJDMCMOv1wx1PjkMTwRAa6ywfyoxj6uBZZEUL04yeww&oe=66B16A0C',
    alt: '21 May 2024',
  },
  {
    src: 'https://scontent.flba3-2.fna.fbcdn.net/v/t39.30808-6/445241529_773244874992900_3998706128243043646_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=U2T3vEzpk3EQ7kNvgFj8CP8&_nc_ht=scontent.flba3-2.fna&gid=Ai0dvCfTkJUQl9H9BUwKiSE&oh=00_AYCwiD_RYc3Im9jTpryiBs7UM6NC0ujv8hTSfSppGX4UiA&oe=66B14B73',
    alt: '21 May 2024',
  },
  {
    src: 'https://scontent.flba3-1.fna.fbcdn.net/v/t39.30808-6/442480236_773244821659572_4973046306932921587_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=xypko1wZ1jUQ7kNvgGE10ho&_nc_ht=scontent.flba3-1.fna&gid=A0hgbyCcU-r_qkOrPzYKeoy&oh=00_AYBzuE4FR4a3iEBLnbuQREEgo3ARlSMZ6CyXvrcOM0Cqnw&oe=66B13D06',
    alt: '21 May 2024',
  },
];

export const Gallery = () => {
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
