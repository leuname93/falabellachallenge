const http = require('http')
const Koa = require('koa')
const Router = require('koa-router')
const request = require('supertest')
const app = new Koa()

const {loadRoutes} = require('../../../src/infrastructure/server/routes')

const router = new Router()
loadRoutes(router)

app.use(router.routes())

const apptest = request(http.createServer(app.callback()))

describe('routes', () => {
  describe('GET /ping', () => {
    test('should return json', async () => {
      const response = await apptest.get('/ping')
      expect(response.status).toEqual(200)
      expect(response.type).toEqual('text/plain')
      expect(response.text).toEqual('pong')
    })
  })

  describe('GET /prime_number - Querystring not provided', () => {
    const mockResponse = {
      data: [],
      message: 'querystring not provided',
      status: 'fail',
      statusCode: 200,
    }
    test('should return json', async () => {
      const response = await apptest.get('/prime_number')
      expect(response.status).toEqual(200)
      expect(response.type).toEqual('application/json')
      expect(response.body).toEqual(mockResponse)
    })
  })


  describe('GET /prime_number - Querystring provided Prime Number of 15', () => {
    const mockResponse = {
      "status": "success",
      "statusCode": 200,
      "message": "is a prime number",
	    "data": "13,11,7,5,3,2"
    }
    test('should return json', async () => {
      const response = await apptest.get('/prime_number?n=15')
      expect(response.status).toEqual(200)
      expect(response.type).toEqual('application/json')
      expect(response.body).toEqual(mockResponse)
    })
  })

  describe('GET /prime_number - Querystring provided Prime Number of 7', () => {
    const mockResponse = {
      "status": "success",
      "statusCode": 200,
      "message": "is a prime number",
	    "data": "7,5,3,2"
    }
    test('should return json', async () => {
      const response = await apptest.get('/prime_number?n=7')
      expect(response.status).toEqual(200)
      expect(response.type).toEqual('application/json')
      expect(response.body).toEqual(mockResponse)
    })
  })

  describe('GET /prime_number - Querystring provided Prime Number of 47', () => {
    const mockResponse = {
      "status": "success",
      "statusCode": 200,
      "message": "is a prime number",
	    "data": "47,43,41,37,31,29,23,19,17,13,11,7,5,3,2"
    }
    test('should return json', async () => {
      const response = await apptest.get('/prime_number?n=47')
      expect(response.status).toEqual(200)
      expect(response.type).toEqual('application/json')
      expect(response.body).toEqual(mockResponse)
    })
  })
})
