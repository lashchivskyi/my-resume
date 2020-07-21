import React from "react";
import Header from "./components/header/Header";
import Greeting from "./containers/greeting/Greeting";
import Skills from "./containers/skills/Skills";
import StackProgress from "./containers/skillProgress/skillProgress";
import WorkExperience from "./containers/workExperience/WorkExperience";
import Education from "./containers/education/Education";
import Top from "./components/topbutton/Top";

function App() {
  return (
    <div className="App">
      <Header />
      <Greeting />
      <Skills />
      <StackProgress />
      <WorkExperience />
      <Education />
      <Top />
    </div>
  );
}

export default App;
