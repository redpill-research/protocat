// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file models.proto (package atlas.models.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * @generated from message atlas.models.v1.ProductValueRange
 */
export class ProductValueRange extends Message<ProductValueRange> {
  /**
   * @generated from field: int64 min = 1;
   */
  min = protoInt64.zero;

  /**
   * @generated from field: int64 max = 2;
   */
  max = protoInt64.zero;

  constructor(data?: PartialMessage<ProductValueRange>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "atlas.models.v1.ProductValueRange";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "min", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "max", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductValueRange {
    return new ProductValueRange().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductValueRange {
    return new ProductValueRange().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductValueRange {
    return new ProductValueRange().fromJsonString(jsonString, options);
  }

  static equals(a: ProductValueRange | PlainMessage<ProductValueRange> | undefined, b: ProductValueRange | PlainMessage<ProductValueRange> | undefined): boolean {
    return proto3.util.equals(ProductValueRange, a, b);
  }
}

/**
 * @generated from message atlas.models.v1.Product
 */
export class Product extends Message<Product> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: string name = 2;
   */
  name = "";

  /**
   * @generated from field: string country = 3;
   */
  country = "";

  /**
   * @generated from field: string currency = 4;
   */
  currency = "";

  /**
   * @generated from field: repeated int64 denominations = 5;
   */
  denominations: bigint[] = [];

  /**
   * @generated from field: repeated atlas.models.v1.ProductValueRange value_range = 6;
   */
  valueRange: ProductValueRange[] = [];

  /**
   * @generated from field: string image = 7;
   */
  image = "";

  /**
   * @generated from field: string description = 8;
   */
  description = "";

  /**
   * @generated from field: string terms_and_conditions = 9;
   */
  termsAndConditions = "";

  /**
   * @generated from field: string instructions = 10;
   */
  instructions = "";

  constructor(data?: PartialMessage<Product>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "atlas.models.v1.Product";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "country", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "currency", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "denominations", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 6, name: "value_range", kind: "message", T: ProductValueRange, repeated: true },
    { no: 7, name: "image", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "terms_and_conditions", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "instructions", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Product {
    return new Product().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Product {
    return new Product().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Product {
    return new Product().fromJsonString(jsonString, options);
  }

  static equals(a: Product | PlainMessage<Product> | undefined, b: Product | PlainMessage<Product> | undefined): boolean {
    return proto3.util.equals(Product, a, b);
  }
}

/**
 * @generated from message atlas.models.v1.InviteCode
 */
export class InviteCode extends Message<InviteCode> {
  /**
   * @generated from field: string code = 1;
   */
  code = "";

  /**
   * @generated from field: bool is_used = 2;
   */
  isUsed = false;

  constructor(data?: PartialMessage<InviteCode>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "atlas.models.v1.InviteCode";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "is_used", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InviteCode {
    return new InviteCode().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InviteCode {
    return new InviteCode().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InviteCode {
    return new InviteCode().fromJsonString(jsonString, options);
  }

  static equals(a: InviteCode | PlainMessage<InviteCode> | undefined, b: InviteCode | PlainMessage<InviteCode> | undefined): boolean {
    return proto3.util.equals(InviteCode, a, b);
  }
}

