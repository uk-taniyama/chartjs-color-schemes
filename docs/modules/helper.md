[chartjs-color-schemes - v1.0.0-alpha.1](../README.md) / helper

# Namespace: helper

## Table of contents

### Classes

- [ConvertColorBuilder](../classes/helper.ConvertColorBuilder.md)

### Functions

- [clampColor](helper.md#clampcolor)
- [clampValue](helper.md#clampvalue)
- [createColors](helper.md#createcolors)
- [createConvertColorBuilder](helper.md#createconvertcolorbuilder)

## Functions

### clampColor

▸ **clampColor**(`linear`, `min`, `max`): [`ColorLinear`](../README.md#colorlinear)

#### Parameters

| Name | Type |
| :------ | :------ |
| `linear` | [`ColorLinear`](../README.md#colorlinear) |
| `min` | `number` |
| `max` | `number` |

#### Returns

[`ColorLinear`](../README.md#colorlinear)

___

### clampValue

▸ **clampValue**(`min`, `max`): (`value`: `number`) => `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` |
| `max` | `number` |

#### Returns

`fn`

▸ (`value`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

##### Returns

`number`

___

### createColors

▸ **createColors**(`linear`, `count`): [`Colors`](../README.md#colors)

#### Parameters

| Name | Type |
| :------ | :------ |
| `linear` | [`ColorLinear`](../README.md#colorlinear) |
| `count` | `number` |

#### Returns

[`Colors`](../README.md#colors)

___

### createConvertColorBuilder

▸ **createConvertColorBuilder**(): [`ConvertColorBuilder`](../classes/helper.ConvertColorBuilder.md)

#### Returns

[`ConvertColorBuilder`](../classes/helper.ConvertColorBuilder.md)
