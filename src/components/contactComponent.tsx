import react from "react";
import styled from "styled-components";
import appsSVG from "../assets/contactSVG.svg";

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
      width: 10vw;
      gap: 8vw;
      text-align: center;
      height: 3vh;
      cursor: pointer;
      a {
        color: black;
        text-decoration: none;
        transition: all 0.2s linear;
        &:hover {
          color: ${blue};
        }
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

    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2vh;
      textarea {
        resize: none;
        outline: 0;
        border: 0;
        padding: 5px;
        width: 25vw;
        height: 25vh;
        font-size: 1vw;
        border-top-right-radius: 25px;
        border-bottom-left-radius: 25px;
      }
      .title {
        width: 15vw;
        padding: 5px;
        height: 4vh;
        outline: 0;
        border-top-left-radius: 25px;
        border-bottom-right-radius: 25px;
        border: 0;
        font-size: 1vw;
      }
      section {
        display: flex;
        justify-content: center;
        align-items: center;

        .email {
          width: 15vw;
          padding: 5px;
          height: 4vh;
          outline: 0;
          border-top-left-radius: 25px;
          border-bottom-right-radius: 25px;
          border: 0;
          font-size: 1vw;
        }
        button {
          width: 6vw;
          height: 4vh;
          outline: 0;
          border: 0;
          background-color: #2f2e41;
          border-top-right-radius: 25px;
          border-bottom-left-radius: 25px;
          transform: translateX(-2vw);
          color: white;
          font-size: 0.9vw;
        }
      }
    }
  }
  @media (max-width: 928px) {
    width: 100%;
    height: 100%;
    color: ${white};
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2vh;
      textarea {
        resize: none;
        outline: 0;
        border: 0;
        padding: 5px;
        width: 80vw;
        height: 50vh;
        font-size: 3vw;
        border-top-right-radius: 25px;
        border-bottom-left-radius: 25px;
      }
      .title {
        width: 80vw;
        padding: 5px;
        height: 4vh;
        outline: 0;
        border-top-left-radius: 25px;
        border-bottom-right-radius: 25px;
        border: 0;
        font-size: 3vw;
      }
      section {
        display: flex;
        justify-content: center;
        align-items: center;

        .email {
          width: 60vw;
          padding: 5px;
          height: 4vh;
          outline: 0;
          border-top-left-radius: 25px;
          border-bottom-right-radius: 25px;
          border: 0;
          font-size: 3vw;
        }
        button {
          width: 20vw;
          height: 4vh;
          outline: 0;
          border: 0;
          background-color: #2f2e41;
          border-top-right-radius: 25px;
          border-bottom-left-radius: 25px;
          transform: translateX(-10vw);
          color: white;
          font-size: 3vw;
        }
      }
    }
  }
`;
interface State {
  email: string;
  subject: string;
  message: string;
}

export class Contact extends react.Component {
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
              <li>
                <a href="/">About</a>
              </li>
            </MenuItems>
          </Menu>
        </Header>
        <MainSection>
          <MainArticle>
            <form>
              <input className="title" name="subject" type="text" />
              <textarea
                name="message"
                placeholder="Message..."
                cols={60}
                rows={15}
              ></textarea>
              <section>
                <input
                  className="email"
                  placeholder="email"
                  type="email"
                ></input>
                <button type="submit">Send message</button>
              </section>
            </form>
          </MainArticle>
          <img className="appSVG" src={appsSVG}></img>
        </MainSection>
      </div>
    );
  }
}
