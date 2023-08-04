 import { INCREMENT,DECREMENT} from "../connect";


export const plus= () => ({
        type: INCREMENT
})
export const decrement = () => ({
        type: DECREMENT
})