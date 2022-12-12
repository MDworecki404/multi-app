import React, { useState } from "react";
import styled from "styled-components";
import todoapp from "../assets/todoapp.svg";

const blue: string = `#335efc`;
const white: string = `#ffffff`;
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
  }
  @media (max-width: 928px) {
    width: 100%;
    height: 100%;
    color: ${white};
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
        width: 60vw;
        position: relative;
        font-size: 3vw;
        border-top-left-radius: 25px;
        border-bottom-right-radius: 25px;
        text-align: center;
      }
      button {
        width: 20vw;
        height: 2.5rem;
        outline: none;
        border: none;
        background-color: #2f2e41;
        color: white;
        position: relative;
        font-size: 3vw;
        right: 13%;
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
      top: 5vh;

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
          font-size: 4vw;
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
            width: 6vw;
            height: 6vw;
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
