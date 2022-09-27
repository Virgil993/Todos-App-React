import { StyledP } from "./styles/P.styled";
import { Container } from "./styles/Container.styled";
import { StyledAddTodo } from "./styles/AddTodo.styled";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addTodoAPI } from "../redux/todoSlice";

function AddTodo(props) {
  const [searchParams] = useSearchParams();
  const searchId = searchParams.get("userid");

  const [value, setValue] = useState();

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    const payload = {
      userid: parseInt(searchId),
      id: Date.now(),
      text: value,
    };
    dispatch(addTodoAPI(payload));
  };

  return (
    <Container>
      <StyledAddTodo>
        <StyledP>Please insert the title of your new task</StyledP>
        <form onSubmit={onSubmit}>
          <label>Title </label>
          <input
            type="text"
            placeholder="write here"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          ></input>
          <button type="submit">Submit</button>
        </form>
      </StyledAddTodo>
    </Container>
  );
}

export default AddTodo;
