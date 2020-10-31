import React from "react";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import "./styles.css";
import ScrollAnimation from "react-animate-on-scroll";
const Projects = () => {
  return (
    <section className="projects">
      <div className="projects_left">
        <div className="heading">
          <hr />
          <h1>Our latest projects</h1>
        </div>
        <ScrollAnimation animateIn="animate__fadeInUp" animateOnce>
        <div className="projects_desc paragraph">
          <p>
            A paragraph is a series of sentences that are organized and
            coherent, and are all related to a single topic. Almost every piece
            of writing you do that is longer than a few sentences should be
            organized into paragraphs. This is because paragraphs show a reader
            where the subdivisions of an essay begin and end, thus help the
            reader see the organization of the essay and grasp its main points.
          </p>
        </div>
        </ScrollAnimation>
        <div className="paragraph__read-more">
          <ArrowRightAltIcon className="arrow"/>
          <p>View More</p>
        </div>
      </div>
      <div className="projects_right">
        {/* Use React slick here */}
      </div>
    </section>
  );
};

export default Projects;
