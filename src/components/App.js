import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from 'pages/index';

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    </>
  );
}

export default App;
