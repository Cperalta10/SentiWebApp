// components
import { Navbar, Footer } from '@/components';

// sections
import Hero from './bio';
import MusicClips from './music-clips';
import Posts from './shop';
import Articles from './tour';

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
