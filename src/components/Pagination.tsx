import React from 'react';
import styled from 'styled-components';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const PaginationButton = styled.button<{ isActive?: boolean }>`
  padding: 5px 10px;
  margin: 0 5px;
  border: none;
  background-color: ${props => (props.isActive ? '#24292e' : '#fff')};
  color: ${props => (props.isActive ? '#fff' : '#24292e')};
  cursor: pointer;
`;

function Pagination(props: PaginationProps) {
  const { currentPage, totalPages, onPageChange } = props;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <PaginationContainer>
      {pages.map(page => (
        <PaginationButton
          key={page}
          isActive={page === currentPage}
          onClick={() => onPageChange(page)}
        >
          {page}
        </PaginationButton>
      ))}
    </PaginationContainer>
  );
}

export default Pagination;