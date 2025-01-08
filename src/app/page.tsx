
import Snow from './components/snow';
import Hero from './components/sections/hero';
import Intro  from './components/sections/intro';
import Project from './components/sections/projects';

export default function Home() {

  return (
    <main>  
      <Snow />
      <Hero />
      <Intro />
      <Project />
    </main>
  );
}
// bg-gradient-to-r from-[#fdfcfb] to-[#e2d1c3] bg-clip-text text-transparent --> color gradient