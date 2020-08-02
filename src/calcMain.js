import React from 'react';
import './calc.css';

function CalcMain() {
  
  function add(char) { //입력받은 값 계산
            var display = document.getElementById('display');
            display.value = display.value + char;
        }
        function calculate() { //출력 
            var display = document.getElementById('display');
            var result = eval(display.value);   
            document.getElementById('result').value = result;
      }
      function AC(){ // 초기화
        document.getElementById('display').value="";
        document.getElementById('result').value="";
      }
   
  return (
    <div className="Calcmain">
      <table>
          <tr>
              <td colspan="4">
                <input type="text" id="display" disabled />
              </td>
            </tr>
            <tr>
              <td colspan="4">
              <input type="text" id="result" disabled />
                </td>
            </tr>
            <tr>
              <td colspan="3" onClick={() => AC()}><button id="AC">AC</button></td>
              <td><button onClick={() => add('/')}>/</button></td>
          </tr>
          <tr>
              <td><button onClick={() => add(7)}>7</button></td>
              <td><button onClick={() => add(8)}>8</button></td>
              <td><button onClick={() => add(9)}>9</button></td>
              <td><button onClick={() => add('*')}>*</button></td>
          </tr>
          <tr>
              <td><button onClick={() => add(4)}>4</button></td>
              <td><button onClick={() => add(5)}>5</button></td>
              <td><button onClick={() => add(6)}>6</button></td>
              <td><button onClick={() => add('-')}>-</button></td>
          </tr>
          <tr>
              <td><button onClick={() => add(3)}>3</button></td>
              <td><button onClick={() => add(2)}>2</button></td>
              <td><button onClick={() => add(1)}>1</button></td>
              <td><button onClick={() => add('+')}>+</button></td>
          </tr>
          <tr>
              <td><button onClick={() => add(0)}>0</button></td>
              <td><button onClick={() => add('.')}>.</button></td>
              <td colspan="2"><button id="ans" onClick={() => calculate()}>=</button></td>
          </tr>
      </table>
    </div>
    
  );
}

export default CalcMain;
