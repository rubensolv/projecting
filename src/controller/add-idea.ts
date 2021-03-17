export class AddIdeaController {

  handle(request: any): any {
    if ((request.repository && request.title)) {
      return { statusCode: 200 }
    } else {
      return { statusCode: 400 }
    }
  }

}
