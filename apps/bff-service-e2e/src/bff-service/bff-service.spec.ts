import axios from 'axios';

describe('GET /', () => {
  it('should return a message', async () => {
    const { status, data } = await axios.get(`/`);

    expect(status).toBe(200);
    expect(data).toEqual({ message: 'Hello BFF Service' });
  });
});
