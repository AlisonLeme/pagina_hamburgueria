import { useState } from 'react';
import { Formik, isInteger } from 'formik';

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

  const formValues = {
    ...initialValues
  }

  const [totalPagar, setTotalPagar] = useState(0)
  const [descricao, setDescricao] = useState("")

  return (
    <TemplateDefault>
      <Formik
        initialValues={formValues}
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
            const handleChangePagar = () => {
              let total = parseInt(values.combo.preco) + parseInt(values.adicionais.preco) + parseInt(values.entrega.preco)
              setTotalPagar(total)

              let desc =   `Nome do cliente: ${values.nome}\nNúmero do cliente: ${values.telefone}\nCombo escolhido: ${values.combo.nome}\nAdicionais: ${values.adicionais.nome}\nEntrega: ${values.entrega.nome}
              `
              setDescricao(desc)
            }

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
                          >
                            <MenuItem value= {{nome: "X SAUDAVEL", preco: '20'}}> X SAUDAVEL</MenuItem>
                            <MenuItem value= {{nome: "X EGG", preco: '15'}}>X EGG</MenuItem>
                            <MenuItem value= {{nome: "X BURGUER", preco: '10'}}>X BURGUER</MenuItem>
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
                        <FormControl variant='outlined' error={errors.adicionais && touched.adicionais}>
                          <FormGroup>
                            <FormControlLabel
                              name="adicionais"
                              value={values.adicionais.nome}
                              onChange={handleChange}
                              control={<Checkbox value={{nome: "Bacon", preco: '2'}}/>}
                              label="Bacon"
                            />
                            <FormControlLabel
                              name="adicionais"
                              value={values.adicionais.nome}
                              onChange={handleChange}
                              control={<Checkbox value={{nome: "Cheddar", preco: '1'}}/>}
                              label="Cheddar"
                            />
                            <FormControlLabel
                              name="adicionais"
                              value={values.adicionais.nome}
                              onChange={handleChange}
                              control={<Checkbox value={{nome: "Picles", preco: '3'}}/>}
                              label="Picles"
                            />
                        </FormGroup>
                        <FormHelperText>
                            { errors.adicionais && touched.adicionais ? errors.adicionais : null }
                        </FormHelperText>
                      </FormControl>
                      </Grid>
                      
                      <Grid item xs={6} sm={3}>
                        <Typography component="h6" variant="h6">
                            Entrega ?
                        </Typography>
                        <FormControl variant='outlined' error={errors.entrega && touched.entrega}>
                          <RadioGroup aria-label="entrega" value={values.entrega.nome}>
                            <FormControlLabel
                              control={<Radio onChange={handleChange} name="entrega" value={{nome: "Para viagem", preco: '5'}}/>}
                              label="Para viagem"/>
                            <FormControlLabel
                              control={<Radio onChange={handleChange} name="entrega" value={{nome: "Balcão", preco: '0'}}/>}
                              label="Balcão"/>
                          </RadioGroup>
                          <FormHelperText>
                            { errors.entrega && touched.entrega ? errors.entrega : null }
                          </FormHelperText>
                        </FormControl>
                      </Grid>
                    </Grid>

                    <Grid container spacing={3} align='center' className={classes.boxContainer}>
                      <Grid item md={4}>
                        <Button type="submit" variant="contained" className={classes.btn} onClick = {handleChangePagar}>
                            Calcular
                        </Button>
                      </Grid>
                      <Grid item md={4}>
                        <Button type='submit' variant="contained" className={classes.btn}>
                            Novo Pedido
                        </Button>
                      </Grid>
                      <Grid item md={4}>
                        <Button type='submit' variant="contained" className={classes.btn}>
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
                          startAdornment={<InputAdornment position="start">{`R$ ${totalPagar}`}</InputAdornment>}
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
                              value={descricao}
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
