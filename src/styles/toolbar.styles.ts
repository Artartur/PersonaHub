import styled from "styled-components";

const ToolbarContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
`;

const SearchInput = styled.input`
  flex: 1;
  max-width: 300px;
  padding: 0.7rem;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 1rem;
  background-color: #fff;

  &::placeholder {
    color: #6b7280;
  }

  &:focus {
    outline: none;
    border-color: #3b82f6;
  }

  @media (max-width: 640px) {
    max-width: none;
    flex: 1;
    font-size: 0.8;
    padding: 0.625rem 0.875rem;
  }
`

export {
  SearchInput,
  ToolbarContainer
}
