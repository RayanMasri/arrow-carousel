import React from "react";
import { HawaTextField, ActionButton } from "../../ui";
import { Box } from "../../layout";
import { FormProvider, useForm } from "react-hook-form";

export const CreditCardForm = (props) => {
  const methods = useForm();
  const {
    formState: { errors },
    handleSubmit
  } = methods;

  return (
    <Box maxWidth={400} noColor noMargin noPadding>
      <Box noMargin>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(props.handle)}>
            <HawaTextField
              name="password"
              placeholder="Enter password"
              type="password"
              inputLabel="Password"
              // startAdornment={
              //   <InputAdornment position="start">
              //     <PasswordIcon />
              //   </InputAdornment>
              // }
              rules={{
                required: "Password is rquired"
              }}
              helperText={errors.password?.message}
            />

            <HawaTextField
              name="password"
              placeholder="Enter password"
              type="password"
              inputLabel="Password"
              // startAdornment={
              //   <InputAdornment position="start">
              //     <PasswordIcon />
              //   </InputAdornment>
              // }
              rules={{
                required: "Password is rquired"
              }}
              helperText={errors.password?.message}
            />
            <ActionButton
              last
              fullWidth
              text={"Sign In"}
              onClick={props.handleSignIn}
            />
          </form>
        </FormProvider>
      </Box>
    </Box>
  );
};
