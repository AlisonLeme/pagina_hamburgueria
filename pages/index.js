import { useState } from 'react';
import { Formik } from 'formik';

import { 
  Box,
  Button,
  Container,
  Select,
  TextField,
  Typography,
  Grid,
  FormGroup,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
  OutlinedInput,
  InputAdornment,
  FormControl,
  InputLabel,
  FormHelperText,
  MenuItem
} from '@material-ui/core'

import TemplateDefault from '../src/templates/Default'
import { initialValues, validationSchema } from './formValues';
import useStyles from './styles';

export default function Home() {
  const classes = useStyles();

  const [state, setState] = useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const [value, setValue] = useState('female');

  const handleChangeCheck = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleChangeRadio = (event) => {
    setValue(event.target.value);
  }

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  return (
    <TemplateDefault>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('ok, enviou o formulário');
        }}
      >
        {
          ({
            touched,
            values,
            errors,
            handleChange,
            handleSubmit,
            setFieldValue,
          }) => {
            return (
              <form onSubmit={handleSubmit}>
                <Container maxWidth="md" className={classes.container}>
                  <Grid container spacing={3} className={classes.boxContainer}>
                    <Grid item md={12}>
                      <Typography component="h1" variant="h2" align="center" gutterBottom className={classes.title}>
                          Faça o pedido
                      </Typography>
                    </Grid>
                  </Grid>

                  <Box className={classes.box1}>
                    <Grid container spacing={3} className={classes.boxContainer}>
                      <Grid item xs={12} sm={6}>
                        <Typography component="h6" variant="h6" gutterBottom>
                          Telefone
                        </Typography>
                        <FormControl fullWidth variant='outlined' error={errors.telefone && touched.telefone}>
                          <InputLabel>
                            Ex..: 15998532204
                          </InputLabel>
                          <OutlinedInput
                            name='telefone'
                            value={values.telefone}
                            onChange={handleChange}
                            label='Ex..: 15998532204'
                          >
                          </OutlinedInput>
                          <FormHelperText>
                            { errors.telefone && touched.telefone ? errors.telefone : null }
                          </FormHelperText>
                        </FormControl>
                      </Grid>
                      
                      <Grid item xs={12} sm={6}>
                        <Typography component="h6" variant="h6" gutterBottom>
                            Nome do Cliente
                        </Typography>
                        <FormControl fullWidth variant='outlined' error={errors.nome && touched.nome}>
                          <InputLabel>
                            Ex..: Alison Leme
                          </InputLabel>
                          <OutlinedInput
                            name='nome'
                            value={values.nome}
                            onChange={handleChange}
                            label='Ex..: Alison Leme'
                          >
                          </OutlinedInput>
                          <FormHelperText>
                            { errors.nome && touched.nome ? errors.nome : null }
                          </FormHelperText>
                        </FormControl>
                      </Grid>
                    </Grid>

                    <Grid container spacing={3} className={classes.boxContainer}>
                      <Grid item xs={12} sm={6}>
                        <Typography component="h6" variant="h6">
                            Combos
                        </Typography>
                        <FormControl fullWidth variant='outlined' error={errors.combo && touched.combo}>
                          <InputLabel>
                            Escolha o combo
                          </InputLabel>
                          <Select
                            name='combo'
                            value={values.combo}
                            onChange={handleChange}
                            className={classes.select}
                            label='Escolha o combo'
                            fullWidth
                          >
                            <MenuItem value="X SAUDAVEL">X SAUDAVEL</MenuItem>
                            <MenuItem value="X EGG">X EGG</MenuItem>
                            <MenuItem value="X BURGUER">X BURGUER</MenuItem>
                          </Select>
                          <FormHelperText>
                            { errors.combo && touched.combo ? errors.combo : null }
                          </FormHelperText>
                        </FormControl>
                      </Grid>

                      <Grid item xs={6} sm={3}>
                        <Typography component="h6" variant="h6">
                            Adicionais
                        </Typography>
                        <FormGroup>
                          <FormControlLabel
                            control={<Checkbox checked={gilad} onChange={handleChangeCheck} name="gilad" />}
                            label="Gilad Gray"
                          />
                          <FormControlLabel
                            control={<Checkbox checked={jason} onChange={handleChangeCheck} name="jason" />}
                            label="Jason Killian"
                          />
                          <FormControlLabel
                            control={<Checkbox checked={antoine} onChange={handleChangeCheck} name="antoine" />}
                            label="Antoine Llorca"
                          />
                      </FormGroup>
                      </Grid>
                      
                      <Grid item xs={6} sm={3}>
                        <Typography component="h6" variant="h6">
                            Entrega ?
                        </Typography>
                        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChangeRadio}>
                          <FormControlLabel value="Para viagem" control={<Radio />} label="Para viagem" />
                          <FormControlLabel value="Balcão" control={<Radio />} label="Balcão" />
                        </RadioGroup>
                      </Grid>
                    </Grid>

                    <Grid container spacing={3} align='center' className={classes.boxContainer}>
                      <Grid item md={4}>
                        <Button variant="contained" className={classes.btn}>
                            Calcular
                        </Button>
                      </Grid>
                      <Grid item md={4}>
                        <Button variant="contained" className={classes.btn}>
                            Novo Pedido
                        </Button>
                      </Grid>
                      <Grid item md={4}>
                        <Button variant="contained" className={classes.btn}>
                            Recibo
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>

                  <Box className={classes.box2}>
                    <Grid container spacing={3} className={classes.boxContainer}>
                      <Grid item xs={12}>
                        <Typography component="h6" variant="h6" gutterBottom color="primary">
                            Total a pagar:
                        </Typography>
                        <OutlinedInput 
                          onChange={() => {}}
                          startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                          fullWidth
                          disabled
                        />
                      </Grid>
                    </Grid>

                    <Grid container spacing={3} className={classes.boxContainer}>
                      <Grid item xs={12}>
                        <Typography component="h6" variant="h6" gutterBottom>
                              Descrição do Pedido
                          </Typography>
                          <Typography component="div" variant="body2">
                              Detalhes do pedido
                          </Typography>
                          <TextField
                              multiline
                              rows={6}
                              variant="outlined"
                              fullWidth
                              disabled
                          />
                      </Grid>
                    </Grid>
                  </Box>
                </Container>
              </form>
            )
          }
        }
      </Formik>



    </TemplateDefault>
  )
}
