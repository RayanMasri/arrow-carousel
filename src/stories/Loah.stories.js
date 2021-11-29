import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { Hawa } from "../components/Hawa/Hawa";
import { StyledCheckbox } from "../components/Hawa/Checkbox/Checkbox";
import { AutoCompleteField } from "../components/Hawa/AutoCompleteField/AutoCompleteField";
import { StyledInputLabel } from "../components/Hawa/InputLabel/StyledInputLabel";
import { StyledTextArea } from "../components/Hawa/TextArea/TextArea";
import { StyledTextField } from "../components/Hawa/TextField/TextField";
import { FormProvider, useForm } from "react-hook-form";
import "../styles.css";

const stories = storiesOf("Hawa", module);

stories.add("Light", () => {
  const [currentPage, setCurrentPage] = useState("books");
  const buttons = [
    {
      name: "Users",
      // icon: <AddAlertIcon />,
      slug: "users",
      action: () => setCurrentPage("users")
    }
    // {
    //   name: "Menus",
    //   icon: <AllInbox />,
    //   slug: "menus",
    //   action: () => setCurrentPage("menus")
    // },
    // {
    //   name: "Books",
    //   icon: <Assignment />,
    //   slug: "books",
    //   action: () => setCurrentPage("books")
    // },
    // {
    //   name: "Items",
    //   icon: <Assessment />,
    //   slug: "items",
    //   action: () => setCurrentPage("items")
    // },
    // {
    //   name: "Add Alert",
    //   icon: <Ballot />,
    //   slug: "alert",
    //   action: () => setCurrentPage("alert")
    // },
    // {
    //   name: "Coins",
    //   icon: <Class />,
    //   slug: "coins",
    //   action: () => setCurrentPage("coins")
    // },

    // {
    //   name: "Tokens",
    //   slug: "tokens",
    //   icon: <Bolt />,
    //   action: () => setCurrentPage("tokens")
    // },
    // { name: "Repos" }
  ];

  return (
    <Hawa
      activeItem={currentPage}
      // expandIcon={"🔵"}
      // bgColor={"red"}
      // textColor={"yellow"}
      // showAvatar={true}
      // content={"test"}
      footer={"v2.12.11"}
      // direction={"right"}
      buttons={buttons}
    />
  );
});

export default {
  title: "test",
  component: [StyledCheckBox, StyledTextFieldT, StyledTextAreaT],
  argTypes : {
    resize : {
      options: ['vertical', 'horizontal', "both"],
      control: { type: 'radio' },
    }
  }
};

/****************************/
// STYLED CHECKBOX TEMPLATE
const StyledCheckBoxTemplate = (args) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <StyledCheckbox {...args} />
    </FormProvider>
  );
};
export const StyledCheckBox = StyledCheckBoxTemplate.bind({});
StyledCheckBox.args = {
  name: "checkbox",
  label: "CheckBox",
  color: "blue",
  rules: { required: true },
  defaultValue: true
};
/****************************/

/****************************/
// STYLED TextField TEMPLATE
const StyledTextFieldTemplate = (args) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <StyledTextField {...args} />
    </FormProvider>
  );
};

export const StyledTextFieldT = StyledTextFieldTemplate.bind({});
StyledTextFieldT.args = {
  name: "styledtextfield",
  inputLabel: "Label",
  bdRadius: 12,
  bgColor: "lightgray",
  helperText: "This is HelperText",
  type: "text",
  placeholder: "exemple ..."
};
/****************************/

/****************************/
// STYLED TextField TEMPLATE
const StyledTextAreaTemplete = (args) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <StyledTextArea {...args} />
    </FormProvider>
  );
};

export const StyledTextAreaT = StyledTextAreaTemplete.bind({});
StyledTextAreaT.args = {
  name: "textarea",
  inputLabel: "styledTextArea",
  bgColor : "lightgray",
  bdRadius: 12,
  rules: { required: "This is required" },
  shouldUnregister: true,
  resize : "vertical"
};
/****************************/
