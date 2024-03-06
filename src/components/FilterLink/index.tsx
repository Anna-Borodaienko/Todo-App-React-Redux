import React, { ReactNode } from 'react'

import { useDispatch } from 'react-redux'
import { changeFilter } from '../../store/todoSlice'
import { StyledLink } from './FilterLink.styled'
import { AppDispatch } from '../../store'
import { FieldForFilter } from '../../types/Todo'

interface FilterLinkProps {
  href: string
  selected: boolean
  fieldForFilter: FieldForFilter
  children: ReactNode
}

export const FilterLink: React.FC<FilterLinkProps> = ({
  href,
  selected,
  fieldForFilter,
  children,
}: FilterLinkProps): JSX.Element => {
  const dispatch: AppDispatch = useDispatch()

  return (
    <StyledLink
      data-cy='FilterLink'
      href={href}
      $selected={selected}
      onClick={(): void => {
        dispatch(changeFilter({ fieldForFilter: fieldForFilter }))
      }}
    >
      {children}
    </StyledLink>
  )
}

export default FilterLink
