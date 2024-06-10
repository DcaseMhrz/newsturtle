
import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'

function App() {
  const [progress, setProgress] = useState(0)
  return (<>
  <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
  <Router>
  <NavBar/>
  
  <Routes>
    
    <Route exact path="/" element={<News setProgress={setProgress} pageSize={6} key="general" language="en" apiKey="09919233fe744eca9eff843da40ce8c9" category="general"/>} />
    <Route exact path="/business" element={<News setProgress={setProgress} pageSize={6} key="business" language="en"   apiKey="09919233fe744eca9eff843da40ce8c9" category="business"/>} />
    <Route exact path="/entertainment" element={<News setProgress={setProgress} pageSize={6} key="entertainment" language="en"   apiKey="09919233fe744eca9eff843da40ce8c9" category="entertainment"/>} />
    <Route exact path="/health" element={<News setProgress={setProgress} pageSize={6} key="health" language="en"   apiKey="09919233fe744eca9eff843da40ce8c9" category="health"/>} />
    <Route exact path="/science" element={<News setProgress={setProgress} pageSize={6} key="science" language="en"   apiKey="09919233fe744eca9eff843da40ce8c9" category="science"/>} />
    <Route exact path="/sports" element={<News setProgress={setProgress} pageSize={6} key="sports" language="en"   apiKey="09919233fe744eca9eff843da40ce8c9" category="sports"/>} />
    <Route exact path="/technology" element={<News setProgress={setProgress} pageSize={6} key="technology" language="en"  apiKey="09919233fe744eca9eff843da40ce8c9" category="technology"/>} />
    
    </Routes>
    </Router>
    </>
  );
}

export default App;
