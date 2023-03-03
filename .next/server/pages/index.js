"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,828];
exports.modules = {

/***/ 2192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "j": () => (/* binding */ Banner)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
;// CONCATENATED MODULE: external "react-bootstrap-icons"
const external_react_bootstrap_icons_namespaceObject = require("react-bootstrap-icons");
// EXTERNAL MODULE: ./node_modules/animate.css/animate.css
var animate = __webpack_require__(5544);
// EXTERNAL MODULE: external "react-on-screen"
var external_react_on_screen_ = __webpack_require__(337);
var external_react_on_screen_default = /*#__PURE__*/__webpack_require__.n(external_react_on_screen_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/Banner/styles.ts

const BannerSection = (external_styled_components_default()).section`
  margin-top: 0;
  padding: 260px 0 100px 0;
  background-image: url('/assets/img/banner-bg.png');
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;

  h1 {
    font-size: 65px;
    font-weight: 700;
    letter-spacing: 0.8px;
    line-height: 1;
    margin-bottom: 20px;
    display: block;
  }

  p {
    color: #b8b8b8;
    font-size: 18px;
    letter-spacing: 0.8px;
    line-height: 1.5em;
    width: 96%;
  }

  button {
    color: #fff;
    font-weight: 700;
    font-size: 20px;
    margin-top: 60px;
    letter-spacing: 0.8px;
    display: flex;
    align-items: center;

    svg {
      font-size: 25px;
      margin-left: 10px;
      transition: 0.3s ease-in-out;
      line-height: 1;
    }

    &:hover svg {
      margin-left: 25px;
    }
  }

  img {
    animation: updown 3s linear infinite;
  }

  @keyframes updown {
    0% {
      transform: translateY(-20px);
    }
    50% {
      transform: translateY(20px);
    }
    100% {
      transform: translateY(-20px);
    }
  }

  @media only screen and (max-width: 600px) {
    padding: 80px 0 100px 0;
  }
`;
const Tagline = (external_styled_components_default()).span`
  font-weight: 700;
  letter-spacing: 0.8px;
  padding: 8px 10px;
  background: linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%);
  border: 1px solid rgba(255, 255, 255, 0.5);
  font-size: 20px;
  margin-bottom: 16px;
  display: inline-block;
`;

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Banner/index.tsx








const Banner = ()=>{
    const [loopNum, setLoopNum] = (0,external_react_.useState)(0);
    const [isDeleting, setIsDeleting] = (0,external_react_.useState)(false);
    const [text, setText] = (0,external_react_.useState)("");
    const [delta, setDelta] = (0,external_react_.useState)(300 - Math.random() * 100);
    const [index, setIndex] = (0,external_react_.useState)(1);
    const toRotate = [
        "Web Developer",
        "Web Designer",
        "UI/UX Designer"
    ];
    const period = 2000;
    const headerImg = "/assets/img/header-img.svg";
    (0,external_react_.useEffect)(()=>{
        let ticker = setInterval(()=>{
            tick();
        }, delta);
        return ()=>{
            clearInterval(ticker);
        };
    }, [
        text
    ]);
    const tick = ()=>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);
        if (isDeleting) {
            setDelta((prevDelta)=>prevDelta / 2);
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex((prevIndex)=>prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex((prevIndex)=>prevIndex + 1);
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(BannerSection, {
        id: "home",
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                        xs: 12,
                        md: 6,
                        xl: 7,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_on_screen_default()), {
                            children: ({ isVisible  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: isVisible ? "animate__animated animate__fadeIn" : "",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Tagline, {
                                            children: "Encontre a vaga perfeita para voc\xea!"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            children: "Seja bem vindo ao portal de vagas!"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Nesse universo de oportunidades voc\xea poder\xe1 encontrar o trabalho perfeito para voc\xea! Voc\xea pode se interligar com todas as oportunidades dos clientes ByCross Software ou acessar a p\xe1gina de algum de nossos clientes para ver vagas de empresas espec\xedficas!"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/oportunidades",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                onClick: ()=>console.log("connect"),
                                                children: [
                                                    "Conferir oportunidades ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_icons_namespaceObject.ArrowRightCircle, {
                                                        size: 25
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                        xs: 12,
                        md: 6,
                        xl: 5,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_on_screen_default()), {
                            children: ({ isVisible  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: isVisible ? "animate__animated animate__zoomIn" : "",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: headerImg,
                                        alt: "Header Img"
                                    })
                                })
                        })
                    })
                ]
            })
        })
    });
};


/***/ }),

/***/ 9042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "r": () => (/* binding */ Contact)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react-on-screen"
var external_react_on_screen_ = __webpack_require__(337);
var external_react_on_screen_default = /*#__PURE__*/__webpack_require__.n(external_react_on_screen_);
;// CONCATENATED MODULE: ./src/components/Contact/styles.ts


const ContactSection = (external_styled_components_default()).section`
  background: linear-gradient(90.21deg, #aa367c -5.91%, #4a2fbd 111.58%);
  padding: 60px 0 200px 0;

  img {
    width: 92%;
  }

  h2 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 30px;
  }

  form {
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

    button {
      font-weight: 700;
      color: #000;
      background-color: #fff;
      padding: 14px 48px;
      font-size: 18px;
      margin-top: 25px;
      border-radius: 0;
      position: relative;
      transition: 0.3s ease-in-out;

      span {
        z-index: 1;
        position: relative;
      }

      &:hover {
        color: #fff;

        &:before {
          width: 100%;
        }
      }

      &:before {
        content: '';
        background: #121212;
        width: 0;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        transition: 0.3s ease-in-out;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    h2 {
      font-size: 2rem;
      text-align: center;
      margin-top: 16px;
    }
  }
`;
const TrackVisibility = external_styled_components_default()((external_react_on_screen_default()))`
  @media only screen and (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

// EXTERNAL MODULE: ./node_modules/animate.css/animate.css
var animate = __webpack_require__(5544);
;// CONCATENATED MODULE: ./src/components/Contact/index.tsx





const contactImg = "/assets/img/contact-img.svg";
const Contact = ()=>{
    const formInitialDetails = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    };
    const [formDetails, setFormDetails] = (0,external_react_.useState)(formInitialDetails);
    const [buttonText, setButtonText] = (0,external_react_.useState)("Enviar");
    const [status, setStatus] = (0,external_react_.useState)({});
    const onFormUpdate = (category, value)=>{
        setFormDetails({
            ...formDetails,
            [category]: value
        });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setButtonText("Enviando...");
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(formDetails)
        });
        setButtonText("Enviar");
        let result = await response.json();
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
            setStatus({
                succes: true,
                message: "Mensagem enviada com sucesso!"
            });
        } else {
            setStatus({
                succes: false,
                message: "Algo deu errado, por favor tente de novo."
            });
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(ContactSection, {
        id: "connect",
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                        size: 12,
                        md: 6,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(TrackVisibility, {
                            children: ({ isVisible  })=>/*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: isVisible ? "animate__animated animate__zoomIn" : "",
                                    src: contactImg,
                                    alt: "Contact Us"
                                })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                        size: 12,
                        md: 6,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(TrackVisibility, {
                            children: ({ isVisible  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: isVisible ? "animate__animated animate__fadeIn" : "",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            children: "Seja um parceiro!"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                            onSubmit: handleSubmit,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                                        size: 12,
                                                        sm: 6,
                                                        className: "px-1",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "text",
                                                            value: formDetails.firstName,
                                                            placeholder: "Nome completo",
                                                            onChange: (e)=>onFormUpdate("firstName", e.target.value)
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                                        size: 12,
                                                        sm: 6,
                                                        className: "px-1",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "text",
                                                            value: formDetails.lastName,
                                                            placeholder: "Empresa",
                                                            onChange: (e)=>onFormUpdate("lastName", e.target.value)
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                                        size: 12,
                                                        sm: 6,
                                                        className: "px-1",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "email",
                                                            value: formDetails.email,
                                                            placeholder: "E-mail",
                                                            onChange: (e)=>onFormUpdate("email", e.target.value)
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                                        size: 12,
                                                        sm: 6,
                                                        className: "px-1",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "tel",
                                                            value: formDetails.phone,
                                                            placeholder: "WhatsApp",
                                                            onChange: (e)=>onFormUpdate("phone", e.target.value)
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                                        size: 12,
                                                        className: "px-1",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                                                rows: 6,
                                                                value: formDetails.message,
                                                                placeholder: "Mensagem",
                                                                onChange: (e)=>onFormUpdate("message", e.target.value)
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                type: "submit",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: buttonText
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    status.message && /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: status.success === false ? "danger" : "success",
                                                            children: status.message
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                        })
                    })
                ]
            })
        })
    });
};


/***/ }),

/***/ 451:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": () => (/* binding */ Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
;// CONCATENATED MODULE: external "react-mailchimp-subscribe"
const external_react_mailchimp_subscribe_namespaceObject = require("react-mailchimp-subscribe");
var external_react_mailchimp_subscribe_default = /*#__PURE__*/__webpack_require__.n(external_react_mailchimp_subscribe_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/Newsletter/styles.ts


const NewsletterBx = (external_styled_components_default()).div`
  background: #ffffff;
  border-radius: 55px;
  color: #121212;
  padding: 88px 128px;
  margin-bottom: 80px;
  margin-top: -122px;

  h3 {
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 1.2em;
  }

  @media only screen and (max-width: 600px) {
    padding: 88px 32px;
    margin-bottom: 40px;
  }

  @media only screen and (max-width: 1000px) {
    padding: 88px 32px;
    margin-bottom: 40px;
  }
`;
const Fields = external_styled_components_default()(external_react_bootstrap_.Col)`
  flex: 1;
`;
const NewEmailBx = (external_styled_components_default()).div`
  background: #fff;
  padding: 5px;
  border-radius: 20px;
  position: relative;
  z-index: 0;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    color: #121212;
    font-weight: 500;
    background: transparent;
    border: 0;
    padding: 0 15px;
    flex: 1;
  }

  button {
    background: linear-gradient(90.21deg, #aa367c -5.91%, #4a2fbd 111.58%);
    padding: 20px 65px;
    color: #fff;
    font-weight: 500;
    letter-spacing: 0.5px;
    border-radius: 18px;
  }

  &:before {
    content: '';
    background: linear-gradient(90.21deg, #aa367c -5.91%, #4a2fbd 111.58%);
    border-radius: 20px;
    position: absolute;
    z-index: -1;
    top: -1px;
    left: -1px;
    bottom: -1px;
    right: -1px;
  }

  &:after {
    content: '';
    background: #fff;
    border-radius: 20px;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    margin-top: 32px;

    input {
      padding: 24px;
    }

    button {
      width: 100%;
    }
  }
`;

;// CONCATENATED MODULE: ./src/components/Newsletter/index.tsx




const Newsletter = ({ status , message , onValidated  })=>{
    const [email, setEmail] = (0,external_react_.useState)("");
    (0,external_react_.useEffect)(()=>{
        if (status === "success") clearFields();
    }, [
        status
    ]);
    const handleSubmit = (e)=>{
        e.preventDefault();
        email && email.indexOf("@") > -1 && onValidated({
            EMAIL: email
        });
    };
    const clearFields = ()=>{
        setEmail("");
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
        lg: 12,
        children: /*#__PURE__*/ jsx_runtime_.jsx(NewsletterBx, {
            className: "wow slideInUp",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                        lg: 12,
                        md: 6,
                        xl: 5,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "Inscreva-se na nossa Newsletter e fique por dentro do mundo tech"
                            }),
                            status === "sending" && /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Alert, {
                                children: "Enviando..."
                            }),
                            status === "error" && /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Alert, {
                                variant: "danger",
                                children: message
                            }),
                            status === "success" && /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Alert, {
                                variant: "success",
                                children: message
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Fields, {
                        md: 6,
                        xl: 7,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                            onSubmit: handleSubmit,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NewEmailBx, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        value: email,
                                        type: "email",
                                        onChange: (e)=>setEmail(e.target.value),
                                        placeholder: "E-mail"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        type: "submit",
                                        children: "Enviar"
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./src/components/MailchimpForm/index.tsx



const MailchimpForm = ()=>{
    const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_mailchimp_subscribe_default()), {
            url: postUrl,
            render: ({ subscribe , status , message  })=>/*#__PURE__*/ jsx_runtime_.jsx(Newsletter, {
                    status: status,
                    message: message,
                    onValidated: (formData)=>subscribe(formData)
                })
        })
    });
};

// EXTERNAL MODULE: ./src/components/styles.ts
var styles = __webpack_require__(4078);
;// CONCATENATED MODULE: ./src/components/Footer/stytles.ts


const FooterContainer = (external_styled_components_default()).footer`
  padding: 0 0 50px 0;
  background-image: url('/assets/img/footer-bg.png');
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  font-weight: 400;
  font-size: 14px;
  color: #b8b8b8;
  letter-spacing: 0.5px;
  margin-top: 20px;

  img {
    width: 50%;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    color: #b8b8b8;
    letter-spacing: 0.5px;
    margin-top: 20px;
  }
`;
const ImgContainer = external_styled_components_default()(external_react_bootstrap_.Col)`
  @media only screen and (max-width: 600px) {
    display: flex;
    justify-content: center;

    img {
      width: 75%;
    }
  }
`;

;// CONCATENATED MODULE: ./src/components/Footer/index.tsx





const logo = "/assets/imgs/logo_bycross.png";
const navIcon1 = "/assets/img/nav-icon1.svg";
const navIcon2 = "/assets/img/nav-icon2.svg";
const navIcon3 = "/assets/img/nav-icon3.svg";
const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(FooterContainer, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                className: "align-items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(MailchimpForm, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(ImgContainer, {
                        size: 12,
                        sm: 6,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: logo,
                            alt: "Logo"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                        size: 12,
                        sm: 6,
                        className: "text-center text-sm-end",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles/* SocialIcon */.Q, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://www.linkedin.com/company/bycross-software",
                                        target: "_blank",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: navIcon1,
                                            alt: "Icon"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#",
                                        target: "_blank",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: navIcon2,
                                            alt: "Icon"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#",
                                        target: "_blank",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: navIcon3,
                                            alt: "Icon"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Copyright 2023. Todos os direitos reservados."
                            })
                        ]
                    })
                ]
            })
        })
    });
};


/***/ }),

/***/ 4630:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "l": () => (/* binding */ NavBar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
;// CONCATENATED MODULE: external "react-scroll"
const external_react_scroll_namespaceObject = require("react-scroll");
// EXTERNAL MODULE: ./src/components/styles.ts
var styles = __webpack_require__(4078);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/Navbar/styles.ts


const Brand = external_styled_components_default()(external_react_bootstrap_.Navbar.Brand)`
  width: 18%;

  @media only screen and (max-width: 800px) {
    width: 50%;
  }
`;
const Toggle = external_styled_components_default()(external_react_bootstrap_.Navbar.Toggle)`
  span {
    width: 24px;
    height: 17px;
    background-image: none;
    position: relative;
    border-bottom: 2px solid #fff;
    transition: all 300ms linear;
    top: -2px;

    &:focus {
      border-bottom: 2px solid #fff;
    }

    &:after,
    &:before {
      width: 24px;
      position: absolute;
      height: 2px;
      background-color: #fff;
      top: 0;
      left: 0;
      content: '';
      z-index: 2;
      transition: all 300ms linear;
    }

    &:after {
      top: 8px;
    }
  }

  &[aria-expanded='true'] {
    span {
      border-color: transparent;

      &:after {
        transform: rotate(45deg);
        background-color: #fff;
        height: 2px;
      }

      &:before {
        transform: translateY(8px) rotate(-45deg);
        background-color: #fff;
        height: 2px;
      }
    }
  }

  &:active,
  &:focus {
    outline: none;
    box-shadow: none;
  }

  @media only screen and (max-width: 600px) {
    span {
      margin-right: 16px;
    }

    &[aria-expanded='true'] {
      span {
        border-color: transparent;

        &:after {
          transform: rotate(45deg);
          background-color: #fff;
          height: 2px;
        }

        &:before {
          transform: translateY(8px) rotate(-45deg);
          background-color: #fff;
          height: 2px;
        }
      }
    }
  }
`;
const NavbarText = (external_styled_components_default()).span`
  display: flex;
  align-items: center;

  button {
    font-weight: 700;
    color: #fff;
    border: 1px solid #fff;
    padding: 18px 34px;
    font-size: 18px;
    margin-left: 18px;
    position: relative;
    background-color: transparent;
    transition: 0.3s ease-in-out;

    span {
      z-index: 1;
    }

    &:before {
      content: '';
      width: 0%;
      height: 100%;
      position: absolute;
      background-color: #fff;
      left: 0;
      top: 0;
      z-index: -1;
      transition: 0.3s ease-in-out;
    }

    &:hover {
      color: #121212;

      &:before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;

    button {
      margin-top: 16px;
      margin-left: 0px;
    }
  }
`;
const NavContainer = external_styled_components_default()(external_react_bootstrap_.Nav)`
  @media only screen and (max-width: 600px) {
    flex-direction: row;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0px !important;
    margin: 16px 0px;
  }
`;
const NavLink = external_styled_components_default()(external_react_bootstrap_.Nav.Link).attrs(({ active  })=>({
        active
    }))`
  font-weight: 400;
  color: #fff !important;
  letter-spacing: 0.8px;
  padding: 0 25px;
  font-size: 18px;
  opacity: ${(props)=>props.active ? 1 : 0.75};

  &:hover {
    opacity: 1;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
const Navbar = external_styled_components_default()(external_react_bootstrap_.Navbar).attrs(({ scrolled  })=>({
        scrolled
    }))`
  padding: ${(props)=>!props.scrolled ? "18px 0" : "0px 0"};
  background-color: ${(props)=>!props.scrolled ? undefined : "#121212"};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 9999;
  transition: 0.32s ease-in-out;

  @media only screen and (max-width: 600px) {
    padding: 18px 0px;

    #basic-navbar-nav {
      padding: 0px;
      background-color: #121212;
    }
  }
`;

;// CONCATENATED MODULE: ./src/components/Navbar/index.tsx






const logo = "/assets/imgs/theos-logo.png";
const navIcon1 = "/assets/img/nav-icon1.svg";
const navIcon2 = "/assets/img/nav-icon2.svg";
const navIcon3 = "/assets/img/nav-icon3.svg";
const NavBar = ()=>{
    const [activeLink, setActiveLink] = (0,external_react_.useState)("home");
    const [scrolled, setScrolled] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        const onScroll = ()=>{
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", onScroll);
        return ()=>window.removeEventListener("scroll", onScroll);
    }, []);
    const onUpdateActiveLink = (value)=>{
        setActiveLink(value);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {
            expand: "md",
            scrolled: scrolled,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Container, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Brand, {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: logo,
                            alt: "Logo"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Toggle, {
                        "aria-controls": "basic-navbar-nav",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Navbar.Collapse, {
                        id: "basic-navbar-nav",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavContainer, {
                                className: "ms-auto",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                                        href: "#home",
                                        active: activeLink === "home",
                                        onClick: ()=>onUpdateActiveLink("home"),
                                        children: "In\xedcio"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                                        href: "#skills",
                                        active: activeLink === "skills",
                                        onClick: ()=>onUpdateActiveLink("skills"),
                                        children: "Parceiros"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavbarText, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles/* SocialIcon */.Q, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                target: "_blank",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: navIcon1,
                                                    alt: ""
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                target: "_blank",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: navIcon2,
                                                    alt: ""
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                target: "_blank",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: navIcon3,
                                                    alt: ""
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_namespaceObject.Link, {
                                        to: "connect",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "vvd",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "Seja um parceiro"
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};


/***/ }),

/***/ 323:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ Skills)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2694);
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_api_services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6011);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2957);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_api_services_api__WEBPACK_IMPORTED_MODULE_3__]);
_pages_api_services_api__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const meter1 = "/assets/img/meter1.svg";
const meter2 = "/assets/img/meter2.svg";
const meter3 = "/assets/img/meter3.svg";

const colorSharp = "/assets/img/color-sharp.png";


const Skills = ()=>{
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {
                max: 4000,
                min: 3000
            },
            items: 5
        },
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 3
        },
        tablet: {
            breakpoint: {
                max: 1024,
                min: 464
            },
            items: 2
        },
        mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 1
        }
    };
    const handleLoadCompanies = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(async ()=>{
        await _pages_api_services_api__WEBPACK_IMPORTED_MODULE_3__/* ["default"].get */ .Z.get("/companies").then((resp)=>{});
    }, []);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{}, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_4__/* .SkillSection */ .YX, {
        id: "skills",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_4__/* .SkillBx */ .hg, {
                            className: "wow zoomIn",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    children: "Nossos parceiros"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        "Quer conferir as oportunidades dos nossos parceiros? ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        "\xc9 s\xf3 clicar no banner da empresa que voc\xea ir\xe1 para as oportunidades da empresa selecionada!"
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_4__/* .SkillSlider */ .cS, {
                                    responsive: responsive,
                                    infinite: true,
                                    className: "owl-carousel owl-theme",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_4__/* .SliderItem */ .wI, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: meter1,
                                                    alt: "Image"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                    children: "Web Development"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_4__/* .SliderItem */ .wI, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: meter2,
                                                    alt: "Image"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                    children: "Brand Identity"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_4__/* .SliderItem */ .wI, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: meter3,
                                                    alt: "Image"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                    children: "Logo Design"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_4__/* .SliderItem */ .wI, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: meter1,
                                                    alt: "Image"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                    children: "Web Development"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_4__/* .BackgroundImageLeft */ .O7, {
                src: colorSharp,
                alt: "Image"
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "O7": () => (/* binding */ BackgroundImageLeft),
  "hg": () => (/* binding */ SkillBx),
  "YX": () => (/* binding */ SkillSection),
  "cS": () => (/* binding */ SkillSlider),
  "wI": () => (/* binding */ SliderItem)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: external "react-multi-carousel"
const external_react_multi_carousel_namespaceObject = require("react-multi-carousel");
var external_react_multi_carousel_default = /*#__PURE__*/__webpack_require__.n(external_react_multi_carousel_namespaceObject);
;// CONCATENATED MODULE: ./src/components/Skills/styles.ts


const SkillSection = (external_styled_components_default()).section`
  padding: 0 0 50px 0;
  position: relative;
  padding-top: 24px;

  h2 {
    font-size: 45px;
    font-weight: 700;
  }

  p {
    color: #b8b8b8;
    font-size: 18px;
    letter-spacing: 0.8px;
    line-height: 1.5em;
    margin: 14px 0 75px 0;
  }
`;
const SkillBx = (external_styled_components_default()).div`
  background: #151515;
  border-radius: 64px;
  text-align: center;
  padding: 60px 50px;
  margin-top: -60px;
`;
const SkillSlider = external_styled_components_default()((external_react_multi_carousel_default()))`
  width: 80%;
  margin: 0 auto;
  position: relative;
`;
const SliderItem = (external_styled_components_default()).div`
  img {
    width: 50%;
    margin: 0 auto 15px auto;
  }
`;
const BackgroundImageLeft = (external_styled_components_default()).img`
  top: 28%;
  position: absolute;
  bottom: 0;
  width: 40%;
  z-index: -4;
`;


/***/ }),

/***/ 4078:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ SocialIcon)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const SocialIcon = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: inline-block;
  margin-left: 14px;

  a {
    width: 42px;
    height: 42px;
    background: rgba(217, 217, 217, 0.1);
    display: inline-flex;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    line-height: 1;
    border: 1px solid rgba(255, 255, 255, 0.5);

    img {
      width: 40%;
      z-index: 1;
      transition: 0.3s ease-in-out;
    }

    &:hover {
      img {
        filter: brightness(0) saturate(100%) invert(0%) sepia(7%) saturate(98%) hue-rotate(346deg) brightness(95%)
          contrast(86%);
      }

      &:before {
        transform: scale(1);
      }
    }

    &:before {
      content: '';
      width: 42px;
      height: 42px;
      position: absolute;
      background-color: #ffffff;
      border-radius: 50%;
      transform: scale(0);
      transition: 0.3s ease-in-out;
    }
  }

  a:not(:last-child) {
    margin-right: 6px;
  }

  @media only screen and (max-width: 600px) {
    margin-left: 0px;

    a:not(:last-child) {
      margin-right: 24px;
    }
  }
`;


/***/ }),

/***/ 6011:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const api = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: "http://localhost:3333"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 441:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9090);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4630);
/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2192);
/* harmony import */ var _components_Skills__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(323);
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9042);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Skills__WEBPACK_IMPORTED_MODULE_5__]);
_components_Skills__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function Home() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Theos Vagas"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Theos Portal"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__/* .NavBar */ .l, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Banner__WEBPACK_IMPORTED_MODULE_4__/* .Banner */ .j, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Skills__WEBPACK_IMPORTED_MODULE_5__/* .Skills */ .n, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Contact__WEBPACK_IMPORTED_MODULE_6__/* .Contact */ .r, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_7__/* .Footer */ .$, {})
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 337:
/***/ ((module) => {

module.exports = require("react-on-screen");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [818], () => (__webpack_exec__(441)));
module.exports = __webpack_exports__;

})();