import { connect } from 'react-redux';
import TodoList from '../components/TodoList/TodoList';
const mapStateToProps = (state) => ({todoList: state});
export default connect(mapStateToProps)(TodoList);