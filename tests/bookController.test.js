const request = require('supertest')
const app = require('../app')
const mongoose = require('mongoose')

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI)
})

afterAll(async () => {
  await mongoose.disconnect()
})

describe('GET /books', () => {
  it('should return all books', async () => {
    const res = await request(app).get('/books')
    expect(res.statusCode).toBe(200)
    expect(Array.isArray(res.body)).toBeTruthy()
  })
})