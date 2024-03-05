import React from "react";
import { useInput } from "../../hooks/useInput";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todoSlice";
import { InputWrapper } from "./AddTodoInput.styled";

export const AddTodoInput: React.FC = (): JSX.Element => {
  const { value, onChange, clearInput } = useInput("");

  const dispatch = useDispatch()

  const submitAddingTodo = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const newTitle = value;

    dispatch(addTodo({title: newTitle}));
    clearInput();
  };

  return (
    <form onSubmit={submitAddingTodo}>
      <InputWrapper
        data-cy="NewTodoField"
        type="text"
        placeholder="What needs to be done?"
        value={value}
        onChange={onChange}
      />
    </form>
  );
};
