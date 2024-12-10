import React from "react";
import rightarrow from "../../assets/img/svg/rightarrow.svg";

const KnowledgeInterest = () => {
  const knowledgeContent = [
    {
      id: 1,
      colClass: "left",
      title: "Knowledge",
      content: [
        " HTML, CSS",
        " JavaScript, React.js, Node.js",
        " Java, Python, Django",
        " MongoDB, MySQL",
      ],
    },
    {
      id: 2,
      colClass: "right",
      title: "Interests",
      content: [
        " Automation",
        " Create Video Games",
        " Utilize Java",
        " Custom Website",
      ],
    },
  ];

  return (
    <>
      {knowledgeContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="interest_section_title">
            <h3>{item.title}</h3>
          </div>
          <div className="skill_list">
            <ul>
              {item.content.map((val, i) => (
                <li key={i}>
                  <span>
                    <img className="svg" src={rightarrow} alt="arrow" />
                    {val}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default KnowledgeInterest;
