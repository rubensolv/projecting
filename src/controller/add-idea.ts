export class AddIdeaController {

  handle(request: any): any {

    if (!request.repository && !request.title && !request.description) {
      return { statusCode: 400, body: 'Missing param: repository, title, description' }
    }

    if (!request.repository) {
      return { statusCode: 400, body: 'Missing param: repository' }
    }

    if (!request.title) {
      return { statusCode: 400, body: 'Missing param: title' }
    }

    if (!request.description) {
      return { statusCode: 400, body: 'Missing param: description' }
    }

    return { statusCode: 200 }
  }

}
