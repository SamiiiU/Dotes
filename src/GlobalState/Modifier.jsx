const Modifier = (state, action) => {
    switch (action.type) {
        case 'DELETE':
            return {
                ...state,
                data: state.data.filter(item => item.id !== action.payload)
            };

        case 'ADD':
            return {
                ...state,
                data: [action.payload, ...state.data]
            };

        case 'UPDATE':
            return {
                ...state,
                data: state.data.map(item => 
                    item.id === action.payload.id ? { ...item, ...action.payload } : item
                )
            };

        default:
            return state;
    }
};

export default Modifier;
