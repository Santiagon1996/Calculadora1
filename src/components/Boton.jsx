import {Button} from "@mui/material"
import PropTypes from "prop-types"

const Boton = ({ label, onClick }) => {
  return (
    <>
     <Button sx={{p:2, m:1, fontSize:20}} variant="contained" color="primary" onClick={onClick}>{label}</Button>
    </>
  );
};


Boton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}
export default Boton