export default function BloomaLanding() {
  return (
    <main style={{ fontFamily: "sans-serif", background: "#FAF9F7", color: "#2F2F2F" }}>
      
      {/* HERO */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "2rem" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>Grow the life you envision.</h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "600px", marginTop: "1rem" }}>
          A sleek, beautiful vision board that helps you stay inspired — and track real progress on short- and long-term goals.
        </p>
        <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
          <button style={{ padding: "1rem 2rem", borderRadius: "12px", background: "black", color: "white", border: "none", cursor: "pointer" }}>
            Start Your Blooma
          </button>
          <button style={{ padding: "1rem 2rem", borderRadius: "12px", background: "transparent", border: "2px solid #2F2F2F", cursor: "pointer" }}>
            View Example Board
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding: "4rem 2rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>Features</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.5rem" }}>
          <div style={{ background: "#fff", padding: "1.5rem", borderRadius: "12px", width: "250px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
            <h3 style={{ fontWeight: "bold" }}>Visual Vision Boards</h3>
            <p>Curate images, quotes, and ideas that reflect the life you’re growing.</p>
          </div>
          <div style={{ background: "#fff", padding: "1.5rem", borderRadius: "12px", width: "250px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
            <h3 style={{ fontWeight: "bold" }}>Gentle Goal Tracking</h3>
            <p>Short- and long-term goals without streaks, pressure, or guilt.</p>
          </div>
          <div style={{ background: "#fff", padding: "1.5rem", borderRadius: "12px", width: "250px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
            <h3 style={{ fontWeight: "bold" }}>Progress You Can Feel</h3>
            <p>Watch intentions quietly bloom into meaningful momentum.</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: "4rem 2rem", background: "#fff", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>How It Works</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem", marginTop: "2rem" }}>
          <div style={{ width: "250px" }}>
            <h3 style={{ fontWeight: "bold" }}>Create your vision</h3>
            <p>Build boards around what matters most to you.</p>
          </div>
          <div style={{ width: "250px" }}>
            <h3 style={{ fontWeight: "bold" }}>Plant your goals</h3>
            <p>Attach goals that support your vision.</p>
          </div>
          <div style={{ width: "250px" }}>
            <h3 style={{ fontWeight: "bold" }}>Nurture progress</h3>
            <p>Reflect weekly and watch growth unfold.</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: "4rem 2rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>Every bloom starts with a seed.</h2>
        <p style={{ marginTop: "1rem", maxWidth: "600px", margin: "1rem auto" }}>
          Start growing the life you’ve been imagining.
        </p>
        <button style={{ marginTop: "2rem", padding: "1rem 2rem", borderRadius: "12px", background: "black", color: "white", border: "none", cursor: "pointer" }}>
          Create Your Blooma
        </button>
      </section>
    </main>
  );
}
