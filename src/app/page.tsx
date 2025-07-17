// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import MusicClips from "./music-clips";
import Posts from "./posts";
import Articles from "./articles";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <MusicClips />
      <Posts />
      <Articles />
      <Footer />
    </>
  );
}
