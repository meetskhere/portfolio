import { AllRoutes } from './routes/AllRoutes'
import { useEffect } from 'react';
import favicon from './assets/img/icon512/png/003-curriculum-vitae.png'

function App() {
  return (
    <div className="App">
      <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      {
        useEffect(() => {
          document.title = 'Portfolio';
        }, [])
      }

      <AllRoutes />
    </div>
  );
}

export default App;