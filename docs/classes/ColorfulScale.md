[chartjs-color-schemes - v1.0.0-alpha.3](../README.md) / ColorfulScale

# Class: ColorfulScale

## Hierarchy

- `LinearScale`

  ↳ **`ColorfulScale`**

## Table of contents

### Constructors

- [constructor](ColorfulScale.md#constructor)

### Properties

- [defaults](ColorfulScale.md#defaults)
- [descriptors](ColorfulScale.md#descriptors)
- [id](ColorfulScale.md#id)

### Methods

- [\_computeGridLineItems](ColorfulScale.md#_computegridlineitems)
- [\_createGradient](ColorfulScale.md#_creategradient)
- [\_getGradient](ColorfulScale.md#_getgradient)
- [afterFit](ColorfulScale.md#afterfit)
- [beforeUpdate](ColorfulScale.md#beforeupdate)
- [configure](ColorfulScale.md#configure)
- [drawGrid](ColorfulScale.md#drawgrid)
- [drawLabels](ColorfulScale.md#drawlabels)
- [init](ColorfulScale.md#init)

## Constructors

### constructor

• **new ColorfulScale**(`cfg`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cfg` | `any` |

#### Overrides

LinearScale.constructor

## Properties

### defaults

▪ `Static` `Readonly` **defaults**: `_DeepPartialObject`<[`ColorfulScaleOptions`](../interfaces/ColorfulScaleOptions.md)\> = `colorfulScaleDefaults`

#### Overrides

LinearScale.defaults

___

### descriptors

▪ `Static` `Readonly` **descriptors**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_scriptable` | `boolean` |

___

### id

▪ `Static` `Readonly` **id**: ``"colorful"``

#### Overrides

LinearScale.id

## Methods

### \_computeGridLineItems

▸ **_computeGridLineItems**(`chartArea`): { `tx1`: `number` ; `tx2`: `number`  }[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `chartArea` | `ChartArea` |

#### Returns

{ `tx1`: `number` ; `tx2`: `number`  }[]

___

### \_createGradient

▸ **_createGradient**(): `CanvasGradient`

#### Returns

`CanvasGradient`

___

### \_getGradient

▸ **_getGradient**(): `any`

#### Returns

`any`

___

### afterFit

▸ **afterFit**(): `void`

#### Returns

`void`

#### Overrides

LinearScale.afterFit

___

### beforeUpdate

▸ **beforeUpdate**(): `void`

#### Returns

`void`

#### Overrides

LinearScale.beforeUpdate

___

### configure

▸ **configure**(): `void`

#### Returns

`void`

#### Overrides

LinearScale.configure

___

### drawGrid

▸ **drawGrid**(`chartArea`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chartArea` | `ChartArea` |

#### Returns

`void`

#### Overrides

LinearScale.drawGrid

___

### drawLabels

▸ **drawLabels**(`chartArea`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chartArea` | `ChartArea` |

#### Returns

`void`

#### Overrides

LinearScale.drawLabels

___

### init

▸ **init**(`options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `any` |

#### Returns

`void`

#### Overrides

LinearScale.init
