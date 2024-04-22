import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import DesktopLogo from "../assets/Main.jpeg";

const HomePage = () => {

  return (
    <div>
      <Navbar />
      <div className="home-page">
        <header className="hero-section">
          <div style={{ flex: 1 }}>
            <h1>Young Hun Lee</h1>
            <h2>Software Developer</h2>
            <p>Aspiring to create impactful software solutions, I am committed to continuous learning and collaboration. I strive to deliver high-quality projects that drive progress and innovation.</p>
            <Link to="/about" className="btn btn-primary">About Me</Link>
          </div>
          <div>
            <img src={DesktopLogo} />
          </div>
        </header>
      </div>

    </div>
  )
}

export default HomePage;