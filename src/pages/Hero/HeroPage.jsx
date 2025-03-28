import React from 'react';
import video1 from  '../../assets/video/Lazuno_en_v1.mov'

const HeroPage = () => {
  return (
    <section className='relative'>
      <video className='absolute top-0 left-0 w-full h-[100vh]  object-cover' src={video1} autoPlay loop muted/>
    </section>
  );
};

export default HeroPage;
