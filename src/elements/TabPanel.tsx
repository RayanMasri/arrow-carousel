import React from "react"

// const useStyles = makeStyles((theme) => ({
//   panelsContainer: {
//     height: "100%",
//     width: "100%"
//   },
//   panel: {
//     backgroundColor: "var(--lightGrey)",
//     height: "100%",
//     width: "100%",
//     padding: 10
//   }
// }));

type TabPanelTypes = {
  children: any
  value: any
  index: any
}
export const TabPanel: React.FunctionComponent<TabPanelTypes> = (props) => {
  const { children, value, index, ...other } = props
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div>
          <span>{children}</span>
        </div>
      )}
    </div>
  )
}
