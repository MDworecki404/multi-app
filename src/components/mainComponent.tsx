import react from "react";
import styled from "styled-components";
import appsSVG from "../assets/apps.svg";
import gsap from "gsap";

const blue: string = `#335efc`;
const white: string = `#ffffff`;
const article: string = `React.js, Styled Components, and TypeScript are three popular technologies among front-end developers. Each provides unique benefits, and together they create a powerful tool for building modern web applications.

  React.js is a JavaScript library created by Facebook that allows for the creation of interactive user interfaces. React.js is based on the concept of a virtual DOM (Document Object Model), which allows for the quick updating of only those elements of the interface that have actually changed, leading to high-performance applications.
  
  Styled Components is a library that allows for the creation of advanced CSS styles in React.js. This means that instead of creating separate CSS files, styles for individual components can be directly defined within a React.js application. This solution allows for better code organization and makes it easier to share components between different projects.
  
  TypeScript is a programming language that extends the capabilities of JavaScript by adding static typing. This means that programmers can enforce specific data types for variables and function arguments, increasing the readability and correctness of the code. TypeScript is particularly useful in large projects where code quality and reliability are important.
  
  React.js, Styled Components, and TypeScript are just some of the many tools that can help in the creation of modern web applications. Using these technologies, it is possible to create fast and flexible applications that will satisfy even the most demanding users.`;

const Header = styled.header`
  width: 100vw;
  height: 10vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.h2`
  width: 20%;
  text-align: center;
`;
const Menu = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
`;
const MenuItems = styled.ul`
  list-style: none;
  display: flex;
  gap: 10rem;
  justify-content: right;
  margin-right: 10%;
  font-size: 20px;
  cursor: pointer;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8rem;
    text-align: center;
    height: 3rem;
    &:nth-child(3) {
      background-color: ${blue};
      width: 8rem;
      text-align: center;
      height: 3rem;
      color: ${white};
      border-radius: 2rem;
      transition: all 0.2s linear;
      &:hover {
        color: #2f2e41;
      }
    }
    a {
      color: black;
      text-decoration: none;
      &:hover {
        color: ${blue};
      }
    }
  }
`;
const MainSection = styled.section`
  width: 93vw;
  height: 90vh;
  background-color: ${blue};
  border-top-right-radius: 90px;
  display: flex;
  flex-basis: fit-content;
  overflow: hidden;

  img {
    flex-basis: fit-content;
    right: -50%;
    transform: scale(80%);
  }
`;
const MainArticle = styled.article`
  width: 50%;
  height: 100%;
  color: ${white};
  margin-left: 2.5%;
  margin-right: 2.5%;
  text-align: left;

  p {
    width: 100%;
    display: flex;
    font-size: 1.2rem;
    align-items: center;
    height: 100%;
  }
`;

export class Main extends react.Component {
  render() {
    return (
      <div>
        <Header>
          <Logo>MultiApp</Logo>
          <Menu>
            <MenuItems>
              <li>
                <a href="/app">Apps</a>
              </li>
              <li>
                <a href="/technology">Technology</a>
              </li>
              <li>About</li>
            </MenuItems>
          </Menu>
        </Header>
        <MainSection>
          <MainArticle>
            <p className="articleAnim">{article}</p>
          </MainArticle>
          <img className="appSVG" src={appsSVG}></img>
        </MainSection>
      </div>
    );
  }
}
