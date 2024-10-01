import { Redirect, Route } from 'react-router-dom/cjs/react-router-dom.min';

export default function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem('token') ? (
          children
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { referrer: location } }}
          />
        )
      }
    />
  );
}
