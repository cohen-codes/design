import React from 'react';
import { LinkIconSvg } from './link-icon.svg.js';

export type LinkIconProps = {} & React.SVGProps<SVGSVGElement>;

export function LinkIcon(props: LinkIconProps) {
  return <LinkIconSvg {...props} />;
}
