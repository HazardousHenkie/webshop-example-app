import React, { useState, createRef, RefObject } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { useForm } from 'react-hook-form'

import TextField from '@material-ui/core/TextField'
import InfoMessage from 'components/Molecules/InfoMessage'

import {
  PaperWrapper,
  StyledPaper,
  StyledTypographyTitle,
  StyledSubmitButton
} from 'styles/styledComponents'

import Loader from 'components/Atoms/Loader'

import { createStructuredSelector } from 'reselect'

import { registerAction } from './actions'

import hasSpecificErrors, { hasErrors } from 'utils/hasErrors'
import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'

import reducer from './reducer'
import saga from './saga'

import {
  makeSelectError,
  makeSelectMessage,
  makeSelectLoader
} from './selectors'

import { useTranslation } from 'react-i18next'

import { makeSelectLoggedIn } from 'containers/App/selectors'

import ROUTES from 'strings/routes'

import { Helmet } from 'react-helmet'
import ReCAPTCHA from 'react-google-recaptcha'

interface FormSubmitInterface {
  email: string
  password: string
  password_confirmation: string
}

const key = 'register'

// check captcha error
const recaptchaRef = createRef() as RefObject<any>

const stateSelector = createStructuredSelector({
  message: makeSelectMessage(),
  error: makeSelectError(),
  loading: makeSelectLoader(),
  loggedIn: makeSelectLoggedIn()
})

const Register: React.FC = () => {
  const { message, error, loading, loggedIn } = useSelector(stateSelector)
  const [submitting, setSubmitting] = useState(false)
  const [recaptchaError, setRecaptchaError] = useState(false)
  const dispatch = useDispatch()

  useInjectReducer({ key, reducer })
  useInjectSaga({ key, saga })

  const { register, handleSubmit, watch, errors } = useForm<
    FormSubmitInterface
  >({
    mode: 'onChange'
  })

  const { t } = useTranslation(['error', 'register'])

  const submitForm = handleSubmit(({ email, password }) => {
    recaptchaRef.current.execute()
    const recaptchaValue = recaptchaRef.current.getValue()

    if (recaptchaError) {
      setRecaptchaError(false)
    }

    if (recaptchaValue !== '') {
      dispatch(registerAction(email, password))
    } else {
      setRecaptchaError(true)
    }

    setSubmitting(false)
  })

  return (
    <>
      <Helmet>
        <title>{t('register:title', 'Register Page')}</title>
        <meta
          name={t('register:title', 'Register Page')}
          content={t(
            'register:description',
            'A simple shop with react application register page'
          )}
        />
      </Helmet>
      {loading && <Loader />}

      <PaperWrapper loggedIn={loggedIn}>
        <StyledPaper variant="outlined">
          <StyledTypographyTitle align="center" variant="h1">
            {t('register:typographyTitle', 'Register')}
          </StyledTypographyTitle>
          {message && (
            <InfoMessage
              severity="info"
              message={t(
                'register:succesMessage',
                ' an email with instructions has been send.'
              )}
              link={ROUTES.LOGIN_LINK}
              linkText="Back to login"
            />
          )}
          <form onSubmit={submitForm}>
            <TextField
              error={hasSpecificErrors(errors.email)}
              type="email"
              label={t('register:emailLabel', 'E-mail')}
              name="email"
              inputRef={register({
                required: t(
                  'error:requiredField',
                  'Input is required.'
                ) as string,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: t('error:unvalidEmail', 'Must be  valid email.')
                }
              })}
              helperText={errors.email && errors.email.message}
              variant="outlined"
              fullWidth={true}
              margin="normal"
            />
            <TextField
              error={hasSpecificErrors(errors.password)}
              type="password"
              label={t('register:passwordLabel', 'Password')}
              name="password"
              inputRef={register({
                required: t(
                  'error:requiredField',
                  'Input is required.'
                ) as string,
                minLength: {
                  value: 6,
                  message: t(
                    'error:maxLengthSix',
                    'The minimum width of this field is 6.'
                  )
                }
              })}
              helperText={errors.password && errors.password.message}
              variant="outlined"
              fullWidth={true}
              margin="normal"
            />

            <TextField
              error={hasSpecificErrors(errors.password_confirmation)}
              type="password"
              label={t(
                'register:passwor_confirmation',
                'Password confirmation'
              )}
              name="password_confirmation"
              inputRef={register({
                required: t(
                  'error:requiredField',
                  'Input is required.'
                ) as string,
                validate: value =>
                  value === watch('password') ||
                  (t(
                    'error:passwordNotMatching',
                    "passwords don't match"
                  ) as string),
                minLength: {
                  value: 6,
                  message: t(
                    'error:maxLengthSix',
                    'The minimum width of this field is 6.'
                  )
                }
              })}
              helperText={
                errors.password_confirmation &&
                errors.password_confirmation.message
              }
              variant="outlined"
              fullWidth={true}
              margin="normal"
            />

            <ReCAPTCHA
              ref={recaptchaRef}
              size="invisible"
              sitekey={process.env.REACT_APP_RECAPTCHA as string}
            />
            <StyledSubmitButton
              type="submit"
              variant="contained"
              color="secondary"
              fullWidth={true}
              disabled={submitting || hasErrors(errors)}
            >
              {t('register:resetButton', 'Register')}
            </StyledSubmitButton>
          </form>

          {error && <InfoMessage severity="error" message={error.toString()} />}
          {recaptchaError && (
            <InfoMessage
              severity="error"
              message={t('register:captcha', "Recaptcha wasn't valid.")}
            />
          )}
        </StyledPaper>
      </PaperWrapper>
    </>
  )
}

export default Register
