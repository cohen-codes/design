import React from 'react';
import { Typography, TypographyProps } from '@mui/material';

export type HeadingProps = {
  value: string | React.ReactNode;
} & TypographyProps;

export function Heading({
  value,
  fontSize = '48px',
  fontWeight = 700,
  ...rest
}: HeadingProps) {
  return (
    <Typography fontSize={fontSize} fontWeight={fontWeight} {...rest}>
      {value}
    </Typography>
  );
}
