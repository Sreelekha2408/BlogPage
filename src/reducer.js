const initialValues={
    array:[]
}
export default function reducer(initialValues=initialValues,action){
    switch(action){
        case "UPDATE":
            return {
                ...initialValues,
                array:action.payload
            }
        default:
            return initialValues
    }
}