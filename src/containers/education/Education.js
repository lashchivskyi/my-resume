import React from "react";
import "./Education.css";
import EducationCard from "../../components/experienceCard/ExperienceCard";
import { education } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Education() {
  if (education.viewExperiences) {
    return (
      <div id="education">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Education</h1>
              <div className="experience-cards-div">
                {education.experience.map((card) => {
                  return (
                    <EducationCard
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        date: card.date,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets,
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <h3
            id="achievements"
            style={{
              color: "red",
              textAlign: "center",
              padding: "30px 0px 30px 0px",
            }}
          >
            "to be continued......... :-)"
          </h3>
          <h4
            id="contact"
            style={{
              color: "red",
              textAlign: "center",
              padding: "30px 0px 30px 0px",
            }}
          >
            "to be continued......... :-)"
          </h4>
        </Fade>
      </div>
    );
  }
  return null;
}
