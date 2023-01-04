
import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (<>
  <Router>
  <NavBar/>
  <Routes>
    
    <Route exact path="/" element={<News pageSize={6} key="general" country="au" apiKey="09919233fe744eca9eff843da40ce8c9" category="general"/>} />
    <Route exact path="/business" element={<News pageSize={6} key="business" country="au" apiKey="09919233fe744eca9eff843da40ce8c9" category="business"/>} />
    <Route exact path="/entertainment" element={<News pageSize={6} key="entertainment" country="au" apiKey="09919233fe744eca9eff843da40ce8c9" category="entertainment"/>} />
    <Route exact path="/health" element={<News pageSize={6} key="health" country="au" apiKey="09919233fe744eca9eff843da40ce8c9" category="health"/>} />
    <Route exact path="/science" element={<News pageSize={6} key="science" country="au" apiKey="09919233fe744eca9eff843da40ce8c9" category="science"/>} />
    <Route exact path="/sports" element={<News pageSize={6} key="sports" country="au" apiKey="09919233fe744eca9eff843da40ce8c9" category="sports"/>} />
    <Route exact path="/technology" element={<News pageSize={6} key="technology" country="au" apiKey="09919233fe744eca9eff843da40ce8c9" category="technology"/>} />
    
    </Routes>
    </Router>
    </>
  );
}

export default App;
