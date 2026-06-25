import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import CourseList from './components/CourseList/CourseList';
import Curriculum from './components/Curriculum/Curriculum';
import Video from './components/Video/Video';
import IntoCard from './components/IntoCard/IntoCard';
import TeamSection from './components/TeamSection/TeamSection';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Video/>
        <IntoCard/>
        <CourseList />
        <Curriculum />
        <CourseList />
        <CourseList />
        <CourseList />
        <TeamSection />
      </main>
    </div>
  );
}

export default App;
