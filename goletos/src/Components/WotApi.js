/**
 * Created by Jason on 5/20/2017.
 */
import React from 'react';
import 'whatwg-fetch';

 class WotApi extends React.Component {
     constructor(props) {
         super(props);
         this.state = {
             data: []
         };
     }

     componentDidMount() {
         var self = this;

         fetch('https://api.worldoftanks.com/wot/tanks/stats/?application_id=af152d2c4e7829c3804452c0118035dc&account_id=1002126794')
         .then(function(response) {
            if(response.status >= 400) {
                throw new Error("Bad response from server.");
            }
            return response.json();
         }).then(function(json) {
             self.setState((prevState, props) => {
                return {data: json.data};
             });
         });
     }

     render() {
        return (<div>Response is {JSON.stringify(this.state.data)}</div>);
     }
 }

export default WotApi;