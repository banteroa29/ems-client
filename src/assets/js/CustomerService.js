export default class CustomerService {
    getCustomerLarge() {
        return fetch('../json/customer-large.json').then(res => res.json()).then(d => d.data)
    }
}