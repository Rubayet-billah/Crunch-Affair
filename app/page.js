import OurJourney from "@/components/home/OurJourney";
import OurStores from "@/components/home/OurStores";
import SignatureDish from "@/components/home/SignatureDish";
import Speciality from "@/components/home/Speciality";

export default function HomePage() {
  return (
    <main>
      <OurJourney />
      <SignatureDish />
      <Speciality />
      <OurStores />
    </main>
  );
}
