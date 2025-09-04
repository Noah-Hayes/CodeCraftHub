// Unit tests for user service

const User = require('../src/models/userModel');
const userService = require('../src/services/userService');

describe('User Service', () => {
    beforeAll(async () => {
        await User.deleteMany(); // Clean up the database before tests
    });

    test('Create a user', async () => {
        const userData = { username: 'testuser', email: 'test@example.com', password: 'password123' };
        const user = await userService.createUser(userData);
        expect(user).toHaveProperty('_id');
        expect(user.username).toBe(userData.username);
    });
});