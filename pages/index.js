import { Box, Button, Container, Select, TextField, Typography, Grid  } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import TemplateDefault from '../src/templates/Default'

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(8, 0, 6),
  },
  boxContainer: {
      paddingBottom: theme.spacing(5),
  },
  box1: {
      backgroundColor: theme.palette.background.grey,
      padding: theme.spacing(3),
      marginBottom: theme.spacing(5),
      boxShadow: '5px 0px 20px #ac0d0d',
      borderRadius: '5px 5px 5px 100px',
  },
  box2: {
      backgroundColor: theme.palette.background.grey,
      padding: theme.spacing(3),
      marginBottom: theme.spacing(5),
      boxShadow: '-5px 0 20px #ac0d0d',
      borderRadius: '5px 5px 100px 5px',
  },
  title: {
    color: theme.palette.title.main,
  },
  btn: {
    backgroundColor: '#ac0d0d',
    color: theme.palette.title.main,
    fontWeight: 'bold',
    transition: '.3s',

    '&:hover': {
      backgroundColor: theme.palette.title.main,
      color: '#ac0d0d',
    },
  },
}))

export default function Home() {
  const classes = useStyles();

  return (
    <TemplateDefault>
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
                <Typography component="h6" variant="h6">
                    Telefone
                </Typography>
                <TextField
                    label="ex.: 15999999999"
                    size="small"
                    fullWidth={true}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                  <Typography component="h6" variant="h6">
                      Nome do Cliente
                  </Typography>
                  <TextField
                    label="ex.: Alison Leme"
                    size="small"
                    fullWidth={true}
                />
            </Grid>
          </Grid>

          <Grid container spacing={3} className={classes.boxContainer}>
            <Grid item xs={12} sm={6}>
              <Typography component="h6" variant="h6">
                  Combos
              </Typography>
              <Select
                  className={classes.select}
                  native
                  value=""
                  fullWidth
                  onChange={() => {}}
                  background="primary"
                  inputProps={{
                      name: 'age',
                  }}
              >
                  <option value="">Selecione</option>
                  <option value="1">Bebê e Crianças</option>
                  <option value="2">Agricultura</option>
                  <option value="3">Moda</option>
                  <option value="3">Carros, Motos e Barcos</option>
                  <option value="3">Serviços</option>
                  <option value="3">Lazer</option>
                  <option value="3">Animais</option>
                  <option value="3">Móveis, Casa e Jardim</option>
                  <option value="3">Imóveis</option>
                  <option value="3">Equipamentos e Ferramentas</option>
                  <option value="3">Celulares e Tablets</option>
                  <option value="3">Esporte</option>
                  <option value="3">Tecnologia</option>
                  <option value="3">Emprego</option>
                  <option value="3">Outros</option>
              </Select>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography component="h6" variant="h6">
                  Adicionais
              </Typography>
              <Select
                  className={classes.select}
                  native
                  value=""
                  fullWidth
                  onChange={() => {}}
                  background="primary"
                  inputProps={{
                      name: 'age',
                  }}
              >
                  <option value="">Selecione</option>
                  <option value="1">Bebê e Crianças</option>
                  <option value="2">Agricultura</option>
                  <option value="3">Moda</option>
                  <option value="3">Carros, Motos e Barcos</option>
                  <option value="3">Serviços</option>
                  <option value="3">Lazer</option>
                  <option value="3">Animais</option>
                  <option value="3">Móveis, Casa e Jardim</option>
                  <option value="3">Imóveis</option>
                  <option value="3">Equipamentos e Ferramentas</option>
                  <option value="3">Celulares e Tablets</option>
                  <option value="3">Esporte</option>
                  <option value="3">Tecnologia</option>
                  <option value="3">Emprego</option>
                  <option value="3">Outros</option>
              </Select>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography component="h6" variant="h6">
                  Entrega ?
              </Typography>
              <Select
                  className={classes.select}
                  native
                  value=""
                  fullWidth
                  onChange={() => {}}
                  background="primary"
                  inputProps={{
                      name: 'age',
                  }}
              >
                  <option value="">Selecione</option>
                  <option value="1">Para Viagem</option>
                  <option value="2">Comer no local</option>
              </Select>
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
              <TextField
                  multiline
                  rows={1}
                  variant="outlined"
                  fullWidth
              />
            </Grid>
          </Grid>

          <Grid container spacing={3} className={classes.boxContainer}>
            <Grid item xs={12}>
              <Typography component="h6" variant="h6" gutterBottom>
                    Descrição do Pedido
                </Typography>
                <Typography component="div" variant="body2">
                    Escreva os detalhes do que está vendendo.
                </Typography>
                <TextField
                    multiline
                    rows={6}
                    variant="outlined"
                    fullWidth
                />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </TemplateDefault>
  )
}
