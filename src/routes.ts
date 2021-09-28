// Refer for more info: https://reactrouter.com/web/example/route-config


import { AboutComponent } from './modules/about/about-component';
import EmployeeContainer from './modules/employee/components/employee-container';
import EmployeeForm from './modules/employee/components/employee-form';
import HomeComponent from "./modules/home/home-component";

const routes = [
    {
        path: "/home",
        component: HomeComponent
    },
    {
        path: "/about",
        component: AboutComponent,
    },
    {
        path: "/employee",
        component: EmployeeContainer,
        routes: [
            {
                path: "/employee/add",
                component: EmployeeForm
            }
        ]
    }
];

export default routes