import { AddIdeaController } from './add-idea'

describe('AddIdeaController', () => {
  it('should return 400 if no repository is provided', () => {
    const response = sut().handle({})
    expect(response.statusCode).toBe(400)
    expect(response.body).toBe('Missing param: repository')
  })

  it('should return 400 if no title is provided', () => {
    const response = sut().handle({ repository: 'link' })
    expect(response.statusCode).toBe(400)
  })

  it('should return 200 if success', () => {
    const response = sut().handle({ repository: 'link', title: 'idea', description: 'short text' })
    expect(response.statusCode).toBe(200)
  })

  const sut = () => {
    return new AddIdeaController()
  }
})
