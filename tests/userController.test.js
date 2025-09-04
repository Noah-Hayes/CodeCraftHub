// Unit tests for user controller

const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/userModel');

describe('User Controller', () => {
    beforeAll(async () => {
        await User.deleteMany(); // Clean up the database before tests
    });

    test('Register a new user', async () => {
        const response = await request(app)
            .post('/api/users/register')
            .send({ username: 'testuser', email: 'test@example.com', password: 'password123' });
        expect(response.statusCode).toBe(201);
        expect(response.body.message).toBe('User registered successfully');
    });

    test('Login a user', async () => {
        await request(app)
            .post('/api/users/register')
            .send({ username: 'testuser', email: 'test@example.com', password: 'password123' });
        const response = await request(app)
            .post('/api/users/login')
            .send({ email: 'test@example.com', password: 'password123' });
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('token');
    });
});