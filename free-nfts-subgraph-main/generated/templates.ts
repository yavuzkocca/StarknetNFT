// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  Address,
  DataSourceTemplate,
  DataSourceContext
} from "@graphprotocol/graph-ts";

export class SingleEditionMintable extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("SingleEditionMintable", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "SingleEditionMintable",
      [address.toHex()],
      context
    );
  }
}
