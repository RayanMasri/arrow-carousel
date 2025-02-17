import React from "react";
import { SignUpForm } from "../../../blocks/AuthForms";

export default {
  title: "Blocks/Auth/Sign Up",
  component: [SignUpForm],
  parameters: {
    docs: {
      description: {
        component: "`<SignUpForm/>` Authentication block for user sign up"
      }
    }
  },
  argTypes: {
    direction: {
      default: true,
      control: "select",
      options: ["rtl", "ltr"],
      description: "The direction of the form",
      table: { defaultValue: { summary: "ltr" } }
    },
    viaGoogle: {
      default: true,
      control: "boolean",
      description: "Display the sign in via Google button",
      table: { defaultValue: { summary: true } }
    },
    viaTwitter: {
      default: true,
      control: "boolean",
      description: "Display the sign in via Twitter button",
      table: { defaultValue: { summary: true } }
    },
    viaGithub: {
      default: true,
      control: "boolean",
      description: "Display the sign in via Github button",
      table: { defaultValue: { summary: true } }
    },
    showError: {
      default: false,
      control: "boolean",
      description: "Display the error when auth fails",
      table: { defaultValue: { summary: true } }
    },
    errorTitle: {
      default: " ",
      control: "text",
      description: "The error text for the auth failure",
      table: { defaultValue: { summary: "" } }
    },
    errorText: {
      default: "Something went wrong",
      control: "text",
      description: "The error text for the auth failure",
      table: { defaultValue: { summary: "Something went wrong" } }
    }
  }
};

const SignUpTemplate = (args) => {
  return (
    <SignUpForm
      {...args}
      texts={{
        fullNameLabel: "Full Name",
        fullNamePlaceholder: "Fulan AlFulani",
        fullNameRequiredText: "Full Name is required",
        emailLabel: "Email",
        emailPlaceholder: "Enter your email",
        emailRequiredText: "Email is required",
        emailInvalidText: "Invalid email address",
        usernameLabel: "Username",
        usernamePlaceholder: "Enter your username",
        usernameRequired: " Username is required",
        passwordLabel: "Password",
        passwordPlaceholder: "Minimum 8 characters",
        passwordRequiredText: "Password is required",
        passwordTooShortText: "Password too short",
        subscribeToNewsletter: "Subscribe to newsletter?",
        confirmPasswordLabel: "Confirm Password",
        confirmPasswordPlaceholder: "Minimum 8 characters",
        iAcceptText: "I accept the",
        termsText: "terms & conditions",
        termsRequiredText: "you must accept the terms & conditions",
        forgotPasswordText: "Forgot password?",
        newUserText: "New user?",
        signUpText: "Sign up",
        signInText: "Sign in",
        existingUserText: "Existing User?",
        googleButtonLabel: "Sign up with Google",
        githubButtonLabel: "Sign up with Github",
        twitterButtonLabel: "Sign up with Twitter",
        refCode: "Referral Code"
      }}
      showError={args.showError}
      viaGoogle={args.viaGoogle}
      viaGithub={args.viaGithub}
      signUpFields={["fullname", "username", "email"]}
      viaTwitter={args.viaTwitter}
      handleSignUp={(e) => console.log("singing up via email", e)}
      handleGoogleSignUp={() => console.log("signing up via google")}
      handleGithubSignUp={() => console.log("signing up via github")}
      handleTwitterSignUp={() => console.log("signing up via Twitter")}
      handleRouteToSignIn={() => console.log("switching to sign in")}
      handleRouteToTOS={() => console.log("routing to TOS page")}
    />
  );
};
export const SignUp = SignUpTemplate.bind({});
SignUp.args = {
  viaGoogle: true,
  viaGithub: true,
  viaTwitter: true,
  showUserSource: true,
  showNewsletterOption: true,
  showTermsOption: true,
  showRefCode: true,
  showError: false,
  errorTitle: "Error",
  errorText: "Something went wrong",
  direction: "en"
};
