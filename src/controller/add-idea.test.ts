import { AddIdeaController } from './add-idea'

describe('AddIdeaController', () => {

  it('should return 400 if no repository is provided', () => {
    const sut = new AddIdeaController()
    const response = sut.handle({})
    expect(response.statusCode).toBe(400)
  })

})
