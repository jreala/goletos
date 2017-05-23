/**
 * Created by Jason on 5/20/2017.
 */
import React from 'react';
import 'whatwg-fetch';

var ClanInformation = require('./ClanInformation.js');

 class WotApi extends React.Component {
     static account_id = '';
     static clanInfo = '';

     constructor(props) {
         super(props);
         this.state = {
             data: []
         };
         console.log('Constructor');
     }



     shouldComponentUpdate() {
         /// Called before render to define if a re-rendering is needed or can be skipped.
         console.log('Should update....');
         return true;
     }

     componentWillUpdate() {
         /// Any state changes via this.setState are not allowed as this method should be strictly used to prepare for
         //     an upcoming update not trigger an update itself
         console.log('Component will update...');
         console.log('Update - Account Id ' + this.account_id);
         console.log('Update - State Data ' + JSON.stringify(this.state.data));
         var clanInformation = new ClanInformation();
         this.clanInfo = clanInformation.extractClanInfo(this.account_id, this.state.data);
         console.log(this.clanInfo);
     }

     componentDidUpdate() {
         /// Used to perform DOM operations after the data has been updated.
         console.log('Component Did Update...');
         console.log('Account ID - ' + this.account_id);
         console.log('State Data - ' + this.state.data);
         console.log(this.state.data['1002126794']);
         console.log(this.state.data[this.account_id]);
     }

     componentWillMount() {
         /// Setting the state in this phase will not trigger a re-rendering
     }

     componentDidMount() {
         /// The DOM can be accessed in this method, enabling to define DOM manipulations or data fetching operations.
         //     Any DOM interactions should always happen in this phase not inside the render method
         var self = this;

         fetch('https://api.worldoftanks.com/wot/tanks/stats/?application_id=af152d2c4e7829c3804452c0118035dc&account_id=1002126794')
         .then(function(response) {
            if(response.status >= 400) {
                throw new Error("Bad response from server.");
            }
            return response.json();
         }).then(function(json) {
             self.account_id = JSON.stringify(Object.keys(json.data)[0]);
             self.setState((prevState, props) => {
                return {data: json.data};
             });
         });
     }

     render() {
         /// Returns the needed compoinent markup
         console.log('Rendering....');
         if(this.account_id === '' || this.account_id === undefined){
             console.log(' Not ready yet...');
             return(<div> Nothing yet </div>);
         }
        return (<div>Response is {JSON.stringify(this.state.data)}</div>);
     }
 }

export default WotApi;