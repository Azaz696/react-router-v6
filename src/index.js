import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useParams,
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/myapps" element={<Navigate replace to="/learn" />} />
      <Route path="/learn" element={<Learn />}>
        <Route path="courses" element={<Courses />}>
          <Route path=":courseid" element={<CourseID />} />
        </Route>
        <Route path="bundles" element={<Bundles />} />
      </Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
    </Routes>
  </Router>,
  document.getElementById("root")
);

reportWebVitals();

function Home() {
  return (
    <div className="home">
      <h1>Home Route</h1>
    </div>
  );
}
function Learn() {
  return (
    <div className="learn">
      <h1>Learn</h1>
      <h4>All courses are listed here</h4>
      <Link className="btn btn-primary" to="/learn/courses">
        Courses
      </Link>{" "}
      <Link className="btn btn-success" to="/learn/bundles">
        Bundles
      </Link>
      <Outlet />
    </div>
  );
}
function Courses() {
  const courseList = ["NodeJS", "ReactJS", "Vue", "Python", "Django", "Spring"];
  const randomCourseName =
    courseList[Math.floor(Math.random() * courseList.length)];
  return (
    <div className="Courses">
      <h1>Courses list</h1>
      <h4>Courses Cards</h4>
      <p>More Test</p>
      <NavLink
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? "yellow" : "lightgreen",
          };
        }}
        to={`/learn/courses/${randomCourseName}`}
      >
        {randomCourseName}
      </NavLink>
      <NavLink className="btn btn-light" to={`/learn/courses/tests`}>
        tests
      </NavLink>
      <Outlet />
    </div>
  );
}
function Bundles() {
  return (
    <div className="Bundles">
      <h1>Bundles List</h1>
      <h4>Bundles Cards</h4>
    </div>
  );
}
function CourseID() {
  const navigate = useNavigate();
  const { courseid } = useParams();
  return (
    <div className="courseid">
      <h1>Use Params is : {courseid}</h1>
      <button
        onClick={() => {
          navigate("/dashboard", { state: courseid });
        }}
        className="btn btn-warning"
      >
        Price
      </button>
      <Link to="/dashboard" state={"Physics"}>
        Test Link
      </Link>
    </div>
  );
}
function Dashboard() {
  const location = useLocation();
  return (
    <div className="Bundles">
      <h1>Info that I got {location.state}</h1>
    </div>
  );
}
