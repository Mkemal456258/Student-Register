import { Alert } from 'react-native';
import {Actions} from 'react-native-router-flux';
import auth from '@react-native-firebase/auth';
import {EMAİL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER,
    LOGIN_USER_SUCCES,
    LOGIN_USER_FAİL
} from './types';

export const emailChanged = (email) => {
    return (dispatch) => {
        dispatch({
            type: EMAİL_CHANGED,
            payload: email
        });
    };
};

export const passwordChanged = (password) => {
    return (dispatch) => {
        dispatch({
            type: PASSWORD_CHANGED,
            payload: password
        });
    };
};

export const loginUser = ({email, password}) => {
    return(dispatch) => {
        dispatch({type: LOGIN_USER});
        if(email === '' || password === '') {
            Alert.alert(
                'Mesaj',
                'Her iki alanda Dolu olmalı!',
                [
                    {text:'Tamam', onPress: ()=> null}
                ]
            );
        }else{
        auth().signInWithEmailAndPassword(email, password)
  .then(user => loginSucces(dispatch, user))
  .catch(() =>{
      auth().createUserWithEmailAndPassword(email,password)
      .then(user => loginSucces(dispatch, user))
      .catch(() => login_fail());
        });
    }
    };
};

const login_fail = (dispatch) =>{
    Alert.alert(
        'Mesaj',
        'Her iki alanda Dolu olmalı!',
        [
            {text:'Tamam', onPress: ()=> null}
        ]
    );
    dispatch ({
        type: LOGIN_USER_FAİL
    });
};
const loginSucces = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCES,
        payload: user
    });
    Actions.Main();
};