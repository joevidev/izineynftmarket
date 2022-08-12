
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import { Provider } from 'react-redux';
import store from './store';

import Home from './containers/pages/Home';
import Create from './containers/pages/Create';
import Docs from "./containers/pages/Docs";
import Explore from "./containers/pages/Explore";
import Error404 from './containers/errors/Error404';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Error Display */}
          <Route path="*" element={<Error404 />} />

          <Route exact path="/" element={<Home />} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/explore" element={<Explore />} />
          <Route exact path="/docs" element={<Docs />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
