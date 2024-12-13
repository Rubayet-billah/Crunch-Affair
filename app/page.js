import Contact from "@/components/home/Contact";
import OurJourney from "@/components/home/OurJourney";
import OurStores from "@/components/home/OurStores";
import SignatureDish from "@/components/home/SignatureDish";
import Speciality from "@/components/home/Speciality";
import Testimonials from "@/components/home/Testimonials";
import Footer from "@/components/shared/Footer";

export default function HomePage() {
  return (
    <main>
      <OurJourney />
      <SignatureDish />
      <Speciality />
      <OurStores />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
