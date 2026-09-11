import Hero from '../components/Hero';
import About from '../components/About';

export default function Home() {
  return (
    <div className="page">
      <div className="container-wide">
        <Hero />
      </div>
      <div className="mt-5 pt-4">
        <About />
      </div>
    </div>
  );
}
