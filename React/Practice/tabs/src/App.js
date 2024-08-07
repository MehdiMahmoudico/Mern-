import './App.css';
import Tab1 from './components/Tab1';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab2 from './components/Tab2';
import Tab3 from './components/Tab3';

function App() {

  return (
    <div className="App">
      
      <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="Tab1" title="Tab1">
      <Tab1/>
      </Tab>
      <Tab eventKey="Tab2" title="Tab2">
      <Tab2/>
      </Tab>
      <Tab eventKey="Tab3" title="Tab3">
      <Tab3/>
      </Tab>
    </Tabs>
    </div>
  );
}

export default App;
