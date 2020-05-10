import React, { Component } from "react";
import { SHOP_DATA } from "../data";
import CollectionPreview from "../components/CollectionPreview";

class ShopPage extends Component {
  state = {
    collections: SHOP_DATA,
  };

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...collectionsProps }) => {
          return <CollectionPreview key={id} {...collectionsProps} />;
        })}
      </div>
    );
  }
}

export default ShopPage;
