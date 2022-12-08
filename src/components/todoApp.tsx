import react from "react";
import { useState } from "react";
import styled from "styled-components";
import appsSVG from "../assets/apps.svg";
import gsap from "gsap";
import todoapp from "../assets/todoapp.svg";

const blue: string = `#335efc`;
const white: string = `#ffffff`;
const article: string = `Weather app`;
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
      width: 8rem;
      text-align: center;
      height: 3rem;
      border-radius: 2rem;
      &:hover {
        color: ${blue};
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
    right: -60%;
    transform: scale(50%);
  }
`;
const MainArticle = styled.article`
  width: 50%;
  height: 100%;
  color: ${white};
  margin-left: 2.5%;
  margin-right: 2.5%;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .AddTask {
    position: absolute;
    height: 3rem;
    top: 3rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    input {
      border: 0;
      outline: 0;
      height: 3rem;
      width: 55%;
      position: relative;
      font-size: 1.5vw;
      border-top-left-radius: 25px;
      border-bottom-right-radius: 25px;
      text-align: center;
    }
    button {
      width: 5rem;
      height: 2.5rem;
      outline: none;
      border: none;
      background-color: #2f2e41;
      color: white;
      position: relative;
      font-size: 1rem;
      right: 7%;
      cursor: pointer;
      transition: all 0.1s linear;
      border-top-right-radius: 25px;
      border-bottom-left-radius: 25px;
      &:hover {
        color: ${blue};
      }
    }
  }
`;

export function ToDoApp() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const AddTask = (todo: any) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };
    setList([...list, newTodo]);
    setInput("");
  };
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
          <div className="AddTask">
            <input
              className="InputTask"
              value={input}
              type="text"
              onChange={(e) => setInput(e.target.value)}
            ></input>
            <button onClick={() => AddTask(input)}>Add Task</button>
            <div className="Tasks">
              <ul>
                {list.map((todo)=>())}
              </ul>
            </div>
          </div>
        </MainArticle>
        <img className="appSVG" src={todoapp}></img>
      </MainSection>
    </div>
  );
}
