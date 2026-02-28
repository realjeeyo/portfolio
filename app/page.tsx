"use client";

import Link from "next/link";
import Image from "next/image";
import { PaintBrushIcon, CameraIcon, FilmIcon, MusicalNoteIcon } from "@heroicons/react/24/outline";
import { Tab, TabGroup, TabList, TabPanels, TabPanel } from "@headlessui/react";
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 z-10 h-screen w-screen overflow-hidden">
        <ShaderGradientCanvas>
          <ShaderGradient
            animate="on"
            axesHelper="off"
            bgColor1="#000000"
            bgColor2="#000000"
            brightness={0}
            cAzimuthAngle={269}
            cDistance={0.5}
            cPolarAngle={168}
            cameraZoom={15.09}
            color1="#000f7f"
            color2="#000000"
            color3="#000000"
            destination="onCanvas"
            embedMode="off"
            envPreset="dawn"
            format="gif"
            fov={45}
            frameRate={10}
            gizmoHelper="hide"
            grain="on"
            lightType="env"
            pixelDensity={1}
            positionX={-0.1}
            positionY={0}
            positionZ={0}
            range="disabled"
            rangeEnd={40}
            rangeStart={0}
            reflection={0.2}
            rotationX={0}
            rotationY={130}
            rotationZ={70}
            shader="defaults"
            type="sphere"
            uAmplitude={3.2}
            uDensity={0.8}
            uFrequency={5.5}
            uSpeed={0.1}
            uStrength={0.3}
            uTime={0}
            wireframe={false}
          />
        </ShaderGradientCanvas>
      </div>
      <div className="container mx-auto space-y-32 text-center relative z-10">
        <section id="home" className="pt-80 h-dvh">
          <h1 className="text-4xl font-bold mb-4">
            Jose Rafael Achilles L. Delgado
          </h1>
          <p className="text-md text-gray-300 max-w-2xl mx-auto mt-2">
            Full-stack Web Developer | React, Next.js, Node.js, and more.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/delgado-resume.pdf"
              className="rounded-md bg-white px-4 py-2 text-sm text-black inline-flex items-center gap-2"
              download
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4"
              >
                <path d="M8.75 2.75a.75.75 0 0 0-1.5 0v5.69L5.03 6.22a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0-1.06-1.06L8.75 8.44V2.75Z" />
                <path d="M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z" />
              </svg>
              Download CV
            </Link>
            <Link
              href="https://github.com/realjeeyo"
              className="rounded-md bg-white px-4 py-2 text-sm inline-flex items-center gap-2 text-black"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="M6.766 11.695C4.703 11.437 3.25 9.904 3.25 7.92c0-.806.281-1.677.75-2.258-.203-.532-.172-1.662.062-2.129.626-.081 1.469.258 1.969.726.594-.194 1.219-.291 1.985-.291.765 0 1.39.097 1.953.274.484-.451 1.343-.79 1.969-.709.218.435.25 1.564.046 2.113.5.613.766 1.436.766 2.274 0 1.984-1.453 3.485-3.547 3.759.531.355.891 1.129.891 2.016v1.678c0 .484.39.758.859.564C13.781 14.824 16 11.905 16 8.291 16 3.726 12.406 0 7.984 0 3.562 0 0 3.726 0 8.291c0 3.581 2.203 6.55 5.172 7.663A.595.595 0 0 0 6 15.389v-1.291c-.219.097-.5.162-.75.162-1.031 0-1.641-.581-2.078-1.662-.172-.435-.36-.693-.719-.742-.187-.016-.25-.097-.25-.193 0-.194.313-.339.625-.339.453 0 .844.29 1.25.887.313.468.641.678 1.031.678.391 0 .641-.146 1-.516.266-.275.469-.517.657-.678Z"></path>
              </svg>
              GitHub
            </Link>
            <Link
              href="https://linkedin.com/in/jiodelgado"
              className="rounded-md bg-white px-4 py-2 text-sm inline-flex items-center gap-2 text-black"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
              LinkedIn
            </Link>
          </div>
        </section>

        <section id="about" className="pt-80 h-dvh flex items-center justify-center">
          <div className="max-w-4xl w-full mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-8 text-center">About Me</h2>
            
            <div className="rounded-3xl border border-white/25 bg-white/10 backdrop-blur-xl shadow-2xl p-8">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 justify-center pb-6 mb-6 border-b border-white/20">
                {["Curious", "Ambitious", "Empathetic", "Loyal"].map((tag) => (
                  <span key={tag} className="px-4 py-1.5 rounded-full bg-white/15 text-sm font-medium border border-white/20 hover:bg-white hover:text-gray-800 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>

              <TabGroup>
                <TabList className="flex gap-2 rounded-xl bg-white/5 p-1 mb-6">
                  {["Summary", "Gallery", "Hobbies & Interests"].map((category) => (
                    <Tab
                      key={category}
                      className={({ selected }) =>
                        `w-full rounded-lg py-2 text-sm font-medium leading-5 transition-all cursor-pointer
                        ${selected 
                          ? "bg-white text-gray-900 shadow" 
                          : "text-gray-300 hover:bg-white/10 hover:text-white"
                        }`
                      }
                    >
                      {category}
                    </Tab>
                  ))}
                </TabList>
                <TabPanels className="mt-6">
                  {/* Summary Panel */}
                  <TabPanel className="space-y-6">
                    <div className="text-left">
                      <h3 className="text-xl font-semibold mb-3 text-white">Who I Am</h3>
                      <p className="text-gray-200 leading-relaxed">
                        I&apos;m a full-stack web developer with a passion for creating minimalist and user-friendly front-end designs.
                        I also have a strong desire to create elegant solutions to complex problems. 
                        With expertise spanning from front-end frameworks to back-end systems, I focus on building applications 
                        that are not only functional but also provide exceptional user experiences.
                      </p>
                    </div>

                    <div className="text-left">
                      <h3 className="text-xl font-semibold mb-3 text-white">Work Experience</h3>
                      <div className="space-y-2">
                        <div className="rounded-lg bg-white/5 p-4 border border-white/10 flex items-center justify-between gap-4">
                          <div>
                            <p className="font-semibold text-white">AI Engineer Intern</p>
                            <p className="text-sm text-gray-300">Sense Software Solutions • 2025</p>
                          </div>
                          <Image 
                            src="/sensesoft-logo.png" 
                            alt="Sense Software Solutions Logo" 
                            width={60} 
                            height={60}
                            className="flex-shrink-0"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="text-left">
                      <h3 className="text-xl font-semibold mb-3 text-white">Education</h3>
                      <div className="space-y-2">
                        <div className="rounded-lg bg-white/5 p-4 border border-white/10 flex items-center justify-between gap-4">
                          <div>
                            <p className="font-semibold text-white">Bachelor of Science in Information Technology</p>
                            <p className="text-sm text-gray-300">University of San Carlos • 2023 - 2026</p>
                          </div>
                          <Image 
                            src="/usc-logo-seal.png" 
                            alt="USC Logo" 
                            width={65} 
                            height={65}
                            className="flex-shrink-0"
                          />
                        </div>
                      </div>
                    </div>
                  </TabPanel>

                  {/* Gallery Panel */}
                  <TabPanel>
                    <div className="text-left">
                      <h3 className="text-xl font-semibold mb-3 text-white">Gallery</h3>
                      <div className="grid grid-cols-3 gap-4">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                          <div key={item} className="aspect-square rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                            <p className="text-gray-400 text-sm">Image {item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabPanel>

                  {/* Hobbies & Interests Panel */}
                  <TabPanel>
                    <div className="text-left space-y-2">
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <h3 className="text-xl font-semibold text-white">Hobbies & Interests</h3>
                        <div className="flex items-center gap-2">
                          <Link
                            href="https://instagram.com/jiodelgadoo"
                            target="_blank"
                            aria-label="Instagram"
                            className="rounded-md border border-white/20 bg-white/5 p-2 text-gray-200 transition-colors hover:bg-white hover:text-black"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="size-4" fill="currentColor">
                              <path d="M8 0C5.826 0 5.555.01 4.703.048 3.85.087 3.269.222 2.76.42a5.05 5.05 0 0 0-1.833 1.2A5.05 5.05 0 0 0 .42 3.453c-.198.509-.333 1.09-.372 1.944C.01 6.25 0 6.522 0 8.696c0 2.174.01 2.445.048 3.297.039.853.174 1.434.372 1.943.263.67.62 1.24 1.2 1.834.594.594 1.163.951 1.834 1.2.509.198 1.09.333 1.943.372.852.038 1.123.048 3.297.048 2.174 0 2.445-.01 3.297-.048.853-.039 1.434-.174 1.943-.372a5.05 5.05 0 0 0 1.834-1.2c.594-.594.951-1.163 1.2-1.834.198-.509.333-1.09.372-1.943.038-.852.048-1.123.048-3.297 0-2.174-.01-2.445-.048-3.297-.039-.853-.174-1.434-.372-1.944a5.05 5.05 0 0 0-1.2-1.833A5.05 5.05 0 0 0 13.24.42c-.509-.198-1.09-.333-1.943-.372C10.445.01 10.174 0 8 0Zm0 1.442c2.138 0 2.392.008 3.231.046.776.036 1.197.165 1.476.274.37.143.634.315.911.592.277.277.45.541.592.911.109.279.238.7.274 1.476.038.839.046 1.093.046 3.231 0 2.138-.008 2.392-.046 3.231-.036.776-.165 1.197-.274 1.476a3.609 3.609 0 0 1-.592.911 3.609 3.609 0 0 1-.911.592c-.279.109-.7.238-1.476.274-.839.038-1.093.046-3.231.046-2.138 0-2.392-.008-3.231-.046-.776-.036-1.197-.165-1.476-.274a3.609 3.609 0 0 1-.911-.592 3.609 3.609 0 0 1-.592-.911c-.109-.279-.238-.7-.274-1.476-.038-.839-.046-1.093-.046-3.231 0-2.138.008-2.392.046-3.231.036-.776.165-1.197.274-1.476.143-.37.315-.634.592-.911.277-.277.541-.45.911-.592.279-.109.7-.238 1.476-.274.839-.038 1.093-.046 3.231-.046Zm0 2.458A4.8 4.8 0 1 0 8 13.5 4.8 4.8 0 0 0 8 3.9Zm0 8.016A3.216 3.216 0 1 1 8 5.484a3.216 3.216 0 0 1 0 6.432Zm4.987-8.2a1.121 1.121 0 1 1-2.242 0 1.121 1.121 0 0 1 2.242 0Z" />
                            </svg>
                          </Link>
                          <Link
                            href="https://youtube.com/@jeeyo"
                            target="_blank"
                            aria-label="YouTube"
                            className="rounded-md border border-white/20 bg-white/5 p-2 text-gray-200 transition-colors hover:bg-white hover:text-black"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="size-4" fill="currentColor">
                              <path d="M8.051 1.999h-.102C3.655 1.999 2.267 2.335 1.45 3.15.633 3.967.298 5.355.298 8v.002c0 2.644.335 4.032 1.152 4.849.817.816 2.205 1.151 6.499 1.151h.102c4.294 0 5.682-.335 6.499-1.151.817-.817 1.152-2.205 1.152-4.849V8c0-2.645-.335-4.033-1.152-4.85-.817-.815-2.205-1.151-6.499-1.151ZM6.4 10.4V5.6L10.4 8 6.4 10.4Z" />
                            </svg>
                          </Link>
                          <Link
                            href="https://facebook.com/jiotheleo"
                            target="_blank"
                            aria-label="Facebook"
                            className="rounded-md border border-white/20 bg-white/5 p-2 text-gray-200 transition-colors hover:bg-white hover:text-black"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="size-4" fill="currentColor">
                              <path d="M16 8.049C16 3.603 12.418 0 8 0S0 3.603 0 8.049C0 12.067 2.925 15.398 6.75 16V10.377H4.719V8.049H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.875 0 1.79.157 1.79.157v1.98h-1.009c-.994 0-1.304.621-1.304 1.258v1.51h2.219l-.354 2.328H9.249V16C13.075 15.398 16 12.067 16 8.049Z" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-lg bg-white/5 p-3 border border-white/10 flex items-center justify-center gap-2">
                          <PaintBrushIcon className="w-5 h-5 text-gray-200" />
                          <p className="text-gray-200">Graphic Design</p>
                        </div>
                        <div className="rounded-lg bg-white/5 p-3 border border-white/10 flex items-center justify-center gap-2">
                          <CameraIcon className="w-5 h-5 text-gray-200" />
                          <p className="text-gray-200">Photography</p>
                        </div>
                        <div className="rounded-lg bg-white/5 p-3 border border-white/10 flex items-center justify-center gap-2">
                          <FilmIcon className="w-5 h-5 text-gray-200" />
                          <p className="text-gray-200">Video Editing</p>
                        </div>
                        <div className="rounded-lg bg-white/5 p-3 border border-white/10 flex items-center justify-center gap-2">
                          <MusicalNoteIcon className="w-5 h-5 text-gray-200" />
                          <p className="text-gray-200">Music</p>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                </TabPanels>
              </TabGroup>
            </div>
          </div>
        </section>

        <section id="skills" className="pt-80 h-dvh">
          <h2 className="text-3xl font-semibold mb-4">Skills</h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Here you can highlight your core technologies, tools, and strengths.
          </p>
        </section>

        <section id="projects" className="pt-80 h-dvh">
          <h2 className="text-3xl font-semibold mb-4">Projects</h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Showcase a few of your favorite projects with brief descriptions.
          </p>
        </section>

        <section id="contact" className="pt-80 h-dvh">
          <h2 className="text-3xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Provide your preferred contact methods or a call-to-action.
          </p>
        </section>
      </div>
    </>
  );
}
