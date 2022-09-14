[chartjs-color-schemes - v1.0.0-beta.2](../README.md) / [registries](../modules/registries.md) / Registry

# Class: Registry<T\>

[registries](../modules/registries.md).Registry

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](registries.Registry.md#constructor)

### Accessors

- [names](registries.Registry.md#names)

### Methods

- [add](registries.Registry.md#add)
- [addAll](registries.Registry.md#addall)
- [clear](registries.Registry.md#clear)
- [get](registries.Registry.md#get)

## Constructors

### constructor

• **new Registry**<`T`\>(`value`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

## Accessors

### names

• `get` **names**(): `string`[]

#### Returns

`string`[]

## Methods

### add

▸ **add**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `T` |

#### Returns

`void`

___

### addAll

▸ **addAll**(`items`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | `Record`<`string`, `T`\> |

#### Returns

`void`

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

___

### get

▸ **get**(`name?`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

`T`
