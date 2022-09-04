chartjs-color-schemes - v1.0.0-alpha.1

# chartjs-color-schemes - v1.0.0-alpha.1

## Table of contents

### Namespaces

- [helpers](modules/helpers.md)
- [schemes](modules/schemes.md)

### Interfaces

- [ColorSchemes](interfaces/ColorSchemes.md)

### Type Aliases

- [ColorConverter](README.md#colorconverter)
- [ColorFn](README.md#colorfn)
- [ColorLinear](README.md#colorlinear)
- [Colors](README.md#colors)
- [NamedColors](README.md#namedcolors)
- [NamedLinear](README.md#namedlinear)

### Functions

- [addScheme](README.md#addscheme)
- [addSchemes](README.md#addschemes)
- [clearNamedColors](README.md#clearnamedcolors)
- [createColorSchemes](README.md#createcolorschemes)
- [defaultConverter](README.md#defaultconverter)
- [getColor](README.md#getcolor)
- [getColors](README.md#getcolors)
- [getScheme](README.md#getscheme)
- [getSchemeNames](README.md#getschemenames)
- [setNamedColor](README.md#setnamedcolor)
- [setNamedColors](README.md#setnamedcolors)
- [setup](README.md#setup)

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

## Functions

### addScheme

▸ **addScheme**(`schmeName`, `colors`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schmeName` | `string` |
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

### createColorSchemes

▸ **createColorSchemes**(): [`ColorSchemes`](interfaces/ColorSchemes.md)

#### Returns

[`ColorSchemes`](interfaces/ColorSchemes.md)

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
| `colors` | [`Colors`](README.md#colors) |
| `index` | `number` |

#### Returns

`string`

___

### getColors

▸ **getColors**(`colors`, `count`, `startIndex?`): `any`[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `colors` | [`Colors`](README.md#colors) | `undefined` |
| `count` | `number` | `undefined` |
| `startIndex` | `number` | `0` |

#### Returns

`any`[]

___

### getScheme

▸ **getScheme**(`schemeName?`): [`Colors`](README.md#colors)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemeName?` | `string` |

#### Returns

[`Colors`](README.md#colors)

___

### getSchemeNames

▸ **getSchemeNames**(): `string`[]

#### Returns

`string`[]

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

___

### setup

▸ **setup**(`schemes`, `colorsTypes?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `schemes` | [`ColorSchemes`](interfaces/ColorSchemes.md) | `undefined` |
| `colorsTypes` | `string`[] | `defaultColorsTypes` |

#### Returns

`void`
