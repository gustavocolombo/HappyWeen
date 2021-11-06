import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createServer, Model } from 'miragejs'

createServer({

  models:{
    fantasies: Model
  },

  seeds(server){
    server.db.loadData({
      fantasies:[
        {
          id: 1,
          name: 'Pennywise',
          price: 150,
          measures: '1,75',
          days: 2
        },
        {
          id: 2,
          name: 'Jason',
          price: 125,
          measures: '1,80',
          days: 2
        }
      ]
    })
  },

  routes(){
    this.namespace = "api"

    this.get('/fantasy', ()=>{
      return this.schema.all('fantasies');
    })

    this.post('/fantasy', (schema, request) => {
      const response = JSON.parse(request.requestBody);

      return schema.create('fantasies', response);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
