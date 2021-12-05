// import './App.css';

// import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// function App() {
//   return (
//     <Router>
//     {/* <div>
//       <Link to="/">Home</Link>
//     </div>
//     <div>
//       <Link to="/blogs">Blog Articles</Link>
//     </div>
//     <div>
//       <Link to="/contact">Contact Me</Link>
//     </div>

//     <hr /> */}

//     <Switch>
//       <Route exact path="/">
//         <Login />
//       </Route>
//       {/* <Route path="/blogs">
//         <Blogs />
//       </Route>
//       <Route path="/contact">
//         <Contact />
//       </Route> */}
//     </Switch>
//   </Router>
//   );
// }

// ReactDOM.render(<App />, document.getElementById("root"));

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/login'
import Home from './components/home'

import './App.css';
import './css/style.css'
import './plugins/bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div style={{overflowX:"hidden"}}>
      <Router>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/home" exact element={<Home />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;