import MyImage from "../assets/Photo.jpg";
import MyResume from "../assets/Resume.pdf";
import Navbar from "../components/Navbar";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <div className="about-page">
        <h1>Young Hun Lee</h1>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <img src={MyImage} alt="YoungHun" height={"300px"} width={"250px"} />
          <div style={{ marginTop: "20px" }}>
            <a href={MyResume} className="btn btn-primary" download >Download Resume</a>
          </div>
        </div>
        <p>Hi, I'm Young Hun, a Software Developer.
          <br />
          <br />
          I’m experienced in
          <br />
          - C# - 2 years<br />
          <br />
          <br />
          Some things I like
          <br />
          - Pizza <br />
          - Tennis <br />
          - Cats <br />
        </p>

        <div class="skills">
          <h2>Professional Skills</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div className="card">C#</div>
            <div className="card">JavaScript (JS)</div>
            <div className="card">Java</div>
            <div className="card">Node.js</div>
            <div className="card">React</div>
            <div className="card">Git</div>
          </div>
        </div>
        <div className="tools">
          <h2>Tools I Use</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div className="card">Visual Studio</div>
            <div className="card">Jira</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;