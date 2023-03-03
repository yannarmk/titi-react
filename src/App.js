import {Route, Routes} from 'react-router-dom';
import Template from './components/template/index';
import Home from './pages/pageHome/index';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Template/>}>
      <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
