import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ThemeProvider as Emotion10ThemeProvider } from "emotion-theming";
import { darken, lighten } from "@mui/material";

const getTextColor = (backColor) => {
  let rgbText = hexToRgb(backColor);
  let slicedRGBText = rgbText.slice(4, -1);
  let rgbArray = slicedRGBText.split(",");
  if (rgbArray[0] * 0.299 + rgbArray[1] * 0.587 + rgbArray[2] * 0.114 > 186) {
    return "#000000";
  } else {
    return "#ffffff";
  }
};
let allBorderRadius = 10;
let primaryActionColor = "#4062bb";
let primaryLayoutColor = "#E0E7F5";
// let primaryActionTextColor = getTextColor(primaryActionColor);
let primaryActionTextColor = "#ffffff";
const defaultTheme = createTheme({
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          marginBottom: 10,
          marginTop: 10,
          fontSize: 15
        }
      }
    },
    MuiFormControl: {
      variants: [
        {
          props: { variant: "hawa" },
          style: { width: "100%" }
        }
      ]
    },
    MuiInputBase: {
      styleOverrides: {
        root: { backgroundColor: "lightblue", borderRadius: allBorderRadius }
      }
    },
    MuiInput: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          padding: 10,
          borderRadius: allBorderRadius
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: { borderRadius: allBorderRadius, marginTop: 10 }
      },
      variants: [
        {
          props: { variant: "hawa" },
          style: {
            backgroundColor: primaryLayoutColor,
            fontSize: "2rem",
            padding: 30,
            borderRadius: allBorderRadius
          }
        }
      ]
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          backgroundColor: primaryLayoutColor,
          borderRadius: allBorderRadius,
          paddingLeft: 20,
          paddingRight: 20,
          padding: 20
        }
      },
      variants: [
        {
          props: { variant: "auth" },
          style: {
            backgroundColor: primaryLayoutColor,
            fontSize: "2rem",
            padding: 30,
            borderRadius: allBorderRadius
          }
        },
        {
          props: { variant: "plain" },
          style: { background: "none" }
        },
        {
          props: { variant: "dashed", color: "secondary" },
          style: { border: `4px dashed red` }
        },
        {
          props: { variant: "panelTabs" },
          style: {
            display: "flex",
            flexDirection: "row",
            width: "fit-content",
            justifyContent: "space-between",
            backgroundColor: primaryLayoutColor,
            alignItems: "center",
            paddingLeft: "10px !important",
            paddingRight: "10px !important",
            padding: 10
          }
        },
        {
          props: { variant: "inSettings" },
          style: {
            display: "flex",
            flexDirection: "row",
            width: "fit-content",
            // justifyContent: "space-between",
            height: 50,
            marginRight: 0,
            backgroundColor: "white",
            padding: 5,
            // alignItems: "center",
            paddingLeft: "5px !important",
            paddingRight: "5px !important"
            // padding: 10
          }
        },
        {
          props: { variant: "settingsRow" },
          style: {
            display: "flex",
            flexDirection: "row",
            borderRadius: allBorderRadius,
            // width: "fit-content",
            backgroundColor: lighten(primaryLayoutColor, 0.4),
            justifyContent: "space-between",
            alignItems: "center",
            height: 70,
            marginTop: 10,
            paddingLeft: "20px !important",
            paddingRight: "10px !important"
            // padding: 10
          }
        }
      ]
    },
    MuiButton: {
      styleOverrides: {
        root: { textTransform: "uppercase" },
        contained: { backgroundColor: primaryActionColor }
      },
      variants: [
        {
          props: { variant: "last" },
          style: {
            backgroundColor: primaryActionColor,
            color: primaryActionTextColor,
            padding: 10,
            marginTop: 20,
            borderRadius: allBorderRadius,
            "&:hover": {
              backgroundColor: darken(primaryActionColor, 0.5),
              color: "white"
            }
          }
        },
        {
          props: { variant: "withLogo" },
          style: {
            textTransform: "none",
            border: `1px solid ${darken(primaryActionColor, 0.1)}`,
            fontSize: "2rem",
            backgroundColor: "white",
            marginTop: 10,
            padding: 10,
            height: 50,
            borderRadius: allBorderRadius
          }
        },
        {
          props: { variant: "selected" },
          style: {
            display: "flex",
            flexDirection: "row",
            width: "fit-content",
            backgroundColor: primaryActionColor,
            justifyContent: "space-between",
            alignItems: "center",
            // padding: 15,
            margin: 0,
            color: "white",
            borderRadius: allBorderRadius,
            "&:hover": {
              backgroundColor: darken(primaryActionColor, 0.5),
              color: "white"
            }
          }
        },
        {
          props: { variant: "unselected" },
          style: {
            display: "flex",
            flexDirection: "row",
            width: "fit-content",
            // backgroundColor: primaryActionColor,
            background: "none",
            justifyContent: "space-between",
            alignItems: "center",
            // padding: 15,
            margin: 0,
            borderRadius: allBorderRadius
          }
        }
      ]
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: allBorderRadius
        }
      }
    }
  }
});

const withThemeProvider = (Story, context) => {
  return (
    <Emotion10ThemeProvider theme={defaultTheme}>
      <ThemeProvider theme={defaultTheme}>
        <Story {...context} />
      </ThemeProvider>
    </Emotion10ThemeProvider>
  );
};

export const decorators = [withThemeProvider];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  options: {
    storySort: {
      order: [
        "Blocks",
        [
          "Auth",
          ["Sign In", "Sign Up", "Reset Password", "New Pasword"],
          "Account",
          ["User Profile", "User Settings"],
          "Payment",
          ["Payment Selection", "User Settings"]
        ]
      ]
    }
  }
};

