import './App.css';
import OwnHeader from './components/Header';
import Signin from './components/Signin';
import Dashboard from "./components/Dashborad";
import Checkout from './components/payment/Checkout';
import { Layout } from 'antd';
import ContentTabs from "./components/ContentTabs";



import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const {  Content, Footer } = Layout;



function App() {
  return (
    
    <Router>

        <Layout style={{height:"100%"}}>
            <OwnHeader />


            <Switch>

            <Route exact path="/">
            <Content style={{ padding: '0 50px', marginTop: 20}}>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
              <ContentTabs/>
              </div>
            </Content>
            </Route>


            <Route path="/signin">
            <Content style={{ padding: '0 50px', marginTop: 20}}>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                <Signin />
              </div>
            </Content>
          </Route>

          <Route path="/payment">
            <Checkout />
          </Route>

          <Route path="/dashboard">
            <Dashboard />
          </Route>


            </Switch>


            <Footer style={{ textAlign: 'center' }}>©2021 Created by V.Systems</Footer>
          </Layout>
    </Router>

  );
}



export default App;
