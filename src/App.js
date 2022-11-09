import './App.css';
import MainDisplay from './Components/MainDisplay';

function App() {
  return (
    <div className="App subpixel-anitialized leading-2 bg-zinc-800 h-full text-neutral-200 font-mono">
     <h1 className='text-3xl'>Ozymandias Book Reviewer</h1>
      <MainDisplay />
    </div>
  );
}

export default App;
