import { isFunction } from 'chart.js/helpers';

function stringify(obj: any) {
  return Object
    .entries(obj)
    .map(([k, v]) => {
      if (isFunction(v)) {
        return [k, 'fn'];
      }
      try {
        return [k, JSON.parse(JSON.stringify(v))];
      } catch (e) {
        return null;
      }
    }).reduce((prev, curr) => {
      if (curr == null) {
        return prev;
      }
      const [k, v] = curr;
      Object.assign(prev, { [k]: v });
      return prev;
    }, {} as any);
}

/**
 * debug console.log plugin.
 */
export const DebugPlugin = [
  'afterBuildTicks',
  'afterDataLimits',
  'afterDatasetDraw',
  'afterDatasetsDraw',
  'afterDatasetsUpdate',
  'afterDatasetUpdate',
  'afterDestroy',
  'afterDraw',
  // 'afterEvent',
  'afterInit',
  'afterLayout',
  'afterRender',
  'afterUpdate',
  'beforeBuildTicks',
  'beforeDataLimits',
  'beforeDatasetDraw',
  'beforeDatasetsDraw',
  'beforeDatasetsUpdate',
  'beforeDatasetUpdate',
  'beforeDestroy',
  'beforeDraw',
  'beforeElementsUpdate',
  // 'beforeEvent',
  'beforeInit',
  'beforeLayout',
  'beforeRender',
  'beforeUpdate',
  'destroy',
  'install',
  'reset',
  'resize',
  'start',
  'stop',
  'uninstall',
].reduce((prev, name) => ({
  ...prev,
  [name]: (_: any, args: any, opts: any) => { console.log(name, args, stringify(opts)); },
}), {
  id: 'debug',
});
