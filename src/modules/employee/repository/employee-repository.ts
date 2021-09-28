import { Employee } from './../models/employee';
import { AxiosResponse } from 'axios';
import { HttpClient } from '../../../utils/http-client';

export class ApiConsumeExample {

    /**
     * Get all Employees -> it will fetch all the records from the backend. -> returns multiple records
     */
    public async getAllEmployees(): Promise<Employee[]> {
        const url: string = "https://60d824306f13520017a68179.mockapi.io/api/v1/Employees";
        let apiResponse: Promise<AxiosResponse<Employee[]>> = HttpClient.get<Employee[]>(url);
       return (await apiResponse).data;
    }

    /**
     * it will fire a post request to API -> to create a entry
     * @param data holds the data to post to backend
     */
    public async addEmployee(data: Employee) {
        const url: string = "https://60d824306f13520017a68179.mockapi.io/api/v1/Employees";
        await HttpClient.post(url, data);
        // then print all details
        await this.getAllEmployees();
    }

    /**
     * get the Employee by ID -> returns single record.
     * @param id holds the id of an entity to fetch
     */
    public async getEmployee(id: number) {
        const url: string = "https://60d824306f13520017a68179.mockapi.io/api/v1/Employees/" + id;
        let apiResponse: Promise<AxiosResponse<Employee>> = HttpClient.get<Employee>(url);
        console.log((await apiResponse).data);
    }

    /**
     * fires a delete request - to delete entity
     * @param id holds the ID of an entity to delete from backend
     */
    public async deleteEmployee(id: number) {
        const url: string = "https://60d824306f13520017a68179.mockapi.io/api/v1/Employees/" + id;
        let apiResponse: Promise<AxiosResponse<Employee>> = HttpClient.delete<Employee>(url);
        console.log((await apiResponse).data);
    }

    /**
     * fires PUT req -> and updates the details with the ID.
     * @param id holds the id of the entity to update in the backend.
     * @param data holds the data to update.
     */
    public async updateEmployee(id: number, data: Employee) {
        const url: string = "https://60d824306f13520017a68179.mockapi.io/api/v1/Employees/" + id;
        let apiResponse: Promise<AxiosResponse<Employee>> = HttpClient.put<Employee>(url, data);
        console.log((await apiResponse).data);
    }
}

