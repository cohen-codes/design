import GitHubIcon from '@mui/icons-material/GitHub.js';
import { IconTextButton } from './icon-text-button.js';

export const BasicIconTextButton = () => {
  return (
    <IconTextButton
      //@ts-ignore
      icon={<GitHubIcon fontSize="large" />}
      textPrimary="GitHub"
      textSecondary="View On"
      onClick={() => console.log('clicked')}
    />
  );
};
