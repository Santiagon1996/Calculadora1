import  { useState } from 'react';
import { Box, Container,Grid2 } from '@mui/material';
import Boton from './Boton';
import Display from './Display';
const Calculator=()=> {
  // Estados para el valor a mostrar en pantalla
  const [displayValue, setDisplayValue] = useState("");
  // Estado para el resultado
  const [result, setResult] = useState("");

  // Funciones para manejar los eventos de los botones
  const handleNumberClick = (num) => {
    setDisplayValue(displayValue + num);
  };
  // Función para realizar operaciones
  const handleOperationClick = (op) => {
    setDisplayValue(prevDisplay => prevDisplay + op);
  };
  
// Función para limpiar la pantalla
  const clearAll = () => {
    setDisplayValue("");
    setResult("");
  };
  
// Función para calcular el resultado
const handleEqualsClick = () => {
  try {
    const calculatedResult = eval(displayValue);
    setResult(calculatedResult.toString());
    setDisplayValue(calculatedResult.toString());
  } catch (error) {
    console.error('Error en cálculo:', error);
    setDisplayValue("Error");
    setResult("");
  }
};


  return (
    <Container maxWidth="xs"  sx={{border:2, p:10, bgcolor: "darkgrey", height:"100vh"}} >
      <Grid2  >
        <Box border={2} height={50} bgcolor={'black'} sx={{display:'flex', justifyContent:'flex-end'}} >
          <Display value={displayValue} result={result} />
        </Box>
        <Grid2 sx={{padding:1}} >
          <Boton label="7" onClick={() => handleNumberClick("7")} />
          <Boton label="8" onClick={() => handleNumberClick("8")} />
          <Boton label="9" onClick={() => handleNumberClick("9")} />
          <Boton label="/" onClick={() => handleOperationClick("/")} />
        </Grid2>
        <Grid2 sx={{padding:1}}>
          <Boton label="4" onClick={() => handleNumberClick("4")} />
          <Boton label="5" onClick={() => handleNumberClick("5")} />
          <Boton label="6" onClick={() => handleNumberClick("6")} />
          <Boton label="*" onClick={() => handleOperationClick("*")} />
        </Grid2>
        <Grid2 sx={{padding:1}} >
          <Boton label="1" onClick={() => handleNumberClick("1")} />
          <Boton label="2" onClick={() => handleNumberClick("2")} />
          <Boton label="3" onClick={() => handleNumberClick("3")} />
          <Boton label="-" onClick={() => handleOperationClick("-")} />
        </Grid2>
        <Grid2 sx={{padding:1}} >
          <Boton label="0" onClick={() => handleNumberClick("0")} />
          <Boton label="." onClick={() => handleNumberClick(".")} />
          <Boton label="=" onClick={() => handleEqualsClick("=")} />
          <Boton  label="+" onClick={() => handleOperationClick("+")} />
        </Grid2>
      </Grid2>
      <Grid2 sx={{padding:1}}>
        <Grid2 >
          <Boton label="C" onClick={clearAll} variant="outlined" color="secondary" fullWidth />
        </Grid2>
      </Grid2>
    </Container>
  );
}

export default Calculator;