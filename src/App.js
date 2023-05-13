import Header from "./components/Header";
import About from "./container/About";
import Contact from "./container/Contact";
import Home from "./container/Home";
import AppRouter from "./routes/routes";

function App() {

  let data= 'yash'

  return (
    <div className="App">
      <AppRouter data={data}/>
    </div>
  );
}

export default App;
