const initialData=
{
    loading:false
};

export const alertsReducer=(state=initialData,action)=> //a;ersreducer for loading
{
    switch(action.type)
    {
        case 'LOADING':
        {
            return{
                ...state,
                loading : action.payload
            }
        }
        default:return state
    }
}