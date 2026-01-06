Repository: blooma
├─ app
│  └─ page.tsx
├─ public
│  └─ icon.png
├─ package.json
├─ package-lock.json
└─ tailwind.config.js
import { ArrowRight } from "lucide-react";

export default function BloomaLanding() {
  return (
    <main className="bg-[#FAF9F7] text-[#2F2F2F]">
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
            Grow the life you envision.
          </h1>
          <p className="text-lg md:text-xl text-[#5F5F5F]">
            A sleek, beautiful vision board that helps you stay inspired — and track real progress on short- and long-term goals.
          </p>
          <div className="flex justify-center gap-4">
            <button className="rounded-2xl px-6 py-5 text-base bg-black text-white flex items-center justify-center gap-2">
              Start Your Blooma <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button className="rounded-2xl px-6 py-5 text-base border border-black">
              View Example Board
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { title: "Visual Vision Boards", desc: "Curate images, quotes, and ideas that reflect the life you’re growing." },
            { title: "Gentle Goal Tracking", desc: "Short- and long-term goals without streaks, pressure, or guilt." },
            { title: "Progress You Can Feel", desc: "Watch intentions quietly bloom into meaningful momentum." }
          ].map((f, i) => (
            <div key={i} className="rounded-2xl shadow-sm bg-white p-8 space-y-2">
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="text-[#5F5F5F]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          {["Create your vision", "Plant your goals", "Nurture progress"].map((step, i) => (
            <div key={i} className="space-y-3">
              <span className="text-sm uppercase tracking-wider text-[#8B8B8B]">Step {i + 1}</span>
              <h3 className="text-2xl font-semibold">{step}</h3>
              <p className="text-[#5F5F5F]">
                {i === 0 && "Build boards around what matters most to you."}
                {i === 1 && "Attach goals that support your vision."}
                {i === 2 && "Reflect weekly and watch growth unfold."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl font-semibold">Every bloom starts with a seed.</h2>
          <p className="text-[#5F5F5F] text-lg">Start growing the life you’ve been imagining.</p>
          <button className="rounded-2xl px-8 py-6 text-lg bg-black text-white">Create Your Blooma</button>
        </div>
      </section>
    </main>
  );
}
{
  "name": "blooma",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "13.5.0",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "lucide-react": "^0.290.0"
  }
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
};

