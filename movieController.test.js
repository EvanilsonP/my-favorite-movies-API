const { homePage, createMovie, allMovies } = require('./controllers/MovieController');

describe('homePage function', () => {

    test('should return a JSON response with status 200 and a message', async() => {
        const req = {};
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        await homePage(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ message: "Welcome to the home page. Feel free to explore the features this API provides you." });
    });

    test('CreateMovie function', async() => {
        const req = {
            body: {
                title: 'Test Movie',
                description: 'This is a test movie',
                image_url: 'test-image.jpg',
                trailer_url: 'test-trailer.mp4'
            }
        }
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        }

        await createMovie(req, res);
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
            title: 'Test Movie',
            description: 'This is a test movie',
            image_url: 'test-image.jpg',
            trailer_url: 'test-trailer.mp4'
        }))
    });

    test('should return status 201 and the created movie when all fields are provided', async () => {
        const req = {
            body: {
                title: 'Test Movie',
                description: 'This is a test movie',
                image_url: 'test-image.jpg',
                trailer_url: 'test-trailer.mp4'
            }
        };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        await createMovie(req, res);

        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
            title: 'Test Movie',
            description: 'This is a test movie',
            image_url: 'test-image.jpg',
            trailer_url: 'test-trailer.mp4'
        }));
    });
});



