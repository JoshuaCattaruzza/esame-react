import './App.css';
import Home from "./components/home";
import {
  HashRouter,
  Switch,
  Route
} from "react-router-dom";
import AddTodo from './components/AddTodo';
import store from "./components/store/store";
import {Provider} from "react-redux"
import { PersistGate } from 'redux-persist/integration/react'

//provider mi wrappa tutto gli elementi che codividono lo store
//switch e route mi permettono di render le rotte "navigabili"
function App() {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
          <HashRouter> 
      <Switch>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route exact path="/addtodo">
        <AddTodo></AddTodo>
        </Route>
      </Switch>
    </HashRouter>
    {/* </PersistGate> */}
    </Provider>

    
  );
}

export default App;
