import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import AddSusbscriber from './AddSubscriber';
import './common/common.css';
import PhoneDirectory from './PhoneDirectory';


ReactDOM.render(<PhoneDirectory />, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));

//ReactDOM.render(<AddSusbscriber />, document.getElementById('root'));
registerServiceWorker();