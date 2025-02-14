declare module '*.svg' {
  import * as React from 'react';
  import {StyleProp, ViewStyle} from 'react-native';

  const ReactComponent: React.FunctionComponent<
    Omit<React.SVGProps<SVGSVGElement>, 'style'> & {style?: ViewStyle}
  >;

  export default ReactComponent;
}
