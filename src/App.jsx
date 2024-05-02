import {useState,useEffect} from 'react';
import  {BrowserRouter as Router,Route,Routes }from "react-router-dom";
import Home from "./Pages/Home/Home"
import Courses from "./Pages/Courses/Courses"
import AllMentors from "./Pages/AllMentors/AllMentors"
import NotFound from "./Pages/NotFound/NotFound"
import Login from "./modals/Login/login"
import SignUp from "./modals/SignUp/signup"
import Academics from "./Pages/Academics/Academics"
import Skills from "./Pages/Skills/Skills"
import CourseStructure from './Pages/CourseStructure/CourseStructure';
import Cse from './Pages/Academics/CSE/Cse';
import Cce from './Pages/Academics/CCE/Cce';
import Ece from './Pages/Academics/ECE/Ece';

import "./App.css"

const App = () =>{

  return (
    <>
    <Router>
      <Routes>
        <Route path='/signup' element= {<SignUp />}/>
        <Route path="/login" element={<Login />} />
        <Route path ="/" element={<Home />}/>
        <Route path="/courses" element={<Courses />}/>
        <Route path="/mentors" element={<AllMentors />}/>
        <Route path="/academics" element={<Academics />}/>
        <Route path="/academics/CSE" element={<Cse />}/>
        <Route path="/academics/CCE" element={<Cce />}/>
        <Route path="/academics/ECE" element={<Ece />}/>
        <Route path="/skills" element={<Skills />}/>
        <Route path="/course/:coursename" element={<CourseStructure />} />
        <Route path="*" element={<NotFound />}/>

      </Routes>
    </Router>
      <div>
        <h1>Radhe Radhe mitron</h1>
      </div>
    </>
  )
}

export default App