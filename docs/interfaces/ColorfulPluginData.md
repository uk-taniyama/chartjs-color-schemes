[chartjs-color-schemes - v1.0.0-alpha.4](../README.md) / ColorfulPluginData

# Interface: ColorfulPluginData

## Table of contents

### Properties

- [axis](ColorfulPluginData.md#axis)
- [datasetIndex](ColorfulPluginData.md#datasetindex)
- [max](ColorfulPluginData.md#max)
- [max2](ColorfulPluginData.md#max2)
- [min](ColorfulPluginData.md#min)
- [min2](ColorfulPluginData.md#min2)
- [name](ColorfulPluginData.md#name)
- [scale](ColorfulPluginData.md#scale)
- [value](ColorfulPluginData.md#value)

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

• **name**: `string`

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
