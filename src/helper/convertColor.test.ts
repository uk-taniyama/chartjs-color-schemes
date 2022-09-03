import { createBuilder } from './convertColor';

describe('convertColor', () => {
  it('buider:mix', () => {
    const convertColor = createBuilder().mix('#FFF', 0.5).build();
    expect(convertColor('#CCCCCC')).toEqual('#E6E6E6');
  });
  it('buider:alpha', () => {
    const convertColor = createBuilder().alpha(0.7).build();
    expect(convertColor('#CCCCCC')).toEqual('#CCCCCCB3');
  });
  it('buider:clearer', () => {
    const convertColor = createBuilder().clearer(0.5).build();
    expect(convertColor('#CCCCCC')).toEqual('#CCCCCC7F');
  });
  it('buider:greyscale', () => {
    const convertColor = createBuilder().greyscale().build();
    expect(convertColor('#F00')).toEqual('#4D4D4D');
  });
  it('buider:opaquer', () => {
    const convertColor = createBuilder().opaquer(0.5).build();
    expect(convertColor('#CCFF00CC')).toEqual('#CCFF00');
  });
  it('buider:negate', () => {
    const convertColor = createBuilder().negate().build();
    expect(convertColor('#CDF')).toEqual('#320');
  });
  it('buider:lighten', () => {
    const convertColor = createBuilder().lighten(0.7).build();
    expect(convertColor('#CCCCCC')).toEqual('#FFF');
  });
  it('buider:darken', () => {
    const convertColor = createBuilder().darken(0.7).build();
    expect(convertColor('#CCCCCC')).toEqual('#3D3D3D');
  });
  it('buider:saturate', () => {
    const convertColor = createBuilder().saturate(0.4).build();
    expect(convertColor('#884455')).toEqual('#96364E');
  });
  it('buider:desaturate', () => {
    const convertColor = createBuilder().desaturate(0.4).build();
    expect(convertColor('#884455')).toEqual('#7A525C');
  });
  it('buider:rotate', () => {
    const convertColor = createBuilder().rotate(360 / 3).build();
    expect(convertColor('#F00')).toEqual('#0F0');
  });
});
