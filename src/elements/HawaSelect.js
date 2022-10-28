import React from "react";

export const HawaSelect = (props) => {
  return (
    <div style={{ width: "100%" }}>
      <label
        for="first_name"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {props.label}
      </label>

      {/* <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >

        {props.helperText && (
          <Typography variant="validation">{props.helperText}</Typography>
        )}
      </div> */}
      {/* <Select {...props}>{props.children}</Select> */}

      <select
        id="countries"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {props.children}
      </select>
    </div>
  );
};
