import React from "react"
import { Controller, useForm } from "react-hook-form"
import { HawaButton, HawaTextField } from "../../elements"
import { HawaContainer } from "../../layout"

type ResetPasswordType = {
  handleResetPassword: () => void
  handleRouteToSignUp: () => void
  sent: any
  texts: {
    emailLabel: string
    emailPlaceholder: string
    emailRequiredText: string
    emailInvalidText: string
    emailSentText: string
    resetPassword: string
    signUpText: string
    dontHaveAccount: string
  }
}

export const ResetPasswordForm: React.FunctionComponent<ResetPasswordType> = (
  props
) => {
  const methods = useForm()
  const {
    formState: { errors },
    handleSubmit,
    register,
    control,
  } = methods
  return (
    <HawaContainer>
      {!props.sent ? (
        <form onSubmit={handleSubmit(props.handleResetPassword)}>
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
          <div className=" pb-2 text-left text-sm dark:text-gray-300">
            {props.texts.dontHaveAccount ?? "Don't have an account? "}
            <span
              onClick={props.handleRouteToSignUp}
              className="cursor-pointer text-blue-600 dark:text-blue-400"
            >
              {props.texts.signUpText ?? "Sign Up"}
            </span>
          </div>
          <HawaButton
            color="primary"
            width="full"
            // type="submit"
          >
            {props.texts.resetPassword}
          </HawaButton>
        </form>
      ) : (
        <div className="text-center">{props.texts.emailSentText}</div>
      )}
    </HawaContainer>
  )
}
