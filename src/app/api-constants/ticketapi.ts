export default class ticketapi {
    static hostname = 'http://localhost:8282';

    static entityprefix = '/api/ticket';

    static addTicket = this.hostname + this.entityprefix + '/add';

    static assignTicketToEngineer = this.hostname + this.entityprefix + '/assign/engineer';


}