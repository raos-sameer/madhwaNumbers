import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import "../App.css";
import "./MemoryGame.css";
const TimerGame = () => {
  const [rowText, setRowText] = useState([]);
  useEffect(() => {
    if (rowText.length === 0) {
      let row = showMatrix();
    }
    showTextValues();
  }, [rowText]);
  const matrix = {
    0: { color: "#ccddee", text: "Easy" },
    1: { color: "#aaddee", text: "Medium" },
    2: { color: "#aabbff", text: "Difficult" },
  };

  const showMatrix = () => {
    let row = [];
    for (let i = 0; i < 3; i++) {
      row.push(<tr>{includeRow(i)}</tr>);
    }
    setRowText(row);
    console.log(row);
    return row;
  };
  const includeRow = (row) => {
    let col = [];
    for (let i = 0; i < 3; i++) {
      col.push(
        <td
          bgColor={matrix[(row + i) % 3].color}
          row={row}
          col={i}
          onClick={(event) => handleClick(event)}
        >
          <div class="scene">
            <div class="card">
              <div class="card__face card__face--front">front</div>
              <div class="card__face card__face--back">back</div>
            </div>
          </div>
        </td>
      );
    }
    return col;
  };
  async function handleClick(event) {
    console.log("handleClick: ", event.target.classList);
    var card = document.querySelector(".card");
    card.addEventListener("click", function () {
      card.classList.toggle("is-flipped");
    });
  }
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const showTextValues = () => {
    console.log("After ALL  ", rowText[0]);
  };

  return (
    <Container>
      <div>
        <strong className="scrollmenu">Self Evaluation Questions::</strong>

        <table>
          <th>100 Points</th>
          <th>200 Points</th>
          <th>300 Points</th>
          {rowText}
        </table>
      </div>
    </Container>
  );
};

export default TimerGame;
