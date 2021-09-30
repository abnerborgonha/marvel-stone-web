import * as Yup from 'yup'

const SignUpValidation = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().required('E-mail is required').email('invalid e-mail'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Length must be at least 8 characters')
})
export default SignUpValidation
