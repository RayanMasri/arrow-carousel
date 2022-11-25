import React from "react"
import {
  HawaTextField,
  HawaLogoButton,
  HawaAlert,
  HawaButton,
  HawaPhoneInput,
} from "../../elements"
import { Controller, useForm } from "react-hook-form"
import { HawaContainer } from "../../layout"

type SignInFormTypes = {
  showError: any
  errorTitle: string
  errorText: string
  signInType: "email" | "username" | "phone"
  texts: {
    emailLabel: string
    emailPlaceholder: string
    emailRequiredText: string
    emailInvalidText: string
    usernameLabel: string
    usernamePlaceholder: string
    usernameRequired: string
    usernameRequiredText: string
    phoneRequiredText: string
    passwordLabel: string
    passwordPlaceholder: string
    passwordRequiredText: string
    forgotPasswordText: string
    newUserText: string
    signUpText: string
    signInText: string
    googleButtonLabel: string
    githubButtonLabel: string
    twitterButtonLabel: string
  }
  withoutResetPassword: boolean
  withoutSignUp: boolean
  isLoading: any
  viaGoogle: boolean
  viaGithub: boolean
  viaTwitter: boolean
  handleSignIn: any
  handleRouteToSignUp: any
  handleForgotPassword: any
  handleGoogleSignIn: any
  handleGithubSignIn: any
  handleTwitterSignIn: any
}

export const SignInForm: React.FunctionComponent<SignInFormTypes> = (props) => {
  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm()

  return (
    <HawaContainer maxWidth="small">
      <form onSubmit={handleSubmit(props.handleSignIn)}>
        {props.showError && (
          <HawaAlert
            title={props.errorTitle}
            text={props.errorText}
            severity="error"
          />
        )}
        {props.signInType === "email" ? (
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <HawaTextField
                width="full"
                type="text"
                label={props.texts.emailLabel}
                helperText={errors.email?.message}
                placeholder={props.texts.emailPlaceholder}
                {...field}
                value={field.value ?? ""}
              />
            )}
            rules={{
              required: props.texts.emailRequiredText,
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: props.texts.emailInvalidText,
              },
            }}
          />
        ) : props.signInType === "username" ? (
          <Controller
            control={control}
            name="username"
            render={({ field }) => (
              <HawaTextField
                width="full"
                type="text"
                label={props.texts.usernameLabel}
                helperText={errors.username?.message}
                placeholder={props.texts.usernamePlaceholder}
                {...field}
                value={field.value ?? ""}
              />
            )}
            rules={{
              required: props.texts.usernameRequiredText,
            }}
          />
        ) : (
          <Controller
            control={control}
            name="phone"
            render={({ field }) => <HawaPhoneInput label="Phone number" />}
            rules={{ required: props.texts.phoneRequiredText }}
          />
        )}
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <HawaTextField
              width="full"
              type="password"
              defaultValue={field.value ?? ""}
              label={props.texts.passwordLabel}
              placeholder={props.texts.passwordPlaceholder}
              helperText={errors.password?.message}
              {...field}
              value={field.value ?? ""}
            />
          )}
          rules={{ required: props.texts.passwordRequiredText, minLength: 5 }}
        />
        {!props.withoutResetPassword && (
          <div
            className="mb-3 w-fit cursor-pointer text-xs dark:text-gray-300"
            onClick={props.handleForgotPassword}
          >
            {props.texts.forgotPasswordText}
          </div>
        )}

        <HawaButton
          isLoading={props.isLoading}
          variant="contained"
          color="primary"
          size="medium"
          width="full"
          type="submit"
        >
          {props.texts.signInText}
        </HawaButton>
        {!props.withoutSignUp && (
          <div className="p-3 text-center text-sm font-semibold dark:text-gray-300">
            {props.texts.newUserText}{" "}
            <span
              onClick={props.handleRouteToSignUp}
              className="cursor-pointer text-blue-600 dark:text-blue-400"
            >
              {props.texts.signUpText}
            </span>
          </div>
        )}
      </form>
      {/* <Divider /> */}
      {/* <div className="divide-y divide-gray-900"></div> */}
      {props.viaGithub || props.viaGoogle || props.viaTwitter ? (
        <div className="flex flex-col ">
          {props.viaGoogle && (
            <HawaLogoButton
              logo="google"
              buttonText={props.texts.googleButtonLabel}
              onClick={props.handleGoogleSignIn}
            />
          )}
          {props.viaGithub && (
            <HawaLogoButton
              logo="github"
              buttonText={props.texts.githubButtonLabel}
              onClick={props.handleGithubSignIn}
            />
          )}
          {props.viaTwitter && (
            <HawaLogoButton
              logo="twitter"
              buttonText={props.texts.twitterButtonLabel}
              onClick={props.handleTwitterSignIn}
            />
          )}
        </div>
      ) : null}
    </HawaContainer>
  )
}
