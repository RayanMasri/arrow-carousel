import React from "react";
import { Box } from "../../layout";
import { HawaProvider, defaultTheme } from "../../themes/HawaProvider";
const theme = {
  ...defaultTheme
};

const Template = (args) => {
  return (
    <HawaProvider size={args.size} themeName={"secondary"}>
      <Box>Box 1</Box>
      <Box>
        <div style={{ backgroundColor: "white", padding: 10, color: "black" }}>
          testing box in box
        </div>
      </Box>
      <Box>Box 3</Box>
    </HawaProvider>
  );
};
export default {
  title: "Layout/Box",
  component: <Box />,
  parameters: {
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: theme.lightBackground },
        { name: "dark", value: theme.darkBackground }
      ]
    }
  }
};

export const Normal = Template.bind({});
Normal.args = {
  size: "large",
  showText: true,
  buttonLabel: "test",
  borderRadius: 5,
  padding: theme.paddings,
  textColor: "#000000",
  buttonColor: "#f9f9f9"
};
export const Compact = Template.bind({});
Compact.args = {
  size: "small",
  showText: true,
  buttonLabel: "test",
  theme: {
    borderRadius: 5,
    paddings: theme.paddings / 2,
    textColor: "#000000",
    buttonColor: "#f9f9f9"
  }
};
