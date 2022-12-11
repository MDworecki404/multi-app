import react from "react";
import styled from "styled-components";
import appsSVG from "../assets/apps.svg";

const blue: string = `#335efc`;
const white: string = `#ffffff`;
const article: string = `
  Hello, my name is Marek and I am begginer Front-End developer. 
  At this time I am focusing on learning React.JS and Typescript.
  This project it's just a little experiment and a environment for exercise and study react in the practical 
  form.
  \n
  Here is the contact form if you want to text me :)

`;
const Header = styled.header`
  @media (min-width: 928px) {
    width: 100vw;
    height: 10vh;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 928px) {
    width: 100vw;
    height: 10vh;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
const Logo = styled.h2`
  @media (min-width: 928px) {
    width: 20%;
    text-align: center;
  }
  @media (max-width: 928px) {
    width: 100%;
    text-align: center;
  }
`;
const Menu = styled.div`
  @media (min-width: 928px) {
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: right;
    align-items: center;
  }
  @media (max-width: 928px) {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const MenuItems = styled.ul`
  @media (min-width: 928px) {
    list-style: none;
    display: flex;
    gap: 8vw;
    justify-content: right;
    margin-right: 10%;
    font-size: 1.1vw;
  }
  @media (max-width: 928px) {
    list-style: none;
    display: flex;
    gap: 8vw;
    align-items: center;
    justify-content: center;
    font-size: 3vw;
  }
  li {
    @media (min-width: 928px) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 8rem;
      gap: 8vw;
      text-align: center;
      height: 3rem;
      cursor: pointer;
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
        transition: all 0.2s linear;
        &:hover {
          color: ${blue};
        }
      }
    }
    @media (max-width: 928px) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 8rem;
      gap: 1vw;
      text-align: center;
      height: 3rem;
      cursor: pointer;
      &:nth-child(3) {
        background-color: ${blue};
        width: 8rem;
        text-align: center;
        height: 5vh;
        color: ${white};
        border-radius: 2rem;
        transition: all 0.2s linear;
      }
      a {
        color: black;
        text-decoration: none;
        transition: all 0.2s linear;
      }
    }
  }
`;
const MainSection = styled.section`
  @media (min-width: 928px) {
    width: 93vw;
    height: 90vh;
    background-color: ${blue};
    border-top-right-radius: 90px;
    display: flex;
    flex-basis: fit-content;
    overflow: hidden;
  }
  @media (max-width: 928px) {
    width: 100vw;
    height: 90vh;
    background-color: ${blue};
    display: flex;
    position: relative;
    overflow: hidden;
  }

  img {
    @media (min-width: 928px) {
      flex-basis: fit-content;
      right: -50%;
      transform: scale(80%);
    }
    @media (max-width: 928px) {
      display: none;
    }
  }
`;
const MainArticle = styled.article`
  @media (min-width: 928px) {
    width: 50%;
    height: 100%;
    color: ${white};
    margin-left: 2.5%;
    margin-right: 2.5%;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  @media (max-width: 928px) {
    width: 75%;
    height: 100%;
    color: ${white};
    margin: auto;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  p {
    @media (min-width: 928px) {
      width: 100%;
      text-align: center;
      margin: auto;
      display: flex;
      font-size: 1.2vw;
      align-items: center;
      height: 100%;
    }
    @media (max-width: 928px) {
      width: 100%;
      text-align: center;
      margin: auto;
      display: flex;
      font-size: 5vw;
      align-items: center;
      height: 100%;
    }
  }
  .FormButton {
    @media (min-width: 928px) {
      width: 10vw;
      height: 5vh;
      clear: both;
      position: absolute;
      bottom: 25vh;
      border: 0;
      outline: 5px solid #2f2e41;
      background-color: #2f2e41;
      border-top-left-radius: 25px;
      border-bottom-right-radius: 25px;
      cursor: pointer;
      color: white;
      font-size: 1vw;
      transition: all 0.1s linear;
    }
    @media (max-width: 928px) {
      width: 40vw;
      height: 5vh;
      clear: both;
      position: absolute;
      bottom: 12vh;
      border: 0;
      outline: 5px solid #2f2e41;
      background-color: #2f2e41;
      border-top-left-radius: 25px;
      border-bottom-right-radius: 25px;
      cursor: pointer;
      color: white;
      font-size: 5vw;
      transition: all 0.1s linear;
    }
    &:hover {
      color: ${blue};
    }
  }
`;

export class Main extends react.Component {
  contactHref = () => {
    window.location.href = "/contact";
  };

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
            <button onClick={this.contactHref} className="FormButton">
              Contact
            </button>
          </MainArticle>
          <img className="appSVG" src={appsSVG}></img>
        </MainSection>
      </div>
    );
  }
}
