import { MemoryRouter } from 'react-router-dom';
import { Link } from './link.js';

export const BasicLink = () => (
  <MemoryRouter>
    <Link to="/">hello world!</Link>
  </MemoryRouter>
);
