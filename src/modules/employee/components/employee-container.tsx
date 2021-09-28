import { Component } from "react";
import { Link } from "react-router-dom";
import EmployeeListView from "./employee-list-view";

class EmployeeContainer extends Component {

    constructor(props: any) {
        super(props)
    }
    render() {
        return (
            <>
                <div className="p-3 container-fluid bg-light rounded-3">
                    <h3>Employee management system</h3>
                    <Link to="/add/employee">
                        <button className="btn btn-dark">+ Add Employee</button>

                    </Link>
                    {/* <EmployeeForm /> */}
                </div>
                <div className="p-3 container-fluid ">
                <EmployeeListView />

                </div>
            </>
        );
    }
}

export default EmployeeContainer;