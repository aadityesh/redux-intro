import { useDispatch, useSelector } from 'react-redux';
import classes from './Auth.module.css';
import { authActions } from '../store/store';
import UserProfile from "./UserProfile.js"
const Auth = () => {
  const authStatus = useSelector(state => state.auth.status)
  const dispatch = useDispatch()
  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(authActions.login())
  }

  return (
    <main className={classes.auth}>
      <section>

        {!authStatus ?
          (<>
            <form >
              <div className={classes.control}>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' />
              </div>
              <div className={classes.control}>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' />
                <button onClick={handleLogin}>Login</button>
              </div>
            </form>
          </>) : (
            <UserProfile />
          )

        }

      </section>
    </main >
  );
};

export default Auth;
