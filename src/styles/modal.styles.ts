import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  backdrop-filter: blur(4px);
`;

const ModalContainer = styled.div`
  background-color: white;
  border-radius: 12px;
  max-width: 700px;
  width: 100%;
`;

const ModalHeader = styled.div`
  padding: 10px 24px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #333;
`;

const ModalContent = styled.div`
  padding: 24px;
`;

const DataGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const DataSection = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  border: 1px solid #e9ecef;
`;

const SectionTitle = styled.h3`
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 600;
  color: #495057;
  border-bottom: 2px solid #007bff;
  padding-bottom: 8px;
`;

const DataItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const DataLabel = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #6c757d;
  margin-bottom: 4px;
`;

const DataValue = styled.span`
  font-size: 14px;
  color: #212529;
  font-weight: 500;
  word-break: break-word;
`;

const ModalFooter = styled.div`
  padding: 10px 24px;
  border-top: 1px solid #e0e0e0;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

export {
  DataGrid,
  DataItem,
  DataLabel,
  DataSection,
  DataValue,
  ModalContainer,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  Overlay,
  SectionTitle,
}
