import {
  useHistory,
  useLocation,
} from 'react-router-dom/cjs/react-router-dom.min';

export default function Login() {
  const history = useHistory();
  const location = useLocation();
  console.log(location);
  return (
    <>
      <button
        onClick={() => {
          localStorage.setItem('token', 'lkjdshflkasdjhf');
          history.push(location.state.referrer);
        }}
      >
        Log In
      </button>
      <button
        onClick={() => {
          localStorage.clear();
        }}
      >
        Log out
      </button>
    </>
  );
}
