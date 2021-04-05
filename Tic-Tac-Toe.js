var matrix = [], card = [], array = [];
var OX = 'X', OK = 1;
var button = (
  <button onClick = {Generate}>
    Start Game
  </button>
);
card.push(button);
function Generate() {
    for(var i=1; i<=3; i++) {
        matrix[i] = [];
        array[i] = [];
        for(var j=1; j<=4; j++) {
            if(j == 4) {
              matrix[i][j] = (<div></div>);
            } else {
              matrix[i][j] = (<Button i = {i} j = {j}/>);
            }
         }
      } 
  ReactDOM.render(matrix, document.querySelector('#board'));
}

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  
  render() {
  return (
    <button className = "person" onClick = {() => {
        this.setState({value: OX});
        change();
        array[this.props.i][this.props.j] = OK;
        OK = OK * -1;
        checkWinner();
      }}>
      <h1>{this.state.value}</h1>
    </button>
    );  
  }

}
function change() {
  if(OK == 1) {
    OX = 'O';
  } else OX = 'X';
  array.push(OK);
}
function checkWinner() {
    if(array[1][1] == -1 && array[1][2] == -1 && array[1][3] == -1) {
               alert("O won!");               
               return false;
          }
          if(array[2][1] == -1 && array[2][2] == -1 && array[2][3] == -1) {
               alert("O won!");                
               return false; 
          }
          if(array[3][1] == -1 && array[3][2] == -1 && array[3][3] == -1) {
               alert("O won!");                 
               return false; 
          }
          if(array[1][1] == -1 && array[2][1] == -1 && array[3][1] == -1) {
               alert("O won!");            
               return false;
          }
          if(array[1][2] == -1 && array[2][2] == -1 && array[3][2] == -1) {
               alert("O won!");               
               return false;
          }
          if(array[1][3] == -1 && array[2][3] == -1 && array[3][3] == -1) {
               alert("O won!");       
               return false; 
          }
          if(array[1][1] == -1 && array[2][2] == -1 && array[3][3] == -1) {
               alert("O won!");                
               return false;
          }
          if(array[1][3] == -1 && array[2][2] == -1 && array[3][1] == -1) {
               alert("O won!");                
               return false;
          }
  

          if(array[1][1] == 1 && array[1][2] == 1 && array[1][3] == 1) {
               alert("X won!");                
               return false;
          }
          if(array[2][1] == 1 && array[2][2] == 1 && array[2][3] == 1) {
               alert("X won!");               
               return false; 
          }
          if(array[3][1] == 1 && array[3][2] == 1 && array[3][3] == 1) {
               alert("X won!");                 
               return false; 
          }
          if(array[1][1] == 1 && array[2][1] == 1 && array[3][1] == 1) {
               alert("X won!");                
               return false;
          }
          if(array[1][2] == 1 && array[2][2] == 1 && array[3][2] == 1) {
               alert("X won!");               
               return false;
          }
          if(array[1][3] == 1 && array[2][3] == 1 && array[3][3] == 1) {
               alert("X won!");  
               return false; 
          }
          if(array[1][1] == 1 && array[2][2] == 1 && array[3][3] == 1) {
               alert("X won!");                
               return false;
          }
          if(array[1][3] == 1 && array[2][2] == 1 && array[3][1] == 1) {
               alert("X won!"); 
               return false;
          }   
}
ReactDOM.render(card, document.querySelector('#start'));
