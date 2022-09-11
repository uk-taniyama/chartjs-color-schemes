chartjs-color-schemes - v1.0.0-alpha.5

# chartjs-color-schemes - v1.0.0-alpha.5

## Table of contents

### Namespaces

- [helpers](modules/helpers.md)
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

- [ColorConverter](README.md#colorconverter)
- [ColorFn](README.md#colorfn)
- [ColorFnNames](README.md#colorfnnames)
- [ColorLinear](README.md#colorlinear)
- [Colors](README.md#colors)
- [NamedColors](README.md#namedcolors)
- [NamedLinear](README.md#namedlinear)
- [ValueFn](README.md#valuefn)

### Variables

- [ColorfulPlugin](README.md#colorfulplugin)
- [colorfulPluginDatasetDefaults](README.md#colorfulplugindatasetdefaults)

### Functions

- [addLinear](README.md#addlinear)
- [addLinears](README.md#addlinears)
- [addScheme](README.md#addscheme)
- [addSchemes](README.md#addschemes)
- [clearNamedColors](README.md#clearnamedcolors)
- [getLinear](README.md#getlinear)
- [getLinearNames](README.md#getlinearnames)
- [getScheme](README.md#getscheme)
- [getSchemeNames](README.md#getschemenames)
- [isBicolor](README.md#isbicolor)
- [setNamedColor](README.md#setnamedcolor)
- [setNamedColors](README.md#setnamedcolors)

## Type Aliases

### ColorConverter

Ƭ **ColorConverter**: (`color`: `string`) => `string`

#### Type declaration

▸ (`color`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `string` |

##### Returns

`string`

___

### ColorFn

Ƭ **ColorFn**: (`ctx`: `any`) => `string`

#### Type declaration

▸ (`ctx`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `any` |

##### Returns

`string`

___

### ColorFnNames

Ƭ **ColorFnNames**: ``"color"`` \| ``"color2"`` \| ``"linear"`` \| ``"colors"`` \| ``"colors2"``

___

### ColorLinear

Ƭ **ColorLinear**: (`index`: `number`) => `string`

#### Type declaration

▸ (`index`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

##### Returns

`string`

___

### Colors

Ƭ **Colors**: `string`[]

___

### NamedColors

Ƭ **NamedColors**: `Record`<`string`, [`Colors`](README.md#colors)\>

___

### NamedLinear

Ƭ **NamedLinear**: `Record`<`string`, [`ColorLinear`](README.md#colorlinear)\>

___

### ValueFn

Ƭ **ValueFn**: (`ctx`: `any`) => `number` \| ``null`` \| `undefined`

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

### addLinear

▸ **addLinear**(`name`, `linear`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `linear` | [`ColorLinear`](README.md#colorlinear) |

#### Returns

`void`

___

### addLinears

▸ **addLinears**(`linears`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `linears` | `Record`<`string`, [`ColorLinear`](README.md#colorlinear)\> |

#### Returns

`void`

___

### addScheme

▸ **addScheme**(`schemeName`, `colors`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemeName` | `string` |
| `colors` | [`Colors`](README.md#colors) |

#### Returns

`void`

___

### addSchemes

▸ **addSchemes**(`schemes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemes` | `Record`<`string`, [`Colors`](README.md#colors)\> |

#### Returns

`void`

___

### clearNamedColors

▸ **clearNamedColors**(): `void`

#### Returns

`void`

___

### getLinear

▸ **getLinear**(`name?`): [`ColorLinear`](README.md#colorlinear)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

[`ColorLinear`](README.md#colorlinear)

___

### getLinearNames

▸ **getLinearNames**(): `string`[]

#### Returns

`string`[]

___

### getScheme

▸ **getScheme**(`name?`): [`Colors`](README.md#colors)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

[`Colors`](README.md#colors)

___

### getSchemeNames

▸ **getSchemeNames**(): `string`[]

#### Returns

`string`[]

___

### isBicolor

▸ **isBicolor**(`what`): what is Bicolor

#### Parameters

| Name | Type |
| :------ | :------ |
| `what` | `any` |

#### Returns

what is Bicolor

___

### setNamedColor

▸ **setNamedColor**(`name`, `color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `color` | `string` |

#### Returns

`void`

___

### setNamedColors

▸ **setNamedColors**(`namedColors`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `namedColors` | `Record`<`string`, `string`\> |

#### Returns

`void`
