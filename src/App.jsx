
// import{BrowserRouter,Router,Route} from "react-router-dom"
// import HomePage from "./pages/homePage"
// import EditPage from "./pages/EditPage"
// import SinglePage from "./pages/SinglePage"
// import CreatePage from "./pages/CreatePage"
// function App() {
 

 
//     return (
//       <BrowserRouter>
//       <Router>
//         <Route path="/" element = {<HomePage/>}/>
//         <Route path="/single-page" element = {<SinglePage/>}/>
//         <Route path="/create-page" element = {<CreatePage/>}/>
//         <Route path="/edit-page" element = {<EditPage/>}/>
//         </Router>
//         </BrowserRouter>
//     )
   
  

// }
// export default App
import { BrowserRouter, Routes, Route } from "react-router-dom";

import EditPage from "./pages/EditPage";
import SinglePage from "./pages/SinglePage";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/homePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/single-page" element={<SinglePage />} />
        <Route path="/create-page" element={<CreatePage />} />
        <Route path="/edit-page" element={<EditPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import EditPage from "./pages/EditPage";
// import SinglePage from "./pages/SinglePage";
// import CreatePage from "./pages/CreatePage";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/single-page" element={<SinglePage />} />
//         <Route path="/create-page" element={<CreatePage />} />
//         <Route path="/edit-page" element={<EditPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
