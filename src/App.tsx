import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from '@pages/Home';
import { Cleaning } from '@pages/Cleaning';
import { RoomProvider } from '@contexts/RoomContext';
import { Header } from '@layout/Header';

function App() {
  return (
    <>
      <Router>
        <Header />

        <div className="main-container py-5 sm:py-10">
          <RoomProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cleaning" element={<Cleaning />} />
            </Routes>
          </RoomProvider>
        </div>
      </Router>
    </>
  );
}

export default App;
