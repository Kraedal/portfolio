'use client';

import Image from "next/image";
import { Container } from "../container";
import { FadeLeft, FadeRight } from "../fade";


export default function Project () {



    return (

        <Container className='h-screen flex flex-col'>
         <Container className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {/* Image Div */}
          <FadeLeft>
            <div className="h-[40svh] bg-muted order-2">
              <Image
                src="/images/catro.png"
                alt="Skibidi Toilet"
                width={300}
                height={300}
                className="rounded-full hover:sepia-[.25] justify-self-center lg:justify-self-start animate-pulse"
              />
            </div>
          </FadeLeft>

          {/* Texts Div */}
          <FadeRight>
            <div className="h-[40svh] bg-muted order-first">
              <h1 className="text-2xl font-medium text-gray-500">Lancer Full Stack Developer</h1>
              <h1 className="text-3xl font-bold">Developing a Tool for Freelancers</h1>
              <div className="flex flex-row gap-2 my-4">
                <p className="font-thin  bg-purple-200/60 px-2 py-1 rounded-md">NextJS</p>
                <p className="font-thin  bg-purple-200/60 px-2 py-1 rounded-md"> Prisma</p>
                <p className="font-thin  bg-purple-200/60 px-2 py-1 rounded-md">Postgres</p>
                <p className="font-thin  bg-purple-200/60 px-2 py-1 rounded-md">FastAPI</p>
                
              </div>
              <p className="text-gray-400 mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus unde iste nesciunt modi architecto voluptatibus explicabo. Quia quisquam amet autem minus facilis! Eaque, error!</p>
              <h1>View Project </h1>
            </div>
          </FadeRight>

          {/* Texts Div */}
          <FadeLeft>
          <div className="h-[40svh] bg-muted"> 
              <Image
                src="/images/catro.png"
                alt="Skibidi Toilet"
                width={300}
                height={300}
                className="rounded-full hover:sepia-[.25] justify-self-center lg:justify-self-start animate-pulse"
              />
            </div>
        
          </FadeLeft>
          
          {/* Image Div */}
          <FadeRight>
          <div className="h-[40svh] bg-muted">
              <h1 className="text-2xl font-medium text-gray-500">Techtalk Frontend Developer</h1>
              <h1 className="text-3xl font-bold">Augmentative and Alternative Communication Website</h1>
              <div className="flex flex-row gap-2 my-4">
                <p className="font-thin  bg-orange-200/60 px-2 py-1 rounded-md">Angular</p>
                <p className="font-thin  bg-orange-200/60 px-2 py-1 rounded-md">Tailwind CSS</p>
                <p className="font-thin  bg-orange-200/60 px-2 py-1 rounded-md">Sketch</p>
              </div>
              <p className="text-gray-400 mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus unde iste nesciunt modi architecto voluptatibus explicabo. Quia quisquam amet autem minus facilis! Eaque, error!</p>
              <h1>View Project </h1>
            </div>
          </FadeRight>


        </Container>

        </Container>
    
    );
}