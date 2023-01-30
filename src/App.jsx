import { useState } from "react";
import { useEffect } from 'react';
import './App.scss';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Extra from './components/Extra';
import Me from './components/Me';
import { CV } from './CV/CV';
import { setMe } from './redux/Me/Me.actions';
import { setAbout } from "./redux/About/About.actions";


function App() {
  const {education, experience, languages, habilities, volunteer, me} = CV;

  useEffect(() => {
    setMe(me);
  }, [me]);
  useEffect(() => {
    setAbout(me.about.info);
  }, [me.about.info]);

  const [show, setShow] = useState("");
  const menu = [
    {path: "education", name: "Educación", component: <Education education={education} />},
    {path: "experience", name: "Experiencia", component: <Experience experience={experience} />},
    {
      path: "extra",
      name: "Información extra",
      component: <Extra habilities={habilities} languages={languages} volunteer={volunteer} />,
  },
  ]

  return (
    <div className="App">
      <Me me={me}></Me>
      <About about={me.about}></About>
      <div>
        {menu.map((item) => (
          <button className="buttonsMenu" key={item.path} type="button" onClick={() => setShow(item.path)}>
            {item.name}
          </button>
        ))}
      </div>

        {menu.map(menuItem => {
        return menuItem.path === show ? menuItem.component : null
        })}
      
    </div>
  );
}



export default App;
