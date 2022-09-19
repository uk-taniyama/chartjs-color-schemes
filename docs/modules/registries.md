[chartjs-colorful - v1.0.0](../README.md) / registries

# Namespace: registries

## Table of contents

### Classes

- [Registry](../classes/registries.Registry.md)

### Variables

- [globalNamedColors](registries.md#globalnamedcolors)
- [linears](registries.md#linears)
- [schemes](registries.md#schemes)

### Functions

- [defaultLinear](registries.md#defaultlinear)

## Variables

### globalNamedColors

• `Const` **globalNamedColors**: `Record`<`string`, [`Color`](../README.md#color)\>

___

### linears

• `Const` **linears**: [`Registry`](../classes/registries.Registry.md)<[`ColorLinear`](../README.md#colorlinear)\>

___

### schemes

• `Const` **schemes**: [`Registry`](../classes/registries.Registry.md)<[`Scheme`](../README.md#scheme)\>

## Functions

### defaultLinear

▸ **defaultLinear**(`value`): `string`

Given a value in the range [0,1], returns the corresponding color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 0.0, 1.0 |

#### Returns

`string`
