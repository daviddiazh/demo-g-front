import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import PublicLayout from './layout/PublicLayout';
import PrivateLayout from './layout/PrivateLayout';
import HomePage from "./pages/public/HomePage";
import ProjectsPagePrivate from "./pages/private/ProjectsPagePrivate";
import OneProjectPagePrivate from "./pages/private/OneProjectPagePrivate";
import CreateProject from "./pages/private/CreateProject";
import MyProjects from "./pages/private/MyProjects"
import HomePrivate from './pages/private/HomePrivate';
import MyProfile from "./pages/private/MyProfile"
import ProjectCreated from "./pages/private/ProjectCreated"
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicLayout/>}>
            <Route path="" element={<HomePage/>}/>
          </Route>
          <Route path="/private" element={<PrivateLayout/>}>
            <Route path="ProjectsPage" element={<ProjectsPagePrivate/>}/>
            <Route path="Project/:id" element={<OneProjectPagePrivate/>}/>
            <Route path="CreateProject" element={<CreateProject/>}/>
            <Route path="MyProjects" element={<MyProjects/>}/>
            <Route path="HomePrivate" element={<HomePrivate/>}/>
            <Route path="MyProfile" element={<MyProfile/>}/>
            <Route path="ProjectCreated" element={<ProjectCreated/>}/>
          </Route>
        <Route path="*" component={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
