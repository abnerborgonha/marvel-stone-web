import * as Yup from 'yup'

const ChangeProfileValidation = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().required('E-mail is required').email('invalid e-mail'),
  password: Yup.string().min(8, 'Length must be at least 8 characters').optional(),
  old_password: Yup.string().min(8, 'Length must be at least 8 characters').optional()
})
export default ChangeProfileValidation
