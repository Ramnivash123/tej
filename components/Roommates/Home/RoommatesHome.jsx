import React from 'react'
import RoommatesHero from './RoommatesHero';
import RoommatesContact from './RoommatesContact';
import Footer from '@/components/Home/Footer';

function RoommatesHome() {
  return (
    <div>
      <section>
        <RoommatesHero />
      </section>
      {/* <section id="contact">
        <RoommatesContact />
      </section> */}
      <section className='mt-10'>
        <Footer/>
      </section>
    </div>
  );
}

export default RoommatesHome