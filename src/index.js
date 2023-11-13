import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const skills = [
  {
    skill: "HTML + CSS",
    level: "intermediate",
    color: "blue",
  },
  {
    skill: "Javascript",
    level: "beginner",
    color: "green",
  },
  {
    skill: "Git and Github",
    level: "beginner",
    color: "yellow",
  },
  {
    skill: "React",
    level: "advanced",
    color: "purple",
  },
  {
    skill: "Java",
    level: "intermediate",
    color: "Red",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar name="Bilde av Kristoffer" />
      <div className="data">
        <Intro
          name="Kristoffer Alves Brekke"
          text="Full-stack web dev and master student at Universitetet i Oslo. When not coding I play volleyball and enjoy house music"
        />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <div>
      <img className="avatar" src="ProfileBilde.jpg" alt={props.name} />
    </div>
  );
}

function Intro(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.text}</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} level={skill.level} color={skill.color} />
      ))}
    </div>
  );
}

function Skill({ skill, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <p>{skill}</p>
      <p>
        {level === "beginner" && "😅"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "❤️"}
      </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
