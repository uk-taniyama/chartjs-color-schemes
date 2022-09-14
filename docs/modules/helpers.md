[chartjs-colorful - v1.0.0-RC.1](../README.md) / helpers

# Namespace: helpers

## Table of contents

### Classes

- [ConvertColorBuilder](../classes/helpers.ConvertColorBuilder.md)

### Variables

- [DebugPlugin](helpers.md#debugplugin)

### Functions

- [clampColor](helpers.md#clampcolor)
- [clampValue](helpers.md#clampvalue)
- [createAlphaConverter](helpers.md#createalphaconverter)
- [createColors](helpers.md#createcolors)
- [createConvertColorBuilder](helpers.md#createconvertcolorbuilder)
- [createLinear](helpers.md#createlinear)
- [createRotateLinear](helpers.md#createrotatelinear)
- [createScriptableColor](helpers.md#createscriptablecolor)
- [createScriptableValue](helpers.md#createscriptablevalue)
- [getColor](helpers.md#getcolor)
- [getColors](helpers.md#getcolors)
- [halfTransparent](helpers.md#halftransparent)
- [isFunction](helpers.md#isfunction)
- [isNumber](helpers.md#isnumber)
- [throughNull](helpers.md#throughnull)
- [transparent](helpers.md#transparent)

## Variables

### DebugPlugin

• `Const` **DebugPlugin**: `Object`

debug console.log plugin.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

## Functions

### clampColor

▸ **clampColor**(`linear`, `min`, `max`, `colorMin?`, `colorMax?`): [`ColorLinear`](../README.md#colorlinear)

Get the function is input value [min,max] translate to [colorMin, colorMax] then call linear.
ex) linear:(red -> blue), min:0, max:20, colorMin: 1.0, colorMax: 0.0
returned function call by '0' then returned 'blue'.
returned function call by '20' then returned 'red'.

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

Get the function is input value [min,max] translate to [colorMin, colorMax].
ex) min:0, max:20, colorMin: 1.0, colorMax: 0.0
returned function call by '0' then returned '1.0'.
returned function call by '20' then returned '0.0'.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `min` | `number` | `undefined` |
| `max` | `number` | `undefined` |
| `rangeMin` | `number` | `0.0` |
| `rangeMax` | `number` | `1.0` |

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

### createAlphaConverter

▸ **createAlphaConverter**(`alpha`): [`ColorConverter`](../README.md#colorconverter)

Create color's alpha converter.

#### Parameters

| Name | Type |
| :------ | :------ |
| `alpha` | `number` |

#### Returns

[`ColorConverter`](../README.md#colorconverter)

___

### createColors

▸ **createColors**(`linear`, `count`, `includeOne?`): [`Colors`](../README.md#colors)

create Colors from ColorLinear.

includeOne=false(default) => [0, 1].<br>
includeOne=true => [0, 1).<br>
If linear returns the same value for 0 and 1, specify include=false.
For example, linear created with createRotateLinear

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `linear` | [`ColorLinear`](../README.md#colorlinear) | `undefined` |
| `count` | `number` | `undefined` |
| `includeOne` | `undefined` \| `boolean` | `true` |

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

### createRotateLinear

▸ **createRotateLinear**(`color`, `reverse?`): [`ColorLinear`](../README.md#colorlinear)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `color` | `string` | `undefined` |
| `reverse` | `boolean` | `false` |

#### Returns

[`ColorLinear`](../README.md#colorlinear)

___

### createScriptableColor

▸ **createScriptableColor**(`valueFn`, `linear`): [`ScriptableColor`](../README.md#scriptablecolor)

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueFn` | [`ScriptableValue`](../README.md#scriptablevalue) |
| `linear` | [`ColorLinear`](../README.md#colorlinear) |

#### Returns

[`ScriptableColor`](../README.md#scriptablecolor)

___

### createScriptableValue

▸ **createScriptableValue**(`value`): [`ScriptableValue`](../README.md#scriptablevalue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| [`ScriptableValue`](../README.md#scriptablevalue) |

#### Returns

[`ScriptableValue`](../README.md#scriptablevalue)

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

### halfTransparent

▸ **halfTransparent**(`color`): `string`

Get a half-transparent color.

#FFFFFF -> #FFFFFF80

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `string` |

#### Returns

`string`

___

### isFunction

▸ **isFunction**(`v`): v is Function

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

v is Function

___

### isNumber

▸ **isNumber**(`v`): v is number

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

v is number

___

### throughNull

▸ **throughNull**<`V`, `R`\>(`fn`): (`v`: `V` \| ``null`` \| `undefined`) => `R` \| ``null``

v is null then return null.
v is NOT null then return fn(v).

#### Type parameters

| Name |
| :------ |
| `V` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`v`: `V`) => `R` |

#### Returns

`fn`

▸ (`v`): `R` \| ``null``

##### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `V` \| ``null`` \| `undefined` |

##### Returns

`R` \| ``null``

___

### transparent

▸ **transparent**(`color`): `string`

Get a transparent color.

#FFFFFF -> #FFFFFF00

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `string` |

#### Returns

`string`
