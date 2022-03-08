import * as yup from 'yup';

const initialValues = {
  telefone: '',
  nome: '',
  combo: {
    nome: "",
    preco: "",
  },
  adicionais: {
    nome: "",
    preco:"",
  },
  entrega: {
    nome: "",
    preco: "",
  },
}

const validationSchema = yup.object().shape({
  telefone: yup.number()
    .required('Campo obrigatório'),

  nome: yup.string()
    .min(3, 'Nome muito curto')
    .max(20, 'Nome muito longo')
    .required('Campo obrigatório'),

  combo: yup.string()
    .required('Campo obrigatório'),

  adicionais: yup.string(),

  entrega: yup.string()
   .required('Campo obrigatório'),
})

export {
  initialValues,
  validationSchema,
} 