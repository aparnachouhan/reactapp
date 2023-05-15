import Header from "./components/Header";
import About from "./container/About";
import Contact from "./container/auth/Login";
import Home from "./container/Home";
import 'react-loading-skeleton/dist/skeleton.css'

import AppRouter from "./routes/routes";

function App() {


  return (
    <div className="App">
      <AppRouter/>
    </div>
  );
}

export default App;
