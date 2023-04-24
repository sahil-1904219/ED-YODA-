import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Mainhome from "./components/Home/Mainhome";
import ModuleQuiz from "./components/Module/ModuleQuiz";
import ModulePython from "./components/Module/ModulePython";
import ModuleAssignment from "./components/Module/ModuleAssignment";
import Instructor from "./components/Instructor";

import React from "react";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Navbar /> */}
        <Route path="/" element={<Mainhome />} />
        <Route path="/ModulePython" element={<ModulePython />} />
        <Route path="/ModuleQuiz" element={<ModuleQuiz />} />
        <Route path="/ModuleAssignment" element={<ModuleAssignment />} />
        <Route path="/Instructor" element={<Instructor />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// import React, { useState } from "react";
// // import Sidebar from './Sidebar';
// // import Page1 from './Page1';
// // import Page2 from './Page2';
// // import Page3 from './Page3';
// import Navbar from "./components/Navbar/Navbar";
// import Module from "./components/Module/Module";
// import Home from "./components/Home/Home";

// function App() {
//   const [currentPage, setCurrentPage] = useState("Navbar");

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const renderPage = () => {
//     switch (currentPage) {
//       case "Home":
//         return <Home />;
//       case "Module":
//         return <Module />;
//       // case 'page3':
//       //   return <Page3 />;
//       // default:
//       //   return <Navbar />;
//     }
//   };

//   return (
//     <div className="App">
//       <Navbar handlePageChange={handlePageChange} />
//       {renderPage()}
//     </div>
//   );
// }

// export default App;
