import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Hobbies from '../components/Hobbies/Hobbies';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
// import About from '../components/About/About';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      {/* <About /> */}
      <Projects />
      <Technologies />
      <Acomplishments />
      <Hobbies/>
    </Layout>
  );
};

export default Home;
