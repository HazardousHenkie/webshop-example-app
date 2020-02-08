import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { Formik, Form } from 'formik'

import * as Yup from 'yup'

import TextField from '@material-ui/core/TextField'
import ErrorMessage from 'components/ErrorMessage'

import {
  PaperWrapper,
  StyledPaper,
  StyledTypographyTitle,
  StyledSubmitButton
} from 'containers/Login/styledComponents'

const ForgotPasswordscheme = Yup.object().shape({
  email: Yup.string()
    .required('Required')
    .email()
})

interface Values {
  email: string
}

const ForgotPassword: React.FC = () => {
  const dispatch = useDispatch()
  const submitForm = (values: Values) => {
    // dispatch(forgotPassword({ url: location.search.split('?next=')[1], values }))
  }

  return (
    <PaperWrapper>
      <StyledPaper variant="outlined">
        <StyledTypographyTitle align="center" variant="h1">
          Login
        </StyledTypographyTitle>
        <Formik
          initialValues={{ email: '' }}
          validationSchema={ForgotPasswordscheme}
          onSubmit={submitForm}
        >
          {({
            values,
            isSubmitting,
            isValid,
            handleChange,
            handleBlur,
            errors,
            touched
          }) => (
            <Form>
              <TextField
                type="email"
                label="E-mail"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={errors.email && touched.email && errors.email}
                variant="outlined"
                fullWidth={true}
                margin="normal"
              />

              <StyledSubmitButton
                type="submit"
                variant="contained"
                color="secondary"
                fullWidth={true}
                disabled={isSubmitting || !isValid}
              >
                Login
              </StyledSubmitButton>
            </Form>
          )}
        </Formik>
        {/* {error && <ErrorMessage errorMessage={error.toString()} />} */}
      </StyledPaper>
    </PaperWrapper>
  )
}

export default ForgotPassword
