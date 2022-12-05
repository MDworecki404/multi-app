import react from "react";
import styled from "styled-components";
import appsSVG from "../assets/apps.svg";

const blue: string = `#335efc`;
const white: string = `#ffffff`;
const article: string =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fringilla, dolor sit amet sodales vestibulum, magna libero malesuada odio, sit amet feugiat orci massa in erat. Praesent a velit vitae lectus pulvinar ultrices dictum a tellus. Nulla facilisi. Praesent id viverra mauris. Ut egestas eget massa ut iaculis. Nam quis elementum quam. Nam ut eleifend ante, non pulvinar quam. Ut laoreet dui vitae risus cursus, ac pharetra velit mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam in consectetur enim, non mattis libero. Donec fermentum enim ex, ac tristique lorem tincidunt eget. Mauris mollis non libero sed tincidunt.Praesent et euismod libero. Vivamus faucibus vitae dui vestibulum congue. Mauris nec sodales arcu, ac interdum augue. Phasellus porta, lectus sed aliquam auctor, ex nulla suscipit quam, at lacinia purus augue non elit. Vestibulum molestie risus quis eros sollicitudin maximus. Sed sed pretium urna, a consequat nunc. In rutrum mauris in mi pulvinar sodales. Fusce blandit sodales elit, vel euismod massa interdum a. Maecenas aliquam ultrices nulla id tempus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin ultrices venenatis mauris eu tempus. Fusce euismod vulputate purus, id pretium leo congue et. Nam ut condimentum est.";

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

  img {
    right: -50%;
    transform: scale(0.8);
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
            <p>{article}</p>
          </MainArticle>
          <img src={appsSVG}></img>
        </MainSection>
      </div>
    );
  }
}
