'use client';
import { FadeIn } from "../fade";
import { Container } from "../container";


export default function Intro() {
  return (
    <main>
      <Container className="relative z-[10] max-w-[692px] py-36 mb-2 lg:mb-32">
        <Container className="  space-y-12  text-3xl font-bold text-white md:text-5xl">
          <FadeIn>
            <p>Fourth Year College Student learning Computer Science,</p>
          </FadeIn>
          <FadeIn>
            <p>Pursuing Bachelors at the University of Saint Louis Tuguegarao.</p>
          </FadeIn>
          <FadeIn>
            <p>Coding, Writing, Designing, Thinking.</p>
          </FadeIn>
          <FadeIn>
            <p>Fueled by Ramen + Coffee.</p>
          </FadeIn>
        </Container>
      </Container>
    </main>
  );
};