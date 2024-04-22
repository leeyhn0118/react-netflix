import Navbar from "../components/Navbar";
import { FaCode } from "react-icons/fa";
import { IoLogoWebComponent } from "react-icons/io5";

const ServicesPage = () => {
  return (
    <div>
      <Navbar />
      <div className="services-page">
        <h1>Services I Offer</h1>
        <div className="services-container">
          <div className="service">
            <FaCode size={70} />
            <h2>General Programming</h2>
            <p>With a strong background in multiple programming languages including JavaScript, TypeScript, C#, and Java, I offer versatile programming solutions.</p>
          </div>

          <div className="service">
            <IoLogoWebComponent size={70} />
            <h2>Full-Stack Web Development</h2>
            <p>Experienced in both front-end and back-end technologies, I can develop robust web applications tailored to your business needs.</p>
            {/* <img src="/path-to-full-stack-web-development-image.jpg" alt="Full-Stack Web Development" /> */}
          </div>
        </div>
      </div>

    </div>
  )
}

export default ServicesPage;
