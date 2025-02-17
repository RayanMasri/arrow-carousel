import React from "react";
import { Newsletter as NewsletterBlock } from "../../../blocks/Misc";

export default {
  title: "Blocks/Misc/Newsletter",
  component: [Newsletter],
  parameters: {
    docs: {
      description: {
        component: "`<SignInForm/>` Authentication block for user sign in"
      }
    }
  },
  argTypes: {
    lang: {
      default: true,
      control: "select",
      options: ["ar", "en"],
      description: "The language of the form",
      table: { defaultValue: { summary: "en" } }
    },
    handleSubmitNewsletter: {
      action: "Redirecting to home page",
      description: "Directing user to home page"
    }
  }
};

export const Newsletter = (args) => {
  return (
    <NewsletterBlock
      handleNewsletterSub={(e) =>
        console.log(`${e} have subscribed to the newsletter`)
      }
      {...args}
    />
  );
};

Newsletter.args = {
  texts: {
    submit: "Submit",
    wantToStayUpdated: "Want to stay updated?",
    subscribeToNewsletter: "Subscribe to our newsletter"
  }
};
