import logo from './logo.svg'
import './App.css'
import { ThemeProvider } from "@material-ui/core/styles"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./pages/home";
import HtmlGenerator from "./pages/htmlGenerator";
import { Provider } from 'react-redux'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="container">
          <Switch>
            <Route ex
            exact
            path="/"
            component={Home}
             />
             <Route ex
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
