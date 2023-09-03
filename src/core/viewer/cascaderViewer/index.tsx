/* eslint-disable eqeqeq */
// == string 和 number 类型忽略
import { SheetType } from '@zhenliang/sheet/type';
import { valuesTransferToLabel } from '../../util';

export const GetCascaderViewer = (options: SheetType.OptionsType[]) => {
  const TypeViewer: SheetType.CellViewer = (props) => {
    const { value } = props;
    return valuesTransferToLabel(options, value as string) || (value as string);
  };
  return TypeViewer;
};