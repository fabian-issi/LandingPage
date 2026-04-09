import React from "react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold tracking-widest">TECHFLOW</h1>
        <div className="space-x-6 hidden md:block">
          <a href="#features" className="hover:text-cyan-400">Features</a>
          <a href="#about" className="hover:text-cyan-400">About</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
        </div>
      </nav>
      {/* Hero */}
      <section className="text-center py-20 px-6">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
          Build the Future with <span className="text-cyan-400">AI</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          A modern platform to create, deploy and scale intelligent applications effortlessly.
        </p>
        <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-xl text-lg font-semibold shadow-lg">
          Get Started
        </button>
      </section>

      {/* Features */}
      <section id="features" className="py-20 max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-12">Features</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Fast API",
              desc: "Lightning-fast backend performance with modern architecture."
            },
            {
              title: "AI Powered",
              desc: "Integrate cutting-edge AI into your workflows."
            },
            {
              title: "Cloud Ready",
              desc: "Deploy instantly to scalable cloud environments."
            }
          ].map((f, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
              <h4 className="text-xl font-semibold mb-3 text-cyan-400">{f.title}</h4>
              <p className="text-gray-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-gray-900 px-6 text-center">
        <h3 className="text-3xl font-bold mb-6">About Us</h3>
        <p className="max-w-2xl mx-auto text-gray-300">
          We build next-generation tools that empower developers and businesses with scalable, AI-driven solutions.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 text-center">
        <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
        <p className="text-gray-300 mb-6">Have questions? Let's talk.</p>
        <button className="border border-cyan-400 px-6 py-2 rounded-xl hover:bg-cyan-400 hover:text-black transition">
          Contact Us
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500">
        © 2026 TechFlow. All rights reserved.
      </footer>
    </div>
  );
}
