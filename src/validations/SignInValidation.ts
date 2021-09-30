import * as Yup from 'yup'

const SignValidation = Yup.object().shape({
  email: Yup.string().required('E-mail is required').email('Invalid E-mail'),
  password: Yup.string().required('Password is required').min(8, 'Length must be at least 8 characters')
})
export default SignValidation
