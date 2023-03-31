import React from 'react';
import styled from 'styled-components';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageButton = styled.button<{ isActive: boolean }>`
  background-color: ${(props) => (props.isActive ? '#24292e' : '#fff')};
  color: ${(props) => (props.isActive ? '#fff' : '#24292e')};
  border: none;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  border-radius: 5px;
`;

const Dots = styled.span`
  margin: 5px;
`;

function Pagination(props: PaginationProps) {
  const { currentPage, totalPages, onPageChange } = props;

  function handlePrevPage() {
    onPageChange(currentPage - 1);
  }

  function handleNextPage() {
    onPageChange(currentPage + 1);
  }

  function handlePageClick(page: number) {
    onPageChange(page);
  }

  const pages = [];

  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    if (currentPage <= 3) {
      for (let i = 1; i <= 5; i++) {
        pages.push(i);
      }
      pages.push(-1);
      pages.push(totalPages);
    } else if (currentPage > 3 && currentPage < totalPages - 2) {
      pages.push(1);
      pages.push(-1);
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        pages.push(i);
      }
      pages.push(-1);
      pages.push(totalPages);
    } else {
      pages.push(1);
      pages.push(-1);
      for (let i = totalPages - 4; i <= totalPages; i++) {
        pages.push(i);
      }
    }
  }

  return (
    <PaginationContainer>
      {currentPage !== 1 && (
        <PageButton onClick={handlePrevPage} isActive={false}>
          Anterior
        </PageButton>
      )}
      {pages.map((page) => (
        <React.Fragment key={page}>
          {page === -1 ? (
            <Dots>...</Dots>
          ) : (
            <PageButton onClick={() => handlePageClick(page)} isActive={page === currentPage}>
              {page}
            </PageButton>
          )}
        </React.Fragment>
      ))}
      {currentPage !== totalPages && (
        <PageButton onClick={handleNextPage} isActive={false}>
          Próxima
        </PageButton>
      )}
    </PaginationContainer>
  );
}

export default Pagination;