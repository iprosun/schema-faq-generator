import logo from './logo.svg'
import './App.css'
import { ThemeProvider } from "@material-ui/core/styles"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./pages/home";
import ReviewSchemaGeneratior from "./pages/reviewSchemaGenerator";
import HtmlGenerator from "./pages/htmlGenerator";
import { Provider } from 'react-redux'
import Navbar from "./components/Navbar"

function App() {
  return (
    <ThemeProvider>
      {/* Add navigation material ui */}
      <Router>
      <Navbar />
        <div className="container">
          <Switch>
            <Route
            exact
            path="/"
            component={Home}
             />
             <Route
            exact
            path="/review-schema-generator"
            component={ReviewSchemaGeneratior}
             />
             <Route
            exact
            path="/faq-html-generator"
            component={HtmlGenerator} 
             />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
