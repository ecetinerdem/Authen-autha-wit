import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import {
  Link,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom/cjs/react-router-dom.min';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <nav>
          <Link to="/">Ana Sayfa</Link>
          <Link to="/login">Login</Link>
          <Link to="/urunler">Ürünler</Link>
          <Link to="/urunler/2">Ürünler 2</Link>
          <Link to="/urunler/3">Ürünler 3</Link>
          <Link to="/urunler/4">Ürünler 4</Link>
        </nav>
      </header>

      <Switch>
        <Route path="/" exact>
          <h2>Ana Sayfa</h2>
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <PrivateRoute path="/urunler" exact>
          <h2>Ürünler</h2>
        </PrivateRoute>
        <PrivateRoute path="/urunler/2" exact>
          <h2>Ürünler 2</h2>
        </PrivateRoute>
        <PrivateRoute path="/urunler/3" exact>
          <h2>Ürünler 3</h2>
        </PrivateRoute>
        <PrivateRoute path="/urunler/4" exact>
          <h2>Ürünler 4</h2>
        </PrivateRoute>
        <PrivateRoute path="/urunler/5" exact>
          <h2>Ürünler 5</h2>
        </PrivateRoute>
      </Switch>
    </>
  );
}

export default App;
