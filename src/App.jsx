import { BrowserRouter } from "react-router-dom";
import { Routing } from "./routes/Routes";
import "./scss/App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
};

export default App;
