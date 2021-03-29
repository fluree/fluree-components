# @fluree/mui-theme

![npm bundle size](https://img.shields.io/bundlephobia/min/@fluree/mui-theme?style=plastic)
![npm (scoped)](https://img.shields.io/npm/v/@fluree/mui-theme?style=plastic)

## Installation

> `npm i @fluree/mui-theme --save`

## Usage

```js
import themeObject from "@fluree/mui-theme";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const App = () => {
  const flureeTheme = createMuiTheme(themeObject);
  return (
    <div>
      <ThemeProvider theme={flureeTheme}>
        <RestOfApp />
      </ThemeProvider>
    </div>
  );
};
```
