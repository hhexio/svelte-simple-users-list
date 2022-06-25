export class Users {
  constructor() {
    this.users = [];
  }

  set users(data) {
    if (data?.length && Array.isArray(data)) this._users = data;
  }

  get users() {
    return this._users;
  }
}
