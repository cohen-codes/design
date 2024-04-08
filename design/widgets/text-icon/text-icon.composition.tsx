import { CloseOutlined } from '@mui/icons-material';

import { TextIcon } from './text-icon.js';

export const BasicTextIcon = () => {
  return (
    <TextIcon
      icon={<CloseOutlined />}
      text="Bit.dev"
      fontSize={16}
      fontWeight={500}
    />
  );
};
