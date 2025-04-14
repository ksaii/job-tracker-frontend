// Components/ThemeToggle.jsx
import { Switch, FormControlLabel } from '@mui/material';

const ThemeToggle = ({ isDark, onToggle }) => (
  <FormControlLabel control={<Switch checked={isDark} onChange={onToggle} />} label="Dark Mode" />
);

export default ThemeToggle;
