import { getGifs } from "../../src/helpers/getGifs";

describe('getGifs', () => {
  test('should return a gifs array', async () => {
    // Act
    const gifs = await getGifs('One Punch');

    // Assert
    expect( gifs.lenght ).toBeGreaterThan(0);
    expect( gifs[0] ).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String)
    })
  });
});