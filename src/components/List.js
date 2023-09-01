import React from 'react'
import Table from 'react-bootstrap/Table';
import '../styles/list.css'
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

function List() {
  return (
    <div id='tab'>
        <Table responsive="sm">
        <thead>
          <tr>
            <th><ToggleButton id="tbg-check-2" value={2}>  .
        </ToggleButton></th>
            <th>invoice</th>
            <th>date</th>
            <th>customer</th>
            <th>payable amount</th>
            <th>paid amount</th>
            <th>due</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><ToggleButton id="tbg-check-3" value={2}>  .
        </ToggleButton></td>
            <td>#AHGA68</td>
            <td>23/09/2022</td>
            <td>jacob marcus</td>
            <td>$100</td>
            <td>$000</td>
            <td>$000</td>
          </tr>
          <tr>
          <td><ToggleButton id="tbg-check-4" value={2}>  .
        </ToggleButton></td>
            <td>#AHGA68</td>
            <td>23/09/2022</td>
            <td>jacob marcus</td>
            <td>$100</td>
            <td>$000</td>
            <td>$000</td>
          </tr>
          <tr>
          <td><ToggleButton id="tbg-check-5" value={2}>  .
        </ToggleButton></td>
            <td>#AHGA68</td>
            <td>23/09/2022</td>
            <td>jacob marcus</td>
            <td>$100</td>
            <td>$000</td>
            <td>$000</td>
          </tr>
          <tr>
          <td><ToggleButton id="tbg-check-6" value={2}>  .
        </ToggleButton></td>
            <td>#AHGA68</td>
            <td>23/09/2022</td>
            <td>jacob marcus</td>
            <td>$100</td>
            <td>$000</td>
            <td>$000</td>
          </tr>
          <tr>
          <td><ToggleButton id="tbg-check-7" value={2}>  .
        </ToggleButton></td>
            <td>#AHGA68</td>
            <td>23/09/2022</td>
            <td>jacob marcus</td>
            <td>$100</td>
            <td>$000</td>
            <td>$000</td>
          </tr>
          <tr>
          <td><ToggleButton id="tbg-check-8" value={2}>  .
        </ToggleButton></td>
            <td>#AHGA68</td>
            <td>23/09/2022</td>
            <td>jacob marcus</td>
            <td>$100</td>
            <td>$000</td>
            <td>$000</td>
          </tr>
          <tr>
          <td><ToggleButton id="tbg-check-9" value={2}>  .
        </ToggleButton></td>
            <td>#AHGA68</td>
            <td>23/09/2022</td>
            <td>jacob marcus</td>
            <td>$100</td>
            <td>$000</td>
            <td>$000</td>
          </tr>
          <tr>
          <td><ToggleButton id="tbg-check-10" value={2}>  .
        </ToggleButton></td>
            <td>#AHGA68</td>
            <td>23/09/2022</td>
            <td>jacob marcus</td>
            <td>$100</td>
            <td>$000</td>
            <td>$000</td>
          </tr>
          <tr>
          <td><ToggleButton id="tbg-check-11" value={2}>  .
        </ToggleButton></td>
            <td>#AHGA68</td>
            <td>23/09/2022</td>
            <td>jacob marcus</td>
            <td>$100</td>
            <td>$000</td>
            <td>$000</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default List