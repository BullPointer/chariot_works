import { useEffect } from "react";
import { Navbar } from "../components";
import ContactForm from "../components/ContactForm";
import Footer from "../footer/Footer";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    document.title = window.location.pathname;

    setTimeout(() => {
      document.title = "Chariot Interior - Contact-us";
    }, 2000);
  }, []);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="w-full pt-24 px-10">
        <div className="text-3xl mb-5 text-[#222]">
          Get in touch with CHARIOT WORKS
        </div>
        <ul className="text-md mb-2 font-bold">
          <li className="text-[#21471c]">Lagos, NIGERIA</li>
          <li className="opacity-90">
            17 Unity Close, Unity Estate Iju-Ishaga.
          </li>
          <li className="opacity-90">+234 9039736215</li>
        </ul>
        <div className="text-lg">
          It gets better when you learn more about us. We would love to hear
          from you as much as you would, with us. Call us now on our office line
          or fill out the form below and we'll be in touch.
        </div>
        <ContactForm />
        <div className="text-sm py-5">
          Please note that we ensure 100% privacy! Your information will not be
          shared with third parties. If you are inquiries please email
          <b> chariotpopworks@gmail.com</b>.
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
