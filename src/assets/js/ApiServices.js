import axios from "axios";
const baseUrl = "http://127.0.0.1:8000/api"

export default class ApiServices {
    //departments
    getDepartments() {
        return axios.get(baseUrl + '/departments')
    }

    getDesignations() {
        return axios.get(baseUrl + '/designations')
    }
    
    getEmployeeTypes() {
        return axios.get(baseUrl + '/employee-types')
    }

    getEmployeeStatuses() {
        return axios.get(baseUrl + '/employee-statuses')
    } 

    //employees
    getEmployees() {
        return axios.get(baseUrl + '/employees')
    }

    showEmployee(id) {
        return axios.get(baseUrl + `/employees/${id}`)
    }
}