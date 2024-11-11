import { useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import { AllRoutes } from './routes/AllRoutes';
import favicon from './assets/img/icon512/png/003-curriculum-vitae.png';

function App() {
  useEffect(() => {
    document.title = 'Portfolio';
  }, []);

  return (
    <div className="App">
      <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      {/* <AllRoutes /> */}
      <HashRouter>
        <AllRoutes />
      </HashRouter>
    </div>
  );
}

export default App;
