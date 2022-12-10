import React, { useState } from "react";
import styled from "styled-components";
import todoapp from "../assets/todoapp.svg";

const blue: string = `#335efc`;
const white: string = `#ffffff`;
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
  flex-direction: column;
  .AddTask {
    position: absolute;
    height: 3rem;
    top: 3rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    form {
      display: flex;
      justify-content: center;
      align-items: center;
    }

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
  .Tasks {
    display: flex;
    width: 100%;
    height: 70%;
    position: relative;
    justify-content: center;
    align-items: center;
    top: 5rem;

    ul {
      list-style: none;
      width: 75%;
      height: 5rem;

      li {
        width: 100%;
        height: 10vh;
        background-color: white;
        color: black;
        font-weight: bold;
        font-size: 2vw;
        line-height: 10vh;
        margin-top: 2vh;
        border-top-left-radius: 25px;
        border-bottom-right-radius: 25px;
        outline: 5px solid #2f2e41;
        position: relative;

        .DeleteTask {
          position: absolute;
          top: 0;
          right: 0;
          width: 2vw;
          height: 2vw;
          border-radius: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          .bar1 {
            width: 80%;
            height: 5%;
            background-color: white;
            transform: rotate(45deg);
            position: absolute;
          }
          .bar2 {
            width: 80%;
            height: 5%;
            background-color: white;
            position: absolute;
            transform: rotate(-45deg);
          }
        }
      }
    }
  }
`;

export const ToDoApp = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (tasks.length >= 6) {
      alert("You reach your limit");
      return;
    }
    setTasks([...tasks, input]);
    setInput("");
  };
  const handleDelete = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    console.log(`Po usunięciu: liczba zadań = ${tasks.length}`);
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
            <form onSubmit={handleSubmit}>
              <input
                className="InputTask"
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
              ></input>
              <button type="submit">Add Task</button>
            </form>
            <div className="Tasks">
              <ul>
                {tasks.map((task, index) => (
                  <li key={index}>
                    {task}
                    <button
                      className="DeleteTask"
                      type="button"
                      onClick={() => handleDelete(index)}
                    >
                      <div className="bar1"></div>
                      <div className="bar2"></div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </MainArticle>
        <img className="appSVG" src={todoapp}></img>
      </MainSection>
    </div>
  );
};
