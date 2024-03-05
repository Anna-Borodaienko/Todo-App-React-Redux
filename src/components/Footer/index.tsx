import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ClearButton, FooterWrapper, StyledLink, StyledNav } from "./Footer.styled";
import { changeFilter, removeCompletedTodos } from "../../store/todoSlice";

interface FooterProps {
  activeTodosNumber: number,
}

const Footer: React.FC<FooterProps> = ({
  activeTodosNumber,
}: FooterProps): JSX.Element => {
  const { todos, fieldForFilter } = useSelector(
    (state: any) => state.todos
  );
  const dispatch = useDispatch();

  return (
    <FooterWrapper data-cy="Footer">
      <span data-cy="todosCounter">{`${activeTodosNumber} items left`}</span>

      <StyledNav data-cy="Filter">
        <StyledLink
          data-cy="FilterLinkAll"
          href="#/"
          selected={fieldForFilter === "All"}
          onClick={() => dispatch(changeFilter({ fieldForFilter: "All" }))}
        >
          All
        </StyledLink>

        <StyledLink
          data-cy="FilterLinkActive"
          href="#/active"
          selected={fieldForFilter === "Active"}
          onClick={() => dispatch(changeFilter({ fieldForFilter: "Active" }))}
        >
          Active
        </StyledLink>

        <StyledLink
          data-cy="FilterLinkCompleted"
          href="#/completed"
          selected={fieldForFilter === "Completed"}
          onClick={() =>
            dispatch(changeFilter({ fieldForFilter: "Completed" }))
          }
        >
          Completed
        </StyledLink>
      </StyledNav>

      {todos.length > 0 && (
        <ClearButton
          data-cy="ClearCompletedButton"
          type="button"
          className="todoapp__clear-completed"
          onClick={() => dispatch(removeCompletedTodos())}
        >
          Clear completed
        </ClearButton>
      )}
    </FooterWrapper>
  );
};

export default Footer
