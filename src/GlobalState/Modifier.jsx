

export  default (state , action) => {
    switch(action.type){
        case 'DELETE':
            const deleteData = state.data.filter(data=> data.id !== action.payload);
            return {
                ...state,
                data: deleteData
        }

        case 'ADD' :
            
            return{
                ...state,
                data : [action.payload , ...state.data],
            }
        
        case 'UPDATE' :
            
            return{
                ...state,
                data: state.data.map((item) =>
                    item.id === action.payload.id ? action.payload : item,
                    console.log(state)
                ),
                
            }
          

        default :
            return state;
    }
}
