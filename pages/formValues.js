import * as yup from 'yup';

const initialValues = {
  telefone: '',
  nome: '',
  combo: '',
  price: '',
  name: '',
  email: '',
  phone: '',
}

const validationSchema = yup.object().shape({
  telefone: yup.number()
    .min(11, 'Está faltando caracter para um telefone')
    .max(11, 'Numéro de telefone muito grande')
    .required('Campo obrigatório'),

  nome: yup.string()
    .min(3, 'Nome muito curto')
    .max(20, 'Nome muito longo')
    .required('Campo obrigatório'),

  combo: yup.string()
    .required('Campo obrigatório'),

  price: yup.number()
    .required('Campo obrigatório'),

  name: yup.string()
   .required('Campo obrigatório'),

  email: yup.string()
    .email('Digite um e-mail válido')
    .required('Campo obrigatório'),

  phone: yup.number()
    .required('Campo obrigatório'),
})

export {
  initialValues,
  validationSchema,
} 