import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import { authActions } from '../store/store';

const Header = () => {
  const authStatus = useSelector(state => state.auth.status)
  const dispatch = useDispatch()
  const handleLogin = () => {
    dispatch(authActions.login())
  }
  const handleLogOut = () => {
    dispatch(authActions.logOut())
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {!authStatus ? (
          <>
            <button onClick={handleLogin}>Login</button>
          </>
        ) : (
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={handleLogOut}>Logout</button>
            </li>
          </ul>)}
      </nav>
    </header>
  );
};

export default Header;
