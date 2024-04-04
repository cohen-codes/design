import React from 'react';
import { BitIcon } from './bit.icon.js';

export type BitProps = {} & React.SVGAttributes<SVGElement>;

export function Bit(props: BitProps) {
  return <BitIcon {...props} />;
}
