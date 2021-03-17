export class AddIdeaController {

  handle(request: any): any {

    if (!request.repository) {
      return { statusCode: 400, body: 'Missing param: repository' }
    }

    if (!request.title) {
      return { statusCode: 400, body: 'Missing param: title' }
    }

    return { statusCode: 200 }
  }

}
