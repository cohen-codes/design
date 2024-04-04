import { Footer } from './footer.js';

export const SampleFooter = () => (
  <Footer
    leftContent="Thanks for Visiting."
    rightContent={`© ${new Date().getFullYear()} Ober. All Rights Reserved.`}
  />
);
