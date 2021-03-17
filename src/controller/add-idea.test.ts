import { AddIdeaController } from './add-idea'

describe('AddIdeaController', () => {

  it.each([
    [{ title: 'title', description: 'description' }, 'Missing param: repository'],
    [{ repository: 'link', description: 'description' }, 'Missing param: title'],
    [{ repository: 'link', title: 'title' }, 'Missing param: description'],
    [{ description: 'description' }, 'Missing param: repository, title'],
    [{}, 'Missing param: repository, title, description'],
  ])('should return 400 if no repository is provided', (givenBody, expectedMessage) => {
    const response = sut().handle(givenBody)
    expect(response.statusCode).toBe(400)
    expect(response.body).toBe(expectedMessage)
  })

  it('should return 200 if success', () => {
    const response = sut().handle({ repository: 'link', title: 'idea', description: 'short text' })
    expect(response.statusCode).toBe(200)
  })

  const sut = () => {
    return new AddIdeaController()
  }
})
