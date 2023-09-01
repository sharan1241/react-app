
import './App.css';
import Side from './components/Side';
import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Entries from './components/Entries';
import List from './components/List';


function App() {
  return (
    <div className="App">
      <Row>
        <Col sm={2}><Side /></Col>
        <Col sm={10} id='back'>
          <Nav />
          <Entries />
          <List />
        </Col>
      </Row>
      
      
    </div>
  );
}

export default App;
