[chartjs-color-schemes - v1.0.0-alpha.6](../README.md) / ColorfulPluginDataOptions

# Interface: ColorfulPluginDataOptions

## Table of contents

### Properties

- [axis](ColorfulPluginDataOptions.md#axis)
- [datasetIndex](ColorfulPluginDataOptions.md#datasetindex)
- [max](ColorfulPluginDataOptions.md#max)
- [max2](ColorfulPluginDataOptions.md#max2)
- [min](ColorfulPluginDataOptions.md#min)
- [min2](ColorfulPluginDataOptions.md#min2)
- [name](ColorfulPluginDataOptions.md#name)
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

### name

• `Optional` **name**: `string`

name for the color linear.

**`See`**

[addLinears](../README.md#addlinears), [getLinear](../README.md#getlinear)

___

### scale

• `Optional` **scale**: `_DeepPartialObject`<[`ColorfulScaleOptions`](ColorfulScaleOptions.md)\>

options for color-scale

___

### value

• `Optional` **value**: `string` \| [`ValueFn`](../README.md#valuefn)

value key name or value from ctx function.
