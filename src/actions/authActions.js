import axios from 'axios';
import {returnErrors} from './errorActions';
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS
} from './types'; 

export const loadUser = () => (dispatch, getState) => {
  //User loading
  dispatch({type: USER_LOADING});

  //Fetch user
  axios.get('/api/auth/user', tokenConfig(getState))
    .then(res => dispatch({
        type: USER_LOADED,
        payload: res.data
    }))
    .catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
            type: AUTH_ERROR
        });
});
}

//LOGIN USER
export const login = ({email, password}) => dispatch => {
    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    //Request body
    const body = JSON.stringify({email, password});

    axios
      .post('/api/auth', body, config)
      .then(res =>
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
        )
        .catch(err => {
            dispatch(
                returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
            );
            dispatch({
                type: LOGIN_FAIL
            });
        });
};

export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    };
};

//Setup config/headers and token
export const tokenConfig = getState => {
      //Get token from localstorage
  const token = getState().auth.token;

  //Add to headers
  const config = {
      headers: {
          "Content-type": "application/json"
      }
  }

  //If token, add to headers
  if(token) {
      config.headers['x-auth-token'] = token;
  }
  return config;
}