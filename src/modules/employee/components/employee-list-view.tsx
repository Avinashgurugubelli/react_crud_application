import { faCoffee, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import { Employee } from "../models/employee";


class EmployeeListView extends Component<any, {
    employees: Employee[]
}> {

    private employees: Employee[] = [
        {
            id: "1",
            firstName: "Jack",
            lastName: "skyler",
            gender: "male",
            dob: "19-09-1994",
            phoneNumber: "2442434234",
            emailId: "jack@dfdf.com",
            country: "India",
            address: "Hyderabad"
        },
        {
            id: "2",
            firstName: "Martin",
            lastName: "Deppe",
            gender: "male",
            dob: "19-09-1994",
            phoneNumber: "3737737",
            emailId: "martin@dfdf.com",
            country: "UK",
            address: "Bankers street"
        }
    ];
    constructor(props: any) {
        super(props);

        this.state = {
            employees: [...this.employees]
        }
    }


    render() {
        return (
            <>
                <div className="container-fluid">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#Id</th>
                                <th scope="col">First name</th>
                                <th scope="col">last Name</th>
                                <th scope="col">Gender</th>
                                <th scope="col">DOB</th>
                                <th scope="col">Phone number</th>
                                <th scope="col">Email id</th>
                                <th scope="col">Country</th>
                                <th scope="col">Address</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                this.state.employees.map((employee: Employee) => (
                                    <tr key={employee.id}>
                                        <td scope="col">{employee.id}</td>
                                        <td scope="col">{employee.firstName}</td>
                                        <td scope="col">{employee.lastName}</td>
                                        <td scope="col">{employee.gender}</td>
                                        <td scope="col">{employee.dob}</td>
                                        <td scope="col">{employee.phoneNumber}</td>
                                        <td scope="col">{employee.emailId}</td>
                                        <td scope="col">{employee.country}</td>
                                        <td scope="col">{employee.address}</td>
                                        <td scope="col" style={{cursor: 'pointer'}}>
                                            <FontAwesomeIcon icon={faTrash} />

                                        </td>
                                        <td scope="col" style={{cursor: 'pointer'}}>
                                            <FontAwesomeIcon icon={faEdit} />
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </>
        )

    }
}

export default EmployeeListView;