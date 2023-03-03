"use strict";
(() => {
var exports = {};
exports.id = 697;
exports.ids = [697,828];
exports.modules = {

/***/ 6044:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Oportunities)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/Card/styles.ts

const GlassCard = (external_styled_components_default()).div`
  padding: 16px;
  margin: 8px;
  background: rgba(18, 18, 18, 0.6);
  box-shadow: 0 8px 8px 0 rgba(31, 38, 135, 0.08);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

;// CONCATENATED MODULE: ./src/components/Card/index.tsx


const Card = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(GlassCard, {
        children: children
    });
};

// EXTERNAL MODULE: ./src/pages/oportunidades/styles.ts
var styles = __webpack_require__(7232);
;// CONCATENATED MODULE: ./src/pages/oportunidades/index.tsx



function Oportunities() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles.OportunitiesSection, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "text",
                            placeholder: "Digite o nome da oportunidade"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "button",
                            children: "FILTRAR"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles.OportunitiesContent, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles.LeftContent, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Card, {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles.Content, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: "Desenvolvedor FrontEnd Senior"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles.Informations, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                        children: "ByCross Software"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                        children: "Limeira-SP"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                children: "At\xe9 R$ 14.000,00"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur leo velit, scelerisque vitae lobortis sed, condimentum a justo..."
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Card, {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles.Content, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: "Desenvolvedor FrontEnd Senior"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles.Informations, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                        children: "ByCross Software"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                        children: "Limeira-SP"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                children: "At\xe9 R$ 14.000,00"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur leo velit, scelerisque vitae lobortis sed, condimentum a justo..."
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Card, {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles.Content, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: "Desenvolvedor FrontEnd Senior"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles.Informations, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                        children: "ByCross Software"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                        children: "Limeira-SP"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                children: "At\xe9 R$ 14.000,00"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur leo velit, scelerisque vitae lobortis sed, condimentum a justo..."
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(styles.RightContent, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Card, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    children: "Nenhuma oportunidade selecionada."
                                })
                            })
                        })
                    ]
                })
            ]
        })
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
var __webpack_exports__ = __webpack_require__.X(0, [232], () => (__webpack_exec__(6044)));
module.exports = __webpack_exports__;

})();