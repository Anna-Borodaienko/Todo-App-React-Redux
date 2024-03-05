import React from "react";
import { StyledButton } from "./ToggleAllButtom.styled";
import { useDispatch, useSelector } from "react-redux";
import { toggleAllTodos } from "../../store/todoSlice";

const ToggleAllButton: React.FC = (): JSX.Element => {
  const dispatch = useDispatch()
  const state = useSelector((state: any) => state.todos.todos)

  return (
    <StyledButton
      active={state.some((todo: any) => todo.completed === false)}
      data-cy="ToggleAllButton"
      type="button"
      aria-label="Toggle Button"
      onClick={() => dispatch(toggleAllTodos())}
    >
      ❯
    </StyledButton>
  );
  };

  export default ToggleAllButton
