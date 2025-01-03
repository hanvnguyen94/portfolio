import React from "react";

const Skills = () => {
  const skillsContent = [
    {
      id: 1,
      colClass: "left",
      title: "Programming Skills",
      progress: [
        {
          id: 1,
          skillName: "Java",
          skillValue: "70",
        },
        {
          id: 2,
          skillName: "JavaScript",
          skillValue: "80",
        },
        {
          id: 3,
          skillName: "React.js",
          skillValue: "80",
        },
        {
          id: 4,
          skillName: "Python",
          skillValue: "80",
        },
      ],
    },
    {
      id: 2,
      colClass: "right",
      title: "Language Skills",
      progress: [
        {
          id: 1,
          skillName: "English",
          skillValue: "90",
        },
        {
          id: 2,
          skillName: "Vietnamese",
          skillValue: "100",
        },
      ],
    },
  ];
  return (
    <>
      {skillsContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="section_title">
            <h3>{item.title}</h3>
          </div>

          <div className="progress">
            {item?.progress?.map((skill) => (
              <div
                className="progress_inner"
                data-value={item.skillValue}
                key={skill.id}
              >
                <span>
                  <span className="label">{skill?.skillName}</span>
                  <span className="number">{skill?.skillValue}%</span>
                </span>
                <div className="background">
                  <div className="bar">
                    <div
                      className="bar_in"
                      style={{ width: skill?.skillValue + "%" }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
