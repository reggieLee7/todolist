import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions/index'
const todoList = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, {
                id: state.length + 1,
                text: action.text,
                isFinished: false
            }]
        case TOGGLE_TODO:
            return state.map(item => { if (item.id === action.id) { item.isFinished = !item.isFinished; }; return item });
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.id)
        default:
            return state;
    }
}
export default todoList;