
import Snow from './components/snow';
import Hero from './components/sections/hero';
import { Usps } from './components/sections/intro';

export default function Home() {

  return (
    <main>  
      <Snow />
      <Hero />
      <Usps />


      


      <section className='h-screen flex flex-col justify-center text-center'>
        <h1>HELLO</h1>
      </section>
    </main>
  );
}
// bg-gradient-to-r from-[#fdfcfb] to-[#e2d1c3] bg-clip-text text-transparent --> color gradient