import { Component } from "react";
import { BsStar, BsStarFill } from "react-icons/bs";

import type { ITable } from "../interfaces/table.types";

import {
  StyledTable,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableHeaderRow,
  TableRow
}
  from "../styles/table.styles";
import { Button } from "../styles/utils.styles";


export default class Table extends Component<ITable> {
  constructor(props: ITable) {
    super(props);
  }

  render() {
    return (
      <StyledTable>
        <TableHeader>
          <TableHeaderRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Phone</TableHeaderCell>
            <TableHeaderCell>Action</TableHeaderCell>
          </TableHeaderRow>
        </TableHeader>
        <TableBody>
          {this.props.filter.map((item, index) => (
            <TableRow key={index}>
              <TableCell onClick={() => this.props.openModal(item.id)}>{item.name}</TableCell>
              <TableCell onClick={() => this.props.openModal(item.id)}>{item.email}</TableCell>
              <TableCell onClick={() => this.props.openModal(item.id)}>{item.phone}</TableCell>
              <TableCell>
                <Button
                  withIcon
                  onClick={() => {
                    if (this.props.isFavorite(item.id)) {
                      this.props.removeFromFavorites(item.id);
                    } else {
                      this.props.addToFavorites(item.id);
                    }
                  }}
                >
                  {this.props.isFavorite(item.id) ? <BsStarFill color="#ff8800" /> : <BsStar />}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable >
    )
  }
}
