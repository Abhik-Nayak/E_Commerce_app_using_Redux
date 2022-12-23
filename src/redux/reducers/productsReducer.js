import {ActionTypes} from "../contants/action-types";

const initialState = {
    product:[
        {
            id:1,
            title: "Abhik",
            category: "developer",
        },
    ],
};
export const productReducer = (state, {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }

};