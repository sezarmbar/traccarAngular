import {Server} from './Server';

export class ServerFactory {

  // Uses the User model to create a new User
  create(serverInfo: any) {
    return new Server(serverInfo);
  }

}

