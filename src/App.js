
import './App.css';
import Header from './Header';
import RecommendedVideos from './RecommendedVideos';
import Sidebar from './Sidebar';
import { BrowserRouter as Router ,Switch,Route} from "react-router-dom"
import SearchPage from './SearchPage';

function App() {
  return (
    <div className="App">
      <Router>
      
      <Switch>
        <Route path="/search">
       <div className="app_page">
      
      
       <Sidebar/>
       <SearchPage/>
       </div>
       
          </Route>
          <Route path="/">
          <Header/>
       <div className="app_page">
         <Sidebar/>
         <RecommendedVideos/>
       </div>
          </Route>
      </Switch>
      </Router>
       
    </div>
  );
}

export default App;
