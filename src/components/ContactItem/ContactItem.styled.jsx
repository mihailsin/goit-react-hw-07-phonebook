import styled from 'styled-components';
const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #444444;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
const Button = styled.button`
  margin-left: 10px;
  width: 40px;

  &:hover {
    cursor: pointer;
  }
`;
export { Item, Button };
