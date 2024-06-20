import React from "react";
import "./About.css";

export default function About() {
  const userExperience = [
    {
      dates: {
        from: {
          month: "October",
          year: "2019",
        },
        till: {
          month: null,
          year: null,
        },
      },
      _id: "665f2d5a3006372a00b225d2",
      companyName: "Unispade.com",
      companyLogo:
        "https://s3.us-west-000.backblazeb2.com/proxycurl/company/unispadetechnologies/profile?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=0004d7f56a0400b0000000001%2F20240604%2Fus-west-000%2Fs3%2Faws4_request&X-Amz-Date=20240604T150605Z&X-Amz-Expires=1800&X-Amz-SignedHeaders=host&X-Amz-Signature=45d2a841fba6bf24d8f96fd2dd84e06401a6621c65165a57a1f22c7d4f522e68",
      companyWebsite: "https://www.linkedin.com/company/unispadetechnologies",
      role: "Software Engineer",
      description:
        "At Unispade Technologies, I have been actively involved in driving the company's success and contributing to its growth. As a key member of the team, I have played a pivotal role in leading web development projects using the Agile framework and the MERN stack. With a focus on efficient task management and AWS deployment, I have successfully delivered high-quality solutions.\n\nAs the Software Engineer, I have been responsible for overseeing the technical department and leading the web development team. As a Scrum Master, I have fostered a collaborative environment and ensured the timely delivery of projects. Leveraging my expertise in AWS, database management, and architecture design, I have been instrumental in creating and deploying complex multi-tiered systems.\n\nAdditionally, I have contributed to Unispade's recognition as one of the 10 Best AdTech Startups in India by StartupCity, Bangalore. This accomplishment highlights our commitment to innovation and excellence in the industry.\n\nIn my leadership role at Unispade Technologies, I prioritize fostering a culture of continuous learning and growth. I empower my team by providing opportunities for skill development, encouraging ownership, and supporting their professional growth. Through open communication and collaboration, I foster a cohesive and motivated team. By leading by example, I inspire individuals to push boundaries and excel. Together, we create an environment where innovation thrives and everyone feels valued and motivated to contribute their best.",
      isMarketingAgency: null,
    },
    {
      dates: {
        from: {
          month: "May",
          year: "2022",
        },
        till: {
          month: "December",
          year: "2022",
        },
      },
      _id: "665f2d5a3006372a00b225d3",
      companyName: "FutureXSkills",
      companyLogo: null,
      companyWebsite: null,
      role: "System Engineer",
      description:
        "During my time at FutureXSkills, I made significant contributions to the company's growth and success. As a System Engineer, I played a vital role in capturing new offline markets by developing effective strategies and implementing them with the support of a collaborative team. Additionally, I took the lead in creating a responsive website for a new venture, enhancing the company's online presence and attracting a wider audience.\n\nWorking at FutureXSkills provided me with valuable experience in project management, problem-solving, and effective communication. I thrived in the dynamic environment, leveraging my technical skills and creativity to drive impactful solutions.\n\nI am grateful for the opportunity to have been part of the FutureXSkills team and look forward to applying my skills and experience to new challenges. Let's connect and explore how we can collaborate to achieve remarkable results.",
      isMarketingAgency: null,
    },
  ];
  return (
    <div className="userProfileAbout">
      {userExperience?.map((experience) => {
        return (
          <div className="eachCompanyExperience">
            <div className="companyLogoContainer" style={{display : "inline"}}>
              <img
                src={experience?.companyLogo}
                alt=""
                style={{
                  width: "40px",
                  height: "40px",
                  display: "inline",
                  borderRadius: "50%",
                }}
              />
            </div>

            <div className="writtenExperience">
              <div className="experience-item-header">
                <div className="experience-item-title">{experience?.role}</div>
                <div className="experience-item-company">
                  {experience?.companyName}
                </div>
                <div className="experience-item-duration">
                  {experience?.dates?.from?.month}{" "}
                  {experience?.dates?.from?.year} -{" "}
                  {experience?.dates?.till?.month}{" "}
                  {experience?.dates?.till?.year}
                </div>
              </div>
              <div className="experience-item-description">
                <p>{experience?.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
