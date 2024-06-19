import ContactForm from "@/components/ContactForm";
import About from "@/components/about";
import Experience from "@/components/experience";

export default async function Page() {
  return (
    <div className="">
      <About />
      <Experience />
      <ContactForm />
    </div>
  );
}
