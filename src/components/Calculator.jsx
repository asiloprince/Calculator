import React, { useState } from "react";
import styles from "./Calculator.module.css";
import Calckeys from "./Calckeys";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, blueTheme, GlobalStyles } from "./theme.js";

const StyledApp = styled.div``;

function Calculator() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("blue") : setTheme("light");
  };

  // calc
  const [res, setRes] = useState("");

  // button keys
  const buttonkeys = [
    "AC",
    "9",
    "/",
    "8",
    "7",
    "6",
    "*",
    "5",
    "4",
    "3",
    "+",
    "2",
    "1",
    "0",
    "-",
    ".",
    "⬅",
    "=",
  ];

  // Calculator function evaluating string in finding value function
  const findValueImHungry = () => {
    let result = Function("return " + res)();
    setRes(result.toString());
  };

  // event handler function
  const handler = (arg) => {
    // fix concatenating after infinty
    if (res === "Infinity") {
      setRes("");
      return;
    }

    if (arg === "AC") setRes("");
    else if (arg === "=") findValueImHungry();
    else if (arg === "⬅") {
      let num = res.length;
      if (num > 0) setRes(res.slice(0, num - 1));
    } else setRes(res.concat(arg));
  };

  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <ThemeProvider theme={theme === "light" ? lightTheme : blueTheme}>
          <GlobalStyles />
          <StyledApp>
            <input
              type="checkbox"
              id="selectTheme"
              className={styles.themeButtons}
              onClick={() => themeToggler()}
            ></input>
            <label className={styles.selectTheme} htmlFor="selectTheme">
              Change Themes
            </label>
          </StyledApp>
        </ThemeProvider>

        <div>
          <div className={styles.resinput}>
            <div className={styles.result}>{res}</div>
          </div>
          <div className={styles.btns}>
            {buttonkeys.map((e, idx) => {
              return <Calckeys handler={handler} value={e} key={idx} />;
            })}
          </div>
        </div>
        <div> </div>
      </div>
    </div>
  );
}
export default Calculator;
