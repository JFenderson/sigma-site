// const path = require('path')
// const express = require('express')
// const routes = require('./routes/index-route')
// const cors = require('cors')
// require('@babel/polyfill')
import path from 'path'
import express from 'express'
import routes from './routes/index-route'
import cors from 'cors'
import webpack from 'webpack'
import config from '../../webpack.prod.config';
import '@babel/polyfill'

const app = express(),
            DIST_DIR = __dirname,
            HTML_FILE = path.join(DIST_DIR, '../dist/index.html'),
            HTML_LINE_FILE = path.join(DIST_DIR, '../dist/lineHistory.html')

webpack(config)
              
app.get('/', (_ ,res) => {
    res.sendFile(HTML_FILE);
  })
  app.get('/lineHistory', (_, res) => {
    res.sendFile(HTML_LINE_FILE);
  })
  app.use(cors())
  app.use(express.json());
  app.use(express.urlencoded({ extended: true}));
  app.use(express.static(path.join(__dirname + '../../dist')));
  app.use(express.static(path.join(__dirname + '../vendors')));
  app.use('/api', routes);
  app.set('port', process.env.PORT || 8080)
  app.listen(app.get('port'), (err) => {
      if(err){
        console.log(err)
      }else{
        console.log(`server listening on ${app.get('port')}`)
      }
    });