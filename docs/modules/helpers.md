[chartjs-color-schemes - v1.0.0-alpha.6](../README.md) / helpers

# Namespace: helpers

## Table of contents

### Classes

- [ConvertColorBuilder](../classes/helpers.ConvertColorBuilder.md)

### Variables

- [DebugPlugin](helpers.md#debugplugin)

### Functions

- [clampColor](helpers.md#clampcolor)
- [clampValue](helpers.md#clampvalue)
- [convertAlpha](helpers.md#convertalpha)
- [createColors](helpers.md#createcolors)
- [createConvertColorBuilder](helpers.md#createconvertcolorbuilder)
- [createLinear](helpers.md#createlinear)
- [createScriptableColor](helpers.md#createscriptablecolor)
- [createScriptableValue](helpers.md#createscriptablevalue)
- [defaultConverter](helpers.md#defaultconverter)
- [getColor](helpers.md#getcolor)
- [getColors](helpers.md#getcolors)
- [transparent](helpers.md#transparent)

## Variables

### DebugPlugin

• `Const` **DebugPlugin**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

## Functions

### clampColor

▸ **clampColor**(`linear`, `min`, `max`, `colorMin?`, `colorMax?`): [`ColorLinear`](../README.md#colorlinear)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `linear` | [`ColorLinear`](../README.md#colorlinear) | `undefined` |
| `min` | `number` | `undefined` |
| `max` | `number` | `undefined` |
| `colorMin` | `number` | `0` |
| `colorMax` | `number` | `1` |

#### Returns

[`ColorLinear`](../README.md#colorlinear)

___

### clampValue

▸ **clampValue**(`min`, `max`, `rangeMin?`, `rangeMax?`): (`value`: `number`) => `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `min` | `number` | `undefined` |
| `max` | `number` | `undefined` |
| `rangeMin` | `number` | `0` |
| `rangeMax` | `number` | `1` |

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

### convertAlpha

▸ **convertAlpha**(`alpha`): [`ColorConverter`](../README.md#colorconverter)

#### Parameters

| Name | Type |
| :------ | :------ |
| `alpha` | `number` |

#### Returns

[`ColorConverter`](../README.md#colorconverter)

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

▸ **createConvertColorBuilder**(): [`ConvertColorBuilder`](../classes/helpers.ConvertColorBuilder.md)

#### Returns

[`ConvertColorBuilder`](../classes/helpers.ConvertColorBuilder.md)

___

### createLinear

▸ **createLinear**(`color`): [`ColorLinear`](../README.md#colorlinear)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `string` |

#### Returns

[`ColorLinear`](../README.md#colorlinear)

___

### createScriptableColor

▸ **createScriptableColor**(`valueFn`, `colorFn`): (`ctx`: `any`) => ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueFn` | [`ValueFn`](../README.md#valuefn) |
| `colorFn` | [`ColorFn`](../README.md#colorfn) |

#### Returns

`fn`

▸ (`ctx`): ``null`` \| `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `any` |

##### Returns

``null`` \| `string`

___

### createScriptableValue

▸ **createScriptableValue**(`value`): [`ValueFn`](../README.md#valuefn)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| [`ValueFn`](../README.md#valuefn) |

#### Returns

[`ValueFn`](../README.md#valuefn)

___

### defaultConverter

▸ **defaultConverter**(`color`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `string` |

#### Returns

`string`

___

### getColor

▸ **getColor**(`colors`, `index`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `colors` | [`Colors`](../README.md#colors) |
| `index` | `number` |

#### Returns

`string`

___

### getColors

▸ **getColors**(`colors`, `count`, `startIndex?`): [`Colors`](../README.md#colors)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `colors` | [`Colors`](../README.md#colors) | `undefined` |
| `count` | `number` | `undefined` |
| `startIndex` | `number` | `0` |

#### Returns

[`Colors`](../README.md#colors)

___

### transparent

▸ **transparent**(`color`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `string` |

#### Returns

`string`
