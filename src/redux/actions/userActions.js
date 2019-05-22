import jsonPlaceholder from '../../api/jsonPlaceHolder';
import {FETCH_USERS_SUCCESS} from "../constants";

export const getUsersSuccess = () => async (dispatch) => {
    const response = await jsonPlaceholder.get('/users');
    return dispatch({type: FETCH_USERS_SUCCESS, payload: response.data})
};