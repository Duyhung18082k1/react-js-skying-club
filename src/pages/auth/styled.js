import React from "react";
import styled from "styled-components";

export const WrapperStyled = styled.div`
  background: url(${require("@images/Capture.PNG").default}) no-repeat center
    top;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  -ms-background-size: cover;
  background-attachment: fixed;
  background-position: center;
  text-align: center;
  font-family: "Open Sans", sans-serif;
  height: 100vh;

  .form-auth {
    .group-input {
      position: relative;
      background-color: white;
      border-radius: 25px;
      margin-top: 5px;
      input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 30px white inset;
      }
      input:focus {
        background-color: #e8f0fe;
        -webkit-box-shadow: 0 0 0 #e8f0fe;
      }
    }
    .invalid {
      border: 2px solid red;
    }

    .group-input:focus-within {
      background-color: #e8f0fe;
    }
  }

  /*--header--*/
  .header-w3l {
    padding-top: 2em;
  }
  .header-w3l h1 {
    font-size: 3em;
    color: white;
    letter-spacing: 8px;
    font-weight: 500;
    font-family: "Dosis", sans-serif;
    text-transform: uppercase;
    text-shadow: 5px 3px 5px #101010;
  }
  /*--//header--*/

  /*--main--*/
  .wthree-pro h2 {
    font-size: 1.2em;
    color: #fff;
    letter-spacing: 4px;
    margin-bottom: 1.5em;
    text-transform: uppercase;
  }
  .sub-main-w3 input[type="email"],
  .sub-main-w3 input[type="text"],
  .sub-main-w3 input[type="password"] {
    outline: none;
    font-size: 0.9em;
    padding: 1em 3em 1em 1em;
    border: none;
    margin-bottom: 0.3em;
    background: rgba(255, 255, 255, 0.85);
    width: 82%;
    color: #000;
    border-radius: 30px;
    font-weight: 400;
    font-family: "Open Sans", sans-serif;
    letter-spacing: 1px;
  }
  .sub-main-w3 {
    width: 26%;
    margin: 10em auto 12em;
  }
  .sub-w3l h6 a {
    font-size: 0.9em;
    color: #fff;
    letter-spacing: 1px;
    text-align: right;
    display: inherit;
  }
  .sub-w3l {
    margin-top: 1em;
  }
  .right-w3l {
    margin-top: 2em;
  }
  .pom-agile {
    position: relative;
  }
  span.icon1,
  span.icon2 {
    color: #047af6;
    font-size: 1.1em;
    position: absolute;
    right: 6%;
  }
  span.icon1 {
    top: 23%;
  }
  span.icon2 {
    top: 34%;
  }
  .sub-main-w3 input[type="submit"] {
    color: white;
    background: #047af6;
    border: none;
    padding: 0.7em 0;
    outline: none;
    width: 44%;
    font-size: 1em;
    cursor: pointer;
    letter-spacing: 1px;
    font-weight: 400;
    font-family: "Open Sans", sans-serif;
    transition: 0.5s all;
    -webkit-transition: 0.5s all;
    -o-transition: 0.5s all;
    -moz-transition: 0.5s all;
    -ms-transition: 0.5s all;
    border-radius: 30px;
  }
  .sub-main-w3 input[type="submit"]:hover {
    background: #fff;
    color: black;
    transition: 0.5s all;
    -webkit-transition: 0.5s all;
    -o-transition: 0.5s all;
    -moz-transition: 0.5s all;
    -ms-transition: 0.5s all;
  }
  /*--//main--*/

  /*--footer--*/
  .footer p {
    font-size: 0.9em;
    color: white;
    letter-spacing: 2px;
  }
  .footer p a {
    color: #fff;
  }
  .footer p a:hover {
    color: #ea2858;
  }
  /*--//footer--*/

  /*--responsive--*/

  @media (max-width: 1680px) {
  }
  @media (max-width: 1600px) {
  }
  @media (max-width: 1440px) {
    .footer {
      padding-bottom: 3em;
    }
    .sub-main-w3 {
      width: 29%;
      margin: 7em auto 9em;
    }
  }
  @media (max-width: 1366px) {
  }
  @media (max-width: 1280px) {
  }
  @media (max-width: 1080px) {
    .sub-main-w3 {
      width: 35%;
    }
  }
  @media (max-width: 1050px) {
  }
  @media (max-width: 1024px) {
    .sub-main-w3 {
      width: 38%;
    }
  }
  @media (max-width: 991px) {
  }
  @media (max-width: 900px) {
    .header-w3l {
      padding-top: 1.5em;
    }
    .sub-main-w3 {
      width: 42%;
      margin: 6em auto 8em;
    }
    .footer {
      padding-bottom: 2.5em;
    }
  }
  @media (max-width: 800px) {
    .header-w3l h1 {
      font-size: 2.7em;
      letter-spacing: 7px;
    }
  }
  @media (max-width: 768px) {
    .header-w3l {
      padding-top: 4.5em;
    }
    .sub-main-w3 {
      width: 50%;
      margin: 10em auto 16em;
    }
  }
  @media (max-width: 736px) {
    .header-w3l {
      padding-top: 1.5em;
    }
    .sub-main-w3 {
      margin: 5em auto 6.5em;
    }
  }
  @media (max-width: 667px) {
    .footer {
      padding-bottom: 2em;
    }
  }
  @media (max-width: 640px) {
  }
  @media (max-width: 600px) {
    .sub-main-w3 input[type="email"],
    .sub-main-w3 input[type="password"] {
      padding: 0.9em 3em 0.9em 1em;
    }
    .sub-main-w3 input[type="submit"] {
      font-size: 0.95em;
    }
    .footer p {
      letter-spacing: 1px;
    }
    .right-w3l {
      margin-top: 1em;
    }
    .header-w3l h1 {
      font-size: 2.5em;
      letter-spacing: 5px;
    }
    .wthree-pro h2 {
      font-size: 1em;
    }
    .sub-main-w3 {
      margin: 6em auto 8em;
      width: 54%;
    }
  }
  @media (max-width: 568px) {
    .sub-main-w3 {
      width: 56%;
    }
  }
  @media (max-width: 480px) {
    .header-w3l h1 {
      font-size: 2.3em;
      letter-spacing: 4px;
    }
    .sub-main-w3 {
      width: 69%;
      margin: 6em auto 6.3em;
    }
    .footer p {
      line-height: 1.9;
    }
  }
  @media (max-width: 440px) {
    .sub-main-w3 {
      width: 72%;
    }
  }
  @media (max-width: 414px) {
    .sub-main-w3 input[type="email"],
    .sub-main-w3 input[type="text"],
    .sub-main-w3 input[type="password"] {
      font-size: 0.85em;
    }
    .sub-w3l h6 a {
      font-size: 0.8em;
    }
    .header-w3l h1 {
      font-size: 2.1em;
    }
    .sub-main-w3 {
      margin: 7em auto 9.3em;
    }
  }
  @media (max-width: 384px) {
    .sub-main-w3 input[type="email"],
    .sub-main-w3 input[type="text"],
    .sub-main-w3 input[type="password"] {
      font-size: 0.8em;
    }
    .header-w3l h1 {
      font-size: 2em;
    }
    .sub-main-w3 input[type="submit"] {
      font-size: 0.9em;
    }
    .wthree-pro h2 {
      margin-bottom: 1.2em;
    }
    .sub-main-w3 {
      margin: 6em auto 7.5em;
      width: 74%;
    }
    span.icon1 {
      top: 18%;
    }
    span.icon2 {
      top: 32%;
    }
  }
  @media (max-width: 375px) {
  }
  @media (max-width: 320px) {
    .header-w3l h1 {
      font-size: 1.8em;
      letter-spacing: 2px;
    }
    .wthree-pro h2 {
      font-size: 0.9em;
      letter-spacing: 2px;
    }
    .sub-main-w3 input[type="submit"] {
      font-size: 0.8em;
    }
    .footer p {
      font-size: 0.8em;
    }
    .sub-main-w3 {
      margin: 4.2em auto 4.5em;
      width: 81%;
    }
    .sub-main-w3 input[type="email"],
    .sub-main-w3 input[type="text"],
    .sub-main-w3 input[type="password"] {
      width: 80%;
    }
  }
  @-moz-keyframes spin {
    0% {
      -moz-transform: rotate(0deg);
    }
    100% {
      -moz-transform: rotate(359deg);
    }
  }
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(359deg);
    }
  }
  @-o-keyframes spin {
    0% {
      -o-transform: rotate(0deg);
    }
    100% {
      -o-transform: rotate(359deg);
    }
  }
  @-ms-keyframes spin {
    0% {
      -ms-transform: rotate(0deg);
    }
    100% {
      -ms-transform: rotate(359deg);
    }
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }
`;
