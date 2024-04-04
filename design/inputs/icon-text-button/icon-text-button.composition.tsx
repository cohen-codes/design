import GitHubIcon from '@mui/icons-material/GitHub';
import { IconTextButton } from './icon-text-button.js';

export const BasicIconTextButton = () => {
  return (
    <IconTextButton
      icon={<GitHubIcon fontSize="large" />}
      textPrimary="GitHub"
      textSecondary="View On"
      onClick={() => console.log('clicked')}
    />
  );
};
