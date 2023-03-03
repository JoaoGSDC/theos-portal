"use strict";
exports.id = 232;
exports.ids = [232];
exports.modules = {

/***/ 7232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Content": () => (/* binding */ Content),
/* harmony export */   "Informations": () => (/* binding */ Informations),
/* harmony export */   "LeftContent": () => (/* binding */ LeftContent),
/* harmony export */   "OportunitiesContent": () => (/* binding */ OportunitiesContent),
/* harmony export */   "OportunitiesSection": () => (/* binding */ OportunitiesSection),
/* harmony export */   "RightContent": () => (/* binding */ RightContent)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const OportunitiesSection = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().section)`
  width: 100vw;
  height: 100vh;
  background-image: url('/assets/img/banner-bg.png');

  form {
    display: flex;
    padding: 16px 16px 0px 8px;
    justify-content: center;
    align-items: center;

    input,
    textarea {
      width: 100%;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-radius: 20px;
      color: #fff;
      margin: 0 0 8px 0;
      padding: 18px 26px;
      font-weight: 500;
      font-size: 18px;
      letter-spacing: 0.8px;
      transition: 0.3s ease-in-out;

      &:focus {
        background: rgba(255, 255, 255, 1);
        color: #121212;

        &::placeholder {
          color: #121212;
          opacity: 0.8;
        }
      }

      &::placeholder {
        font-size: 16px;
        font-weight: 400;
        color: #fff;
      }
    }
  }

  button {
    font-weight: 700;
    color: #000;
    background-color: #fff;
    padding: 14px 48px;
    font-size: 18px;
    margin-left: 8px;
    border-radius: 0;
    position: relative;
    transition: 0.3s ease-in-out;

    span {
      z-index: 1;
      position: relative;
    }

    &:hover {
      cursor: pointer;
      background: #121212;
      transition: 0.3s ease-in-out;
      color: #fff !important;

      &:before {
        width: 100%;
      }
    }
  }
`;
const Content = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    margin-top: 16px;
  }
`;
const Informations = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;

  h5:first-child {
    &:after {
      content: '|';
      margin: 0px 8px;
    }
  }
`;
const OportunitiesContent = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
`;
const LeftContent = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
  flex-direction: column;
  width: 25%;
`;
const RightContent = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
  width: 100%;

  div:first-child {
    width: calc(100% - 24px);
  }
`;


/***/ })

};
;