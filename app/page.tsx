import Link from 'next/link';

export default function Home() {
  return (
  <div className="container mx-auto space-y-32 text-center">
    <section id="home" className="pt-24">
    <h1 className="text-4xl font-bold mb-4">Jose Rafael Achilles L. Delgado</h1>
    <p className="text-md text-gray-300 max-w-2xl mx-auto my-2">
      Full-stack Web Developer | React, Next.js, Node.js, and more.
    </p>
    <div className="mt-2 flex justify-center gap-4">
      <Link
        href="/delgado-resume.pdf"
        className="rounded-md bg-white px-4 py-2 text-sm text-black inline-flex items-center gap-2"
        download
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
          <path d="M8.75 2.75a.75.75 0 0 0-1.5 0v5.69L5.03 6.22a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0-1.06-1.06L8.75 8.44V2.75Z" />
          <path d="M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z" />
        </svg>

        Download CV
      </Link>
      <Link
        href="https://github.com/realjeeyo"
        className="rounded-md bg-white px-4 py-2 text-sm inline-flex items-center gap-2 text-black"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
          <path d="M6.766 11.695C4.703 11.437 3.25 9.904 3.25 7.92c0-.806.281-1.677.75-2.258-.203-.532-.172-1.662.062-2.129.626-.081 1.469.258 1.969.726.594-.194 1.219-.291 1.985-.291.765 0 1.39.097 1.953.274.484-.451 1.343-.79 1.969-.709.218.435.25 1.564.046 2.113.5.613.766 1.436.766 2.274 0 1.984-1.453 3.485-3.547 3.759.531.355.891 1.129.891 2.016v1.678c0 .484.39.758.859.564C13.781 14.824 16 11.905 16 8.291 16 3.726 12.406 0 7.984 0 3.562 0 0 3.726 0 8.291c0 3.581 2.203 6.55 5.172 7.663A.595.595 0 0 0 6 15.389v-1.291c-.219.097-.5.162-.75.162-1.031 0-1.641-.581-2.078-1.662-.172-.435-.36-.693-.719-.742-.187-.016-.25-.097-.25-.193 0-.194.313-.339.625-.339.453 0 .844.29 1.25.887.313.468.641.678 1.031.678.391 0 .641-.146 1-.516.266-.275.469-.517.657-.678Z"></path>
        </svg>
        GitHub
      </Link>
      <Link
        href="https://linkedin.com/in/jiodelgado"
        className="rounded-md bg-white px-4 py-2 text-sm inline-flex items-center gap-2 text-black"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
        </svg>
        LinkedIn
      </Link>
    </div>
    </section>

    <section id="about" className="pt-24">
    <h2 className="text-3xl font-semibold mb-4">About Me</h2>
    <p className="text-gray-200 max-w-2xl mx-auto">
      I&apos;m a passionate web developer focused on building beautiful,
      user-friendly digital experiences.
    </p>
    </section>

    <section id="skills" className="pt-24">
    <h2 className="text-3xl font-semibold mb-4">Skills</h2>
    <p className="text-gray-200 max-w-2xl mx-auto">
      Here you can highlight your core technologies, tools, and strengths.
    </p>
    </section>

    <section id="projects" className="pt-24">
    <h2 className="text-3xl font-semibold mb-4">Projects</h2>
    <p className="text-gray-200 max-w-2xl mx-auto">
      Showcase a few of your favorite projects with brief descriptions.
    </p>
    </section>

    <section id="contact" className="pt-24 mb-16">
    <h2 className="text-3xl font-semibold mb-4">Contact</h2>
    <p className="text-gray-200 max-w-2xl mx-auto">
      Provide your preferred contact methods or a call-to-action.
    </p>
    </section>
  </div>
  );
}
