export default class userapi{
    static hostname = 'http://localhost:8282';

    static entityprefix = '/api/user';

    static login = this.hostname + this.entityprefix + '/login';

    static logout = this.hostname + this.entityprefix + '/logout';

    static register = this.hostname + this.entityprefix + '/register';
}