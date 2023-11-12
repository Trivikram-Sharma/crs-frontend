export default class addressapi {
    static hostname = 'http://localhost:8282';

    static entityprefix = '/api/address';
    
    static addaddress = this.hostname + this.entityprefix + '/address';

    static getAddressWithBuilding = this.hostname + this.entityprefix + '/get';

    static getAllAddresses = this.hostname + this.entityprefix + '/get/all';

    static getAddressesWithPincode = this.hostname + this.entityprefix + '/get/pincode';

    static updateAddress = this.hostname + this.entityprefix + '/update';

    static deleteAddress = this.hostname + this.entityprefix + '/delete';
}