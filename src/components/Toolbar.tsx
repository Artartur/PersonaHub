import { Component } from "react";

import type { IToolbar } from "../interfaces/toolbar.types";

import { SearchInput, ToolbarContainer } from "../styles/toolbar.styles";
import { Button } from "../styles/utils.styles";

export default class Toolbar extends Component<IToolbar> {
  constructor(props: IToolbar) {
    super(props)
  }

  render() {
    return (
      <ToolbarContainer>
        <Button
          $favoriteButton
          onClick={() => this.props.setShowFavorites(!this.props.showFavorites)}
        >
          {this.props.showFavorites ? 'Show All' : 'Favorites'}
        </Button>
        <SearchInput
          type='search'
          name='search'
          placeholder={
            this.props.showFavorites ?
              'Search by favorites name' :
              'Search by name'
          }
          value={this.props.search}
          onChange={(e) => this.props.setSearch(e.target.value)}
        />
      </ToolbarContainer>
    );
  }
}
