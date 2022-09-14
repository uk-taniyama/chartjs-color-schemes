chartjs-colorful - v1.0.0-RC.1

# chartjs-colorful - v1.0.0-RC.1

## Table of contents

### Namespaces

- [helpers](modules/helpers.md)
- [registries](modules/registries.md)
- [schemes](modules/schemes.md)

### Classes

- [ColorfulScale](classes/ColorfulScale.md)

### Interfaces

- [Bicolor](interfaces/Bicolor.md)
- [ColorfulPluginDataOptions](interfaces/ColorfulPluginDataOptions.md)
- [ColorfulPluginDatasetOptions](interfaces/ColorfulPluginDatasetOptions.md)
- [ColorfulPluginOptions](interfaces/ColorfulPluginOptions.md)
- [ColorfulScaleOptions](interfaces/ColorfulScaleOptions.md)

### Type Aliases

- [Color](README.md#color)
- [ColorConverter](README.md#colorconverter)
- [ColorFnNames](README.md#colorfnnames)
- [ColorLinear](README.md#colorlinear)
- [Colors](README.md#colors)
- [NamedColors](README.md#namedcolors)
- [NamedLinear](README.md#namedlinear)
- [Scheme](README.md#scheme)
- [ScriptableColor](README.md#scriptablecolor)
- [ScriptableValue](README.md#scriptablevalue)

### Variables

- [ColorfulPlugin](README.md#colorfulplugin)
- [colorfulPluginDatasetDefaults](README.md#colorfulplugindatasetdefaults)

### Functions

- [isBicolor](README.md#isbicolor)

## Type Aliases

### Color

Ƭ **Color**: `string`

___

### ColorConverter

Ƭ **ColorConverter**: (`color`: [`Color`](README.md#color)) => [`Color`](README.md#color)

#### Type declaration

▸ (`color`): [`Color`](README.md#color)

##### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`Color`](README.md#color) |

##### Returns

[`Color`](README.md#color)

___

### ColorFnNames

Ƭ **ColorFnNames**: ``"color"`` \| ``"color2"`` \| ``"gradient"`` \| ``"colors"`` \| ``"colors2"`` \| ``"gradients"``

color: color by datasetIndex.
color2: converted color by datasetIndex.
gradient: gradient color by datasetIndex.
colors: color by dataIndex.(ex.type='pie')
colors2: converted color by dataIndex.(ex.type='pie')
gradients: gradient color by dataIndex.(ex.type='pie')

___

### ColorLinear

Ƭ **ColorLinear**: (`value`: `number`) => [`Color`](README.md#color)

#### Type declaration

▸ (`value`): [`Color`](README.md#color)

Given a value in the range [0,1], returns the corresponding color.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 0.0, 1.0 |

##### Returns

[`Color`](README.md#color)

___

### Colors

Ƭ **Colors**: [`Color`](README.md#color)[]

___

### NamedColors

Ƭ **NamedColors**: `Record`<`string`, [`Colors`](README.md#colors)\>

___

### NamedLinear

Ƭ **NamedLinear**: `Record`<`string`, [`ColorLinear`](README.md#colorlinear)\>

___

### Scheme

Ƭ **Scheme**: [`Color`](README.md#color)[]

___

### ScriptableColor

Ƭ **ScriptableColor**: (`ctx`: `any`) => [`Color`](README.md#color) \| ``null``

#### Type declaration

▸ (`ctx`): [`Color`](README.md#color) \| ``null``

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `any` |

##### Returns

[`Color`](README.md#color) \| ``null``

___

### ScriptableValue

Ƭ **ScriptableValue**: (`ctx`: `any`) => `number` \| ``null`` \| `undefined`

#### Type declaration

▸ (`ctx`): `number` \| ``null`` \| `undefined`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `any` |

##### Returns

`number` \| ``null`` \| `undefined`

## Variables

### ColorfulPlugin

• `Const` **ColorfulPlugin**: `Plugin`<keyof `ChartTypeRegistry`, [`ColorfulPluginOptions`](interfaces/ColorfulPluginOptions.md)\>

___

### colorfulPluginDatasetDefaults

• `Const` **colorfulPluginDatasetDefaults**: [`ColorfulPluginDatasetOptions`](interfaces/ColorfulPluginDatasetOptions.md)[]

## Functions

### isBicolor

▸ **isBicolor**(`what`): what is Bicolor

#### Parameters

| Name | Type |
| :------ | :------ |
| `what` | `any` |

#### Returns

what is Bicolor
