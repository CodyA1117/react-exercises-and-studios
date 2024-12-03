import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList.jsx';
import ChoresList from './components/ChoresList.jsx';
import BookList from './components/BookList.jsx';
import HobbyLinks from './components/HobbyLinks.jsx';

function App() {
  return (
    <div className="App">

      <HobbyLinks/>
      <MovieList />
      <ChoresList />
      <BookList />
    
    </div>
  );
}

export default App;
