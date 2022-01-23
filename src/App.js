import './App.css';
import TopBar from './components/TopBar'
import Background from './components/Background'
import StoreLists from './components/StoreLists'


function App() {
  return (
    <div className="App">
      <TopBar/>
      <Background/>
      <StoreLists/>
    </div>
  );
}

export default App;
