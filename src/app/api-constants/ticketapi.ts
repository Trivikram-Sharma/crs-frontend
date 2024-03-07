export default class ticketapi {
    static hostname = 'http://localhost:8282';

    static entityprefix = '/api/ticket';

    static addTicket = this.hostname + this.entityprefix + '/add';

    static assignTicketToEngineer = this.hostname + this.entityprefix + '/assign/engineer';

    static getAllTickets = this.hostname + this.entityprefix + '/get/all';

    static getTicketWithId = this.hostname + this.entityprefix + '/get/id';

    static getAllTicketsOfCustomer = this.hostname + this.entityprefix + '/get/customer';

    static getAllTicketsOfManager = this.hostname + this.entityprefix + '/get/manager';

    static getAllTicketsOfEngineer = this.hostname + this.entityprefix + '/get/engineer';

    static getAllTicketsWithStatus =  this.hostname + this.entityprefix + '/get/status';

    static updateTicketManager = this.hostname + this.entityprefix + '/update/manager';

}