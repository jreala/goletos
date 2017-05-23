import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import WotApi from './Components/WotApi';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <div>
        <WotApi></WotApi>
    </div>, document.getElementById('goodbye'));
registerServiceWorker();
