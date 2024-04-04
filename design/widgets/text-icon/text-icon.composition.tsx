import CloseOutlined from '@mui/icons-material/CloseOutlined.js';
import { TextIcon } from './text-icon.js';

export const BasicTextIcon = () => {
  return (
    <TextIcon
      // @ts-ignore
      icon={<CloseOutlined />}
      text="Bit.dev"
      fontSize={16}
      fontWeight={500}
    />
  );
};
