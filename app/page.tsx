export default function Home() {
  return (
  <div className="container mx-auto space-y-32 text-center">
    <section id="home" className="pt-24">
    <h1 className="text-4xl font-bold mb-4">Welcome to Jio Delgado&apos;s Portfolio</h1>
    <p className="text-lg text-gray-200 max-w-2xl mx-auto">
      Explore my work, skills, and how to get in touch.
    </p>
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
