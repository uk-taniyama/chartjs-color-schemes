[chartjs-color-schemes - v1.0.0-beta.1](../README.md) / ColorfulPluginDataOptions

# Interface: ColorfulPluginDataOptions

## Table of contents

### Properties

- [axis](ColorfulPluginDataOptions.md#axis)
- [datasetIndex](ColorfulPluginDataOptions.md#datasetindex)
- [linear](ColorfulPluginDataOptions.md#linear)
- [max](ColorfulPluginDataOptions.md#max)
- [max2](ColorfulPluginDataOptions.md#max2)
- [min](ColorfulPluginDataOptions.md#min)
- [min2](ColorfulPluginDataOptions.md#min2)
- [scale](ColorfulPluginDataOptions.md#scale)
- [value](ColorfulPluginDataOptions.md#value)

## Properties

### axis

• `Optional` **axis**: `string`

colorful-scale axis.

___

### datasetIndex

• `Optional` **datasetIndex**: `number`

target dataset index.

**`Default`**

0

___

### linear

• `Optional` **linear**: `string`

name for the color linear.

**`See`**

[linears](../modules/registries.md#linears)

___

### max

• **max**: `number`

maximum number for the scale.

___

### max2

• `Optional` **max2**: `number`

maximum number for the color linear.

**`Default`**

1.0

___

### min

• **min**: `number`

minimum number for the scale.

___

### min2

• `Optional` **min2**: `number`

minimum number for the color linear.

**`Default`**

0.0

___

### scale

• `Optional` **scale**: `_DeepPartialObject`<[`ColorfulScaleOptions`](ColorfulScaleOptions.md)\>

options for color-scale

___

### value

• `Optional` **value**: `string` \| [`ScriptableValue`](../README.md#scriptablevalue)

value key name or value from ctx function.
