const initialData = ([])

const todoReducers = (state = initialData, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const { data } = action.payload;
            return (
            
                [data,...state]
        
            )
        case "DELETE_TODO":
            const {id}=action.payload;
            return (
                state.filter((arrElement,index)=>{
                return index!=id;
            })
            )

        default: return state;
    }

}
export default todoReducers;