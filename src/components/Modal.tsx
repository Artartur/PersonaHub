import { Component } from "react";

import formatPhoneNumber from "../utils/formatPhoneNumber";

import type { IModal } from "../interfaces/modal.types";

import {
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
  SectionTitle
}
  from "../styles/modal.styles";
import { Button } from "../styles/utils.styles";

export default class Modal extends Component<IModal> {
  constructor(props: IModal) {
    super(props);
  }

  render() {
    return (
      <Overlay>
        <ModalContainer>
          <ModalHeader>
            <ModalTitle>{this.props.data.name}`s datas</ModalTitle>
            <Button withIcon onClick={this.props.closeModal}>×</Button>
          </ModalHeader>
          <ModalContent>
            <DataGrid>
              <DataSection>
                <SectionTitle>Contact</SectionTitle>
                <DataItem>
                  <DataLabel>Phone:</DataLabel>
                  <DataValue>{formatPhoneNumber(this.props.data.phone)}</DataValue>
                </DataItem>
                <DataItem>
                  <DataLabel>Email:</DataLabel>
                  <DataValue>{this.props.data.email}</DataValue>
                </DataItem>
              </DataSection>

              <DataSection>
                <SectionTitle>Address</SectionTitle>
                <DataItem>
                  <DataLabel>Street:</DataLabel>
                  <DataValue>{this.props.data.address.street}</DataValue>
                </DataItem>
                <DataItem>
                  <DataLabel>City:</DataLabel>
                  <DataValue>{this.props.data.address.city}</DataValue>
                </DataItem>
                <DataItem>
                  <DataLabel>Suite:</DataLabel>
                  <DataValue>{this.props.data.address.suite}</DataValue>
                </DataItem>
                <DataItem>
                  <DataLabel>ZipCode:</DataLabel>
                  <DataValue>{this.props.data.address.zipcode}</DataValue>
                </DataItem>
              </DataSection>

              <DataSection>
                <SectionTitle>Company</SectionTitle>
                <DataItem>
                  <DataLabel>Username:</DataLabel>
                  <DataValue>{this.props.data.username}</DataValue>
                </DataItem>
                <DataItem>
                  <DataLabel>Working at:</DataLabel>
                  <DataValue>{this.props.data.company.name}</DataValue>
                </DataItem>
              </DataSection>
            </DataGrid>
          </ModalContent>
          <ModalFooter>
            <Button closeButton onClick={this.props.closeModal}>Fechar</Button>
          </ModalFooter>
        </ModalContainer>
      </Overlay>
    )
  }
}
