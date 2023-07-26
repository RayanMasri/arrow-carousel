import React from "react"
import { storiesOf } from "@storybook/react"
import { LinkTo, linkTo } from "@storybook/addon-links"
import "../stories-styles.css"

const ThemeIntroduction = () => {
  const codeSnippet = `
:root {
    /* Primary Layout Colors */
    --layout-primary-700: #b7aff7;
    --layout-primary-500: #dfdcfc;
    --layout-primary-300: #e7e5fa;

    /* Secondary Layout Colors */
    --layout-secondary: #d2cdfa;

    /* Primary Button Colors */
    --button-primary-300: #6555e3;
    --button-primary-500: #4c37eb;
    --button-primary-700: #2e1dac;

    /* Secondary Button Colors */
    --button-secondary-500: #ffc011;
    --button-secondary-700: #b48d24;

    /* Global Border Radius */
    --border-radius: 10px;
}`
  return (
    <div>
      <style>
        {`
.subheading {
    --mediumdark: '#999999';
    font-weight: 900;
    font-size: 13px;
    color: #999;
    letter-spacing: 6px;
    line-height: 24px;
    text-transform: uppercase;
    margin-bottom: 12px;
    margin-top: 40px;
  }
  .link-list {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 10px;
  }
  @media (min-width: 620px) {
    .link-list {
      row-gap: 20px;
      column-gap: 20px;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media all and (-ms-high-contrast:none) {
  .link-list {
      display: -ms-grid;
      -ms-grid-columns: 1fr 1fr;
      -ms-grid-rows: 1fr 1fr;
    }
  }

  .link-item {
    display: block;
    padding: 20px 30px 20px 15px;
    border: 1px solid #00000010;
    border-radius: 5px;
    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
    color: #333333;
    display: flex;
    flex-direction:column;
    align-items: flex-start;
  }

  .link-item:hover {
    border-color: #1EA7FD50;
    transform: translate3d(0, -3px, 0);
    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
  }

  .link-item:active {
    border-color: #1EA7FD;
    transform: translate3d(0, 0, 0);
  }

  .link-item strong {
    font-weight: 700;
    display: block;
    margin-bottom: 2px;
  }
  
  .link-item img {
    height: 40px;
    width: 40px;
    margin-right: 15px;
    flex: none;
  }

  .link-item span {
    font-size: 14px;
    line-height: 20px;
  }

  .tip {
    display: inline-block;
    border-radius: 1em;
    font-size: 11px;
    line-height: 12px;
    font-weight: 700;
    background: #E7FDD8;
    color: #66BF3C;
    padding: 4px 12px;
    margin-right: 10px;
    vertical-align: top;
  }

  .tip-wrapper {
    font-size: 13px;
    line-height: 20px;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .tip-wrapper code {
    font-size: 12px;
    display: inline-block;
  }

  
`}
      </style>
      # Theme Configuration
      <div className="tip-wrapper">
        <span className="tip">Notice</span>This page is still in progress.
      </div>
      If you want to customize the entirety of Hawa UI kit with a few lines of
      code, you can do so by changing the colors, and the border radius. In
      order to customize Hawa, you can do so using one of the following methods:
      <br />
      Method 1:
      <br />
      Overwrite the `root:` global variables in your project css file. The
      variables are as follows:
      {/* <pre className="rounded bg-gray-200 p-6 text-xs"> */}
      <pre className="my-4 items-center space-x-4 rounded-lg bg-gray-800 p-4 pl-6 text-left text-sm text-white sm:text-base">
        <code>{codeSnippet}</code>
      </pre>{" "}
      <br />
      Method 2:
      <br />
      Copy the content of Hawa
      <a
        className="mx-1 text-blue-600"
        href="https://github.com/sikka-software/Hawa/blob/main/tailwind.config.js"
      >
        tailwind.config.js
      </a>
      and use it in your project tailwind configuration file. And you can
      replace the global variables with your own static values. Or simply using
      the first method
    </div>
  )
}

storiesOf("Getting Started / Customization", module)
  .addParameters({
    docs: {
      page: () => <ThemeIntroduction />,
    },
    docsOnly: true,
  })
  .add("Getting Started / Customization", () => <ThemeIntroduction />)
