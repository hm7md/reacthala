import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navigation from './Navigation';
import Loginbox from './Loginbox';
import Infor from './Infor';
import Cards from './Cards';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <>

    <Navigation />
   <Loginbox/> 
    <Infor/>
     <section className="blog-section">
        <h1>cards type</h1>
        <div className="article-container">
<Cards paraghraph="emarati first" header="Recieve money in any currency with no fees"/>
<Cards paraghraph="skywards"/>
<Cards paraghraph="student"/>
<Cards paraghraph="travel solo"/>

        </div>
        </section>
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
