import { StyledTodo } from "./styles/Todo.styled";
import { StyledP } from "./styles/P.styled";
import { useSelector } from "react-redux";
import { selectAllTodos } from "../redux/todoSlice";
import { useSearchParams } from "react-router-dom";
import { Container } from "./styles/Container.styled";
import useTaskActions from "../customHooks/useTaskActions";

function Todo(props) {
  const [searchParams] = useSearchParams();
  const searchId = searchParams.get("userid");

  const [removeTask, finishTask] = useTaskActions();

  const todos = useSelector(selectAllTodos);
  const todosFiltered = todos.filter((todo) => {
    return todo.userId === parseInt(searchId);
  });

  return (
    <Container>
      {todosFiltered.map((todo) => (
        <StyledTodo key={todo.id} completed={todo.completed}>
          <StyledP>title : {todo.title}</StyledP>
          <StyledP>completed : {todo.completed.toString()}</StyledP>
          <StyledP>
            <button type="button" onClick={() => removeTask(todo.id)}>
              Remove Task
            </button>
          </StyledP>
          <StyledP>
            <button type="button" onClick={() => finishTask(todo)}>
              Finish Task
            </button>
          </StyledP>
        </StyledTodo>
      ))}
    </Container>
  );
}

export default Todo;
