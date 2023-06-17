import './App.css';
import Video from './pages/Video'

function App() {
  return (
    <div className="App">
      <div className="app__video">
        <Video 
          likes={100}
          messages={200}
          shares={300}
          name="J.Alison"
          description="Brecker o goleiro"
          music="música épica"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
        />
        <Video 
          likes={100}
          messages={200}
          shares={300}
          name="J.Alison"
          description="Brecker o goleiro"
          music="música épica"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
        />
      </div>
    </div>
  );
}

export default App;
