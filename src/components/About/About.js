import "./About.css";
import AboutImage from "../../images/AboutImage.png";

const About = () => {
  return (
    <section className="about" id="about-section">
      <div className="about__container">
        <img src={AboutImage} className="about__image" alt="Author" />
        <div className="about__text">
          <h2 className="about__text-author">About the author</h2>
          <p className="about__text-bio">
            Hello there! I'm Liz Tice, a software developer specializing in a
            diverse array of technologies including Javascript, AWS, SQL, React,
            Node.js, Express.js, HTML, CSS, MongoDB, and Google Cloud.
            <br></br>
            <br></br>
            Over the past year, I was enrolled in a bootcamp with TripleTen,
            where I learned and gained experience as software engineer. I had
            the opporunity to build and complete several projects focusing on
            creating seamless user experiences with React or architecting
            scalable backend systems. Which lead me here to creating my final
            project as a full stack application!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
