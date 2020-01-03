let reasonReactBlue = "#48a9dc";

// The {j|...|j} feature is just string interpolation, from
// bucklescript.github.io/docs/en/interop-cheatsheet#string-unicode-interpolation
// This allows us to conveniently write CSS, together with variables, by
// constructing a string
let style = {j|
  body {
    font: 14px "Century Gothic", Futura, sans-serif;
    margin: 20px;
  }

  .containerTitle {
    text-align: center;
    font-weight: bold;
    font-size: 60px;
    margin-bottom: 20px;
  }

  .board-row:after {
    clear: both;
    content: "";
    display: table;
  }

  .status {
    text-align: center;
    font-size: 60px;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  .square {
    background: #fff;
    border: 1px solid #999;
    float: left;
    font-size: 80px;
    line-height: 34px;
    height: 200px;
    margin-right: -1px;
    margin-top: -1px;
    padding: 0;
    text-align: center;
    width: 200px;
  }

  .square:focus {
    outline: none;
  }

  .square:focus {
    background: #ddd;
  }

  .winner {
    background: lightgreen;
  }

  .game {
    display: flex;
    flex-direction: row;
  }

  .game-board {
    margin: 0 auto;
  }

  .restart {
    display: block;
    margin: 0 auto;
    width: 180px;
    height: 70px;
    font-size: 50px;
    margin-top: 30px;
  }
|j};
