'use strict';

var List = require("bs-platform/lib/js/list.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Board$ReasonReactExamples = require("../Board/Board.bs.js");

var winningCombs = /* :: */[
  /* :: */[
    0,
    /* :: */[
      1,
      /* :: */[
        2,
        /* [] */0
      ]
    ]
  ],
  /* :: */[
    /* :: */[
      3,
      /* :: */[
        4,
        /* :: */[
          5,
          /* [] */0
        ]
      ]
    ],
    /* :: */[
      /* :: */[
        6,
        /* :: */[
          7,
          /* :: */[
            8,
            /* [] */0
          ]
        ]
      ],
      /* :: */[
        /* :: */[
          0,
          /* :: */[
            3,
            /* :: */[
              6,
              /* [] */0
            ]
          ]
        ],
        /* :: */[
          /* :: */[
            1,
            /* :: */[
              4,
              /* :: */[
                7,
                /* [] */0
              ]
            ]
          ],
          /* :: */[
            /* :: */[
              2,
              /* :: */[
                5,
                /* :: */[
                  8,
                  /* [] */0
                ]
              ]
            ],
            /* :: */[
              /* :: */[
                0,
                /* :: */[
                  4,
                  /* :: */[
                    8,
                    /* [] */0
                  ]
                ]
              ],
              /* :: */[
                /* :: */[
                  2,
                  /* :: */[
                    4,
                    /* :: */[
                      6,
                      /* [] */0
                    ]
                  ]
                ],
                /* [] */0
              ]
            ]
          ]
        ]
      ]
    ]
  ]
];

function gameEnded(board) {
  return List.for_all((function (field) {
                if (Caml_obj.caml_equal(field, /* Marked */[/* Circle */1])) {
                  return true;
                } else {
                  return Caml_obj.caml_equal(field, /* Marked */[/* Cross */0]);
                }
              }), board);
}

function whosPlaying(gameState) {
  if (typeof gameState === "number" || gameState.tag || gameState[0]) {
    return /* Playing */Block.__(0, [/* Cross */0]);
  } else {
    return /* Playing */Block.__(0, [/* Circle */1]);
  }
}

function getWinner(flattenBoard, coords) {
  var match = List.nth(flattenBoard, List.nth(coords, 0));
  var match$1 = List.nth(flattenBoard, List.nth(coords, 1));
  var match$2 = List.nth(flattenBoard, List.nth(coords, 2));
  if (match) {
    if (match[0]) {
      if (match$1 && match$1[0] && match$2 && match$2[0]) {
        return /* Circle */1;
      } else {
        return /* NoOne */2;
      }
    } else if (match$1 && !(match$1[0] || !(match$2 && !match$2[0]))) {
      return /* Cross */0;
    } else {
      return /* NoOne */2;
    }
  } else {
    return /* NoOne */2;
  }
}

function checkGameState(winningRows, updatedBoard, oldBoard, gameState) {
  var match = Caml_obj.caml_equal(oldBoard, updatedBoard);
  if (match) {
    return gameState;
  } else {
    var flattenBoard = List.flatten(updatedBoard);
    var _rest = winningRows;
    while(true) {
      var rest = _rest;
      var head = List.hd(rest);
      var tail = List.tl(rest);
      var match$1 = getWinner(flattenBoard, head);
      var match$2 = gameEnded(flattenBoard);
      switch (match$1) {
        case /* Cross */0 :
            return /* Winner */Block.__(1, [/* Cross */0]);
        case /* Circle */1 :
            return /* Winner */Block.__(1, [/* Circle */1]);
        case /* NoOne */2 :
            if (match$2) {
              if (tail) {
                _rest = tail;
                continue ;
              } else {
                return /* Draw */0;
              }
            } else if (tail) {
              _rest = tail;
              continue ;
            } else {
              return whosPlaying(gameState);
            }
        
      }
    };
  }
}

function checkGameState3x3(param, param$1, param$2) {
  return checkGameState(winningCombs, param, param$1, param$2);
}

function updateBoard(board, gameState, id) {
  return List.mapi((function (ind, row) {
                return List.mapi((function (index, value) {
                              var match = String(ind) + String(index) === id;
                              if (match) {
                                if (typeof gameState === "number" || gameState.tag) {
                                  return /* Empty */0;
                                } else if (value) {
                                  return value;
                                } else {
                                  return /* Marked */[gameState[0]];
                                }
                              } else {
                                return value;
                              }
                            }), row);
              }), board);
}

var initialState = {
  board: /* :: */[
    /* :: */[
      /* Empty */0,
      /* :: */[
        /* Empty */0,
        /* :: */[
          /* Empty */0,
          /* [] */0
        ]
      ]
    ],
    /* :: */[
      /* :: */[
        /* Empty */0,
        /* :: */[
          /* Empty */0,
          /* :: */[
            /* Empty */0,
            /* [] */0
          ]
        ]
      ],
      /* :: */[
        /* :: */[
          /* Empty */0,
          /* :: */[
            /* Empty */0,
            /* :: */[
              /* Empty */0,
              /* [] */0
            ]
          ]
        ],
        /* [] */0
      ]
    ]
  ],
  gameState: /* Playing */Block.__(0, [/* Cross */0])
};

function reducer(state, action) {
  if (action) {
    var updatedBoard = updateBoard(state.board, state.gameState, action[0]);
    return {
            board: updatedBoard,
            gameState: checkGameState3x3(updatedBoard, state.board, state.gameState)
          };
  } else {
    return initialState;
  }
}

function Game(Props) {
  var match = React.useReducer(reducer, initialState);
  var dispatch = match[1];
  return React.createElement("div", {
              className: "game"
            }, React.createElement(Board$ReasonReactExamples.make, {
                  state: match[0],
                  onMark: (function (id) {
                      return Curry._1(dispatch, /* ClickSquare */[id]);
                    }),
                  onRestart: (function (_evt) {
                      return Curry._1(dispatch, /* Restart */0);
                    })
                }));
}

var make = Game;

exports.winningCombs = winningCombs;
exports.gameEnded = gameEnded;
exports.whosPlaying = whosPlaying;
exports.getWinner = getWinner;
exports.checkGameState = checkGameState;
exports.checkGameState3x3 = checkGameState3x3;
exports.updateBoard = updateBoard;
exports.initialState = initialState;
exports.reducer = reducer;
exports.make = make;
/* react Not a pure module */
