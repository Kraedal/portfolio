'use client';
import FadeIn from "../fade-in";
import { Container } from "../container";

export const Usps = () => {
  return (
    <Container className=" relative z-[10] max-w-[692px] space-y-12 py-36 text-3xl font-bold text-white md:text-5xl">
      <FadeIn>
        <p>Fourth Year College Student learning Computer Science,</p>
      </FadeIn>
      <FadeIn>
        <p>
            Pursuing Bachelors at the University of Saint Louis Tuguegarao.
        </p>
      </FadeIn>
      <FadeIn>
        <p>Coding, Writing, Designing, Thinking.</p>
      </FadeIn>
      <FadeIn>
        <p>Fueled by Ramen + Coffee.</p>
      </FadeIn>
    </Container>
  );
};