import { GitHub } from '@mui/icons-material';

import { IconTextButton } from './icon-text-button.js';

export const BasicIconTextButton = () => {
  return (
    <IconTextButton
      icon={<GitHub fontSize="large" />}
      textPrimary="GitHub"
      textSecondary="View On"
      onClick={() => console.log('clicked')}
    />
  );
};
