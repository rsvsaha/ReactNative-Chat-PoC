import { LoginActionTypes } from "../ActionTypes/LoginActionTypes"

const initialState = {
    userName:'default'
}


export const LoginReducer = (state=initialState,action) =>{

    switch(action.type) {

        case(LoginActionTypes.LOGIN_SUCCESSFUL):{

            return {
                ...state,
                userName:action.payload.userName
            };
        }
        default :{
            return state;
        }


    }

}