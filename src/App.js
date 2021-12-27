import { useContext } from 'react';
import ThemeContext from './context/themeContext';
import './App.css';
import Card from './components/Card/Card';
import Header from './components/Header/Header';

function App() {
  const {isDarkMode} = useContext(ThemeContext);

  return (
    <div className={`App ${isDarkMode ? "darkBody" : ""}`}>
      <Header/>
      <Card />
    </div>
  );
}

export default App;
