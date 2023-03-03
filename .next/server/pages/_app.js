"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,828];
exports.modules = {

/***/ 4449:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
;// CONCATENATED MODULE: ./src/styles/globals.ts

const GlobalStyle = external_styled_components_.createGlobalStyle`
  /************ Custom Font ************/
  @font-face {
    font-family: Centra;
    src: url('/assets/font/CentraNo2-Bold.ttf');
    font-weight: 700;
  }
  @font-face {
    font-family: Centra;
    src: url('/assets/font/CentraNo2-Medium.ttf');
    font-weight: 500;
  }
  @font-face {
    font-family: Centra;
    src: url('/assets/font/CentraNo2-Book.ttf');
    font-weight: 400;
  }

  /************ Default Css ************/
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 75px;
  }

  body {
    font-weight: 400;
    overflow-x: hidden;
    position: relative;
    background-color: #121212 !important;
    color: #fff !important;
    font-family: 'Centra', sans-serif !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
    line-height: normal;
  }

  p,
  a,
  li,
  button,
  ul {
    margin: 0;
    padding: 0;
    line-height: normal;
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  img {
    width: 100%;
    height: auto;
  }

  button {
    border: 0;
    background-color: transparent;
  }

  input:focus,
  textarea:focus,
  select:focus {
    outline: none;
  }

  @media (min-width: 1700px) {
    main .container {
      max-width: 100%;
      padding: 0 150px;
    }
  }

  p.success {
    color: green;
  }

  p.danger {
    color: red;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
      'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`;

;// CONCATENATED MODULE: ./src/pages/_app.tsx


function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(GlobalStyle, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
}


/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4449));
module.exports = __webpack_exports__;

})();