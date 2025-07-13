import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  background-color: #f5f7fa;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const StyledTable = styled.table`
  width: 100%;
  max-width: 800px;
  margin: 20px auto;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const TableHeader = styled.thead`
  background: #667eea;
  color: white;
  width: 100%;
`;

const TableHeaderRow = styled.tr`
  height: 40px;
`;

const TableHeaderCell = styled.th`
  padding: 15px 20px;
  text-align: center;
  font-weight: 600;
  font-size: 16px;

  &:first-child {
    padding-left: 30px;
  }

  @media (max-width: 768px) {
    padding: 12px 15px;
    font-size: 14px;

    &:first-child {
      padding-left: 20px;
    }

    &:last-child {
      padding-right: 20px;
    }
  }
`;

const TableBody = styled.tbody`
  background-color: #ffffff;
`;

const TableRow = styled.tr`
  transition: all 0.3s ease;
  border-bottom: 1px solid #e8e8e8;

  &:hover {
    cursor: pointer;
    background-color: #f8f9ff;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  &:last-child {
    border-bottom: none;
  }
`;

const TableCell = styled.td`
  padding: 15px;
  color: #333;
  font-size: 15px;

  &:first-child {
    padding-left: 30px;
    font-weight: 600;
    color: #2c3e50;
  }

  &:last-child {
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 15px;
    font-size: 14px;

    &:first-child {
      padding-left: 20px;
    }

    &:last-child {
      padding-right: 20px;
    }
  }
`;

export {
  Container,
  StyledTable,
  TableHeader,
  TableHeaderRow,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell
}
