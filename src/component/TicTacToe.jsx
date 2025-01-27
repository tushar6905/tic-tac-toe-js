import React, { useState } from "react";

import "../App.css";
import useTictacToe from "../hooks/use-tic-tac-toe";

const TicTacToe = () => {
  const { board, handleCLick, getStatusMessage, resetGame, calculateWinner } =
    useTictacToe();

  return (
    <div className="game">
      <div className="status">
        {getStatusMessage()}
        <button className="reset-button" onClick={resetGame}>
          Reset game
        </button>
      </div>
      <div className="board">
        {board.map((b, index) => {
          return (
            <button
              onClick={() => handleCLick(index)}
              disabled={b!==null}
              className="cell"
              key={index}
            >
              {b}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TicTacToe;
