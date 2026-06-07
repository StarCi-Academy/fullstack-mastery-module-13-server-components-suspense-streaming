// EN: In Next.js the FILE PATH *is* the route — no router setup needed.
// EN: This file maps to the "/about" URL automatically, rendered on the server.
export default function AboutPage() {
  // EN: This component renders on the server by default.
  return <h1>About us</h1>;
}
