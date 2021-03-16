import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './index.scss';
import reportWebVitals from './reportWebVitals';

const CreateUser = React.lazy(() => import('./pages/create-user/create-user'));

ReactDOM.render(
  <React.StrictMode>
    <div className="p-grid p-justify-center p-align-center parent-container">
      <Suspense fallback={''}>
        <Router>
          <Route exact path="/" component={CreateUser} />      
        </Router>
      </Suspense>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
