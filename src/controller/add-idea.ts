export class AddIdeaController {

  handle(request: any): any {
    return request.repository ? { statusCode: 200 } : { statusCode: 400 }
  }

}
