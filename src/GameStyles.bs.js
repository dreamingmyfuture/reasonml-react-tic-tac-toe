'use strict';


var reasonReactBlue = "#48a9dc";

var style = "\n  body {\n    font: 14px \"Century Gothic\", Futura, sans-serif;\n    margin: 20px;\n  }\n\n  .containerTitle {\n    text-align: center;\n    font-weight: bold;\n    font-size: 60px;\n    margin-bottom: 20px;\n  }\n\n  .board-row:after {\n    clear: both;\n    content: \"\";\n    display: table;\n  }\n\n  .status {\n    text-align: center;\n    font-size: 60px;\n    margin-top: 20px;\n    margin-bottom: 10px;\n  }\n\n  .square {\n    background: #fff;\n    border: 1px solid #999;\n    float: left;\n    font-size: 80px;\n    line-height: 34px;\n    height: 200px;\n    margin-right: -1px;\n    margin-top: -1px;\n    padding: 0;\n    text-align: center;\n    width: 200px;\n  }\n\n  .square:focus {\n    outline: none;\n  }\n\n  .square:focus {\n    background: #ddd;\n  }\n\n  .winner {\n    background: lightgreen;\n  }\n\n  .game {\n    display: flex;\n    flex-direction: row;\n  }\n\n  .game-board {\n    margin: 0 auto;\n  }\n\n  .restart {\n    display: block;\n    margin: 0 auto;\n    width: 180px;\n    height: 70px;\n    font-size: 50px;\n    margin-top: 30px;\n  }\n";

exports.reasonReactBlue = reasonReactBlue;
exports.style = style;
/* No side effect */
