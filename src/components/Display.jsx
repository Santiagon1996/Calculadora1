import { Typography } from '@mui/material';
import PropTypes from "prop-types";

const Display = ({ value, result }) => {
  return (
    <>
      <Typography variant="h4" color='red'>{value||result}</Typography>
    </>
  );
};

Display.propTypes = {
  value: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
};

export default Display;
