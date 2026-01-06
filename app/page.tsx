import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function BloomaLanding() {
  return (
    <main className="bg-[#FAF9F7] text-[#2F2F2F]">
      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
            Grow the life you envision.
          </h1>
          <p className="text-lg md:text-xl text-[#5F5F5F]">
            A sleek, beautiful vision board that helps you stay inspired — and track real progress on short- and long-term goals.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="rounded-2xl px-6 py-5 text-base">
              Start Your Blooma <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="rounded-2xl px-6 py-5 text-base">
              View Example Board
            </Button>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">Inspiration shouldn’t fade.</h2>
            <p className="text-[#5F5F5F]">
              Vision boards inspire — but they don’t evolve. Goal trackers organize — but they don’t motivate. Blooma brings them together.
            </p>
          </div>
          <div className="h-64 rounded-2xl bg-[#EFEDE9] shadow-inner" />
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { title: "Visual Vision Boards", desc: "Curate images, quotes, and ideas that reflect the life you’re growing." },
            { title: "Gentle Goal Tracking", desc: "Short- and long-term goals without streaks, pressure, or guilt." },
            { title: "Progress You Can Feel", desc: "Watch intentions quietly bloom into meaningful momentum." }
          ].map((f, i) => (
            <Card key={i} className="rounded-2xl shadow-sm bg-white">
              <CardContent className="p-8 space-y-2">
                <h3 className="text-xl font-semibold">{f.title}</h3>
                <p className="text-[#5F5F5F]">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
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

      {/* DIFFERENTIATOR SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-semibold">Built for calm consistency.</h2>
          <p className="text-[#5F5F5F]">
            No aggressive streaks. No productivity shame. No cluttered dashboards. Just clarity, intention, and growth.
          </p>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="rounded-2xl">
            <CardContent className="p-8 space-y-4">
              <h3 className="text-xl font-semibold">Free</h3>
              <ul className="text-[#5F5F5F] space-y-1">
                <li>• 1 vision board</li>
                <li>• Basic goal tracking</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-2 border-[#2F2F2F]">
            <CardContent className="p-8 space-y-4">
              <h3 className="text-xl font-semibold">Blooma Plus</h3>
              <ul className="text-[#5F5F5F] space-y-1">
                <li>• Unlimited boards</li>
                <li>• Progress history</li>
                <li>• Reflections & exports</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl font-semibold">Every bloom starts with a seed.</h2>
          <p className="text-[#5F5F5F] text-lg">Start growing the life you’ve been imagining.</p>
          <Button className="rounded-2xl px-8 py-6 text-lg">Create Your Blooma</Button>
        </div>
      </section>
    </main>
  );
}
