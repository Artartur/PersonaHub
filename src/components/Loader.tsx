import { Component } from "react";
import {
  LoaderContainer,
  LoaderText,
  Spinner
}
  from "../styles/loader.styles";

export default class Loader extends Component {
  render() {
    return (
      <LoaderContainer>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Spinner />
          <LoaderText>Loading datas</LoaderText>
        </div>
      </LoaderContainer>
    )
  }
}
