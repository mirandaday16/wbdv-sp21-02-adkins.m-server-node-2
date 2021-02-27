import CourseManager from "./components/course-manager";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <CourseManager/>
      </BrowserRouter>
  );
}

export default App;
