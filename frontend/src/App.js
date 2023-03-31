import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashborad } from './Dashborad';
function App() {
  return (
    <>
      <BrowserRouter>
        <>
          <Routes>
            <Route path="/" element={<Dashborad />} />
          </Routes>
        </>
      </BrowserRouter>
    </>
  );
}

export default App;
