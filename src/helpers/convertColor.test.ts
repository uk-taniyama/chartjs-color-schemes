import { createConvertColorBuilder } from './convertColor';

describe('convertColor', () => {
  it('buider:mix', () => {
    const convertColor = createConvertColorBuilder().mix('#FFF', 0.5).build();
    expect(convertColor('#CCCCCC')).toEqual('#E6E6E6');
  });
  it('buider:alpha', () => {
    const convertColor = createConvertColorBuilder().alpha(0.7).build();
    expect(convertColor('#CCCCCC')).toEqual('#CCCCCCB3');
  });
  it('buider:clearer', () => {
    const convertColor = createConvertColorBuilder().clearer(0.5).build();
    expect(convertColor('#CCCCCC')).toEqual('#CCCCCC7F');
  });
  it('buider:greyscale', () => {
    const convertColor = createConvertColorBuilder().greyscale().build();
    expect(convertColor('#F00')).toEqual('#4D4D4D');
  });
  it('buider:opaquer', () => {
    const convertColor = createConvertColorBuilder().opaquer(0.5).build();
    expect(convertColor('#CCFF00CC')).toEqual('#CCFF00');
  });
  it('buider:negate', () => {
    const convertColor = createConvertColorBuilder().negate().build();
    expect(convertColor('#CDF')).toEqual('#320');
  });
  it('buider:lighten', () => {
    const convertColor = createConvertColorBuilder().lighten(0.7).build();
    expect(convertColor('#CCCCCC')).toEqual('#FFF');
  });
  it('buider:darken', () => {
    const convertColor = createConvertColorBuilder().darken(0.7).build();
    expect(convertColor('#CCCCCC')).toEqual('#3D3D3D');
  });
  it('buider:saturate', () => {
    const convertColor = createConvertColorBuilder().saturate(0.4).build();
    expect(convertColor('#884455')).toEqual('#96364E');
  });
  it('buider:desaturate', () => {
    const convertColor = createConvertColorBuilder().desaturate(0.4).build();
    expect(convertColor('#884455')).toEqual('#7A525C');
  });
  it('buider:rotate', () => {
    const convertColor = createConvertColorBuilder().rotate(360 / 3).build();
    expect(convertColor('#F00')).toEqual('#0F0');
  });
});
