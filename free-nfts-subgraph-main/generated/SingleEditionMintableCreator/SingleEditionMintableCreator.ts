// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class CreatedEdition extends ethereum.Event {
  get params(): CreatedEdition__Params {
    return new CreatedEdition__Params(this);
  }
}

export class CreatedEdition__Params {
  _event: CreatedEdition;

  constructor(event: CreatedEdition) {
    this._event = event;
  }

  get editionId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get creator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get editionSize(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get editionContractAddress(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class SingleEditionMintableCreator extends ethereum.SmartContract {
  static bind(address: Address): SingleEditionMintableCreator {
    return new SingleEditionMintableCreator(
      "SingleEditionMintableCreator",
      address
    );
  }

  createEdition(
    _name: string,
    _symbol: string,
    _description: string,
    _animationUrl: string,
    _animationHash: Bytes,
    _imageUrl: string,
    _imageHash: Bytes,
    _editionSize: BigInt,
    _royaltyBPS: BigInt
  ): BigInt {
    let result = super.call(
      "createEdition",
      "createEdition(string,string,string,string,bytes32,string,bytes32,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromString(_name),
        ethereum.Value.fromString(_symbol),
        ethereum.Value.fromString(_description),
        ethereum.Value.fromString(_animationUrl),
        ethereum.Value.fromFixedBytes(_animationHash),
        ethereum.Value.fromString(_imageUrl),
        ethereum.Value.fromFixedBytes(_imageHash),
        ethereum.Value.fromUnsignedBigInt(_editionSize),
        ethereum.Value.fromUnsignedBigInt(_royaltyBPS)
      ]
    );

    return result[0].toBigInt();
  }

  try_createEdition(
    _name: string,
    _symbol: string,
    _description: string,
    _animationUrl: string,
    _animationHash: Bytes,
    _imageUrl: string,
    _imageHash: Bytes,
    _editionSize: BigInt,
    _royaltyBPS: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "createEdition",
      "createEdition(string,string,string,string,bytes32,string,bytes32,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromString(_name),
        ethereum.Value.fromString(_symbol),
        ethereum.Value.fromString(_description),
        ethereum.Value.fromString(_animationUrl),
        ethereum.Value.fromFixedBytes(_animationHash),
        ethereum.Value.fromString(_imageUrl),
        ethereum.Value.fromFixedBytes(_imageHash),
        ethereum.Value.fromUnsignedBigInt(_editionSize),
        ethereum.Value.fromUnsignedBigInt(_royaltyBPS)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getEditionAtId(editionId: BigInt): Address {
    let result = super.call(
      "getEditionAtId",
      "getEditionAtId(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(editionId)]
    );

    return result[0].toAddress();
  }

  try_getEditionAtId(editionId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getEditionAtId",
      "getEditionAtId(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(editionId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  implementation(): Address {
    let result = super.call("implementation", "implementation():(address)", []);

    return result[0].toAddress();
  }

  try_implementation(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "implementation",
      "implementation():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _implementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreateEditionCall extends ethereum.Call {
  get inputs(): CreateEditionCall__Inputs {
    return new CreateEditionCall__Inputs(this);
  }

  get outputs(): CreateEditionCall__Outputs {
    return new CreateEditionCall__Outputs(this);
  }
}

export class CreateEditionCall__Inputs {
  _call: CreateEditionCall;

  constructor(call: CreateEditionCall) {
    this._call = call;
  }

  get _name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _symbol(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _description(): string {
    return this._call.inputValues[2].value.toString();
  }

  get _animationUrl(): string {
    return this._call.inputValues[3].value.toString();
  }

  get _animationHash(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }

  get _imageUrl(): string {
    return this._call.inputValues[5].value.toString();
  }

  get _imageHash(): Bytes {
    return this._call.inputValues[6].value.toBytes();
  }

  get _editionSize(): BigInt {
    return this._call.inputValues[7].value.toBigInt();
  }

  get _royaltyBPS(): BigInt {
    return this._call.inputValues[8].value.toBigInt();
  }
}

export class CreateEditionCall__Outputs {
  _call: CreateEditionCall;

  constructor(call: CreateEditionCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}