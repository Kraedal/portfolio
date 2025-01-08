'use client';

import Image from "next/image";
import { Container } from "../container";
import { FadeLeft, FadeRight } from "../fade";
import { Button } from "../button";

export default function Project () {
    return (
        <Container className="flex flex-col md:flex-row flex-wrap w-full gap-4 overflow-x-hidden">
          {/* Project 1 */}
          <div className="flex flex-col md:flex-row-reverse w-full gap-4 p-8">
            {/* Image */}
            <div className="flex-1">
              <FadeRight>
                <div className="border-muted">
                  <Image
                    src="/images/catro.png"
                    alt="Skibidi Toilet"
                    width={300}
                    height={300}
                    className="rounded-full hover:sepia-[.25] mx-auto animate-pulse"
                  />
                </div>
              </FadeRight>
            </div>

          {/* Texts Div */}
            <div className="flex-1">
              <FadeLeft>
                <div className="border-muted">
                  <h1 className="text-2xl font-medium text-gray-500">Lancer Full Stack Developer</h1>
                      <h1 className="text-3xl font-bold">Developing a Tool for Freelancers</h1>
                      <div className="flex flex-row flex-wrap gap-2 my-4">
                        <p className="font-thin  border-purple-200/60 border-2 px-2  py-1 rounded-md">NextJS</p>
                        <p className="font-thin  border-purple-200/60 border-2 px-2  py-1 rounded-md"> Prisma</p>
                        <p className="font-thin  border-purple-200/60 border-2 px-2  py-1 rounded-md">Postgres</p>
                        <p className="font-thin  border-purple-200/60 border-2 px-2  py-1 rounded-md">FastAPI</p>
                        
                      </div>
                      <p className="text-gray-100 text-lg mb-4">Integrating backend services,building RESTful APIs, and Crafting beautiful UI for businesses and freelancers alike.</p>
  
                      <Button className="hover:tracking-widest duration-200 cursor-not-allowed" size="medium" disable={true}>
                        Coming Soon
                      </Button>
                      </div>
                  </FadeLeft>
                </div>
              </div>

              {/* Project 2 */}
              <div className="flex flex-col md:flex-row w-full gap-4 p-8">
                  {/* Image */}
                  <div className="flex-1 mb-8">
                    <FadeLeft>
                      <div className="border-muted">
                        <Image
                          src="/images/catro.png"
                          alt="Skibidi Toilet"
                          width={300}
                          height={300}
                          className="rounded-full hover:sepia-[.25] mx-auto animate-pulse"
                        />
                      </div>
                    </FadeLeft>
                  </div>
                
                  <div className="flex-1 mb-16">
                  <FadeRight>
                    <div className="border-muted">
                      <h1 className="text-2xl font-medium text-gray-500">Techtalk Frontend Developer</h1>
                          <h1 className="text-3xl font-bold">Augmentative and Alternative Communication Website</h1>
                          <div className="flex flex-row flex-wrap gap-2 my-4">
                            <p className="font-thin  border-orange-200/60 border-2 px-2  py-1 rounded-md">Angular</p>
                            <p className="font-thin  border-orange-200/60 border-2 px-2  py-1 rounded-md">Tailwind CSS</p>
                            <p className="font-thin  border-orange-200/60 border-2 px-2  py-1 rounded-md">Typescript</p>
                          </div>
                            <p className="text-gray-100 mb-4 text-lg">Designed the website user interface, ensuring accessibility and responsiveness across all devices.</p>
                          <Button className="hover:tracking-widest duration-200 cursor-not-allowed" size="medium" disable={true}>
                            Protected
                          </Button>
                          </div>
                        </FadeRight>
                      </div>
                    </div>
            </Container>
    );
}