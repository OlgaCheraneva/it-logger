import {
    ADD_LOG,
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR,
    DELETE_LOG
} from '../actions/types';

const initialState = {
    logs: null,
    current: null,
    loading: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_LOG:
            return {
                ...state,
                logs: [...state.logs, action.payload],
                loading: false
            };
        case GET_LOGS:
            return {
                ...state,
                logs: action.payload,
                loading: false
            };
        case DELETE_LOG:
            return {
                ...state,
                logs: state.logs.filter((log) => log.id !== action.payload),
                loading: false
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case LOGS_ERROR:
            console.error(action.payload);
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};
