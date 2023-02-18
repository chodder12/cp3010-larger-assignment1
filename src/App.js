import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './NavBar';
import SubmitReviews from './pages/SubmitReviews';
import MovieReviewsListPage from './pages/MovieReviewsListPage';
import MovieReviews from './pages/MovieReviews';

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <NavBar/>
      <div id = "page-body">
      <Routes>

      <Route path="/SubmitReviews" element={<SubmitReviews/>} />
      <Route path="/MovieReviews" element={<MovieReviewsListPage/>} />
      <Route path="/MovieReviews/:MovieReviewID" element={<MovieReviews/>} />
      

      </Routes>
       

      </div>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
