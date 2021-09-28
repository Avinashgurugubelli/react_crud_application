
export interface Employee {
    id: string;
    firstName: string;
    lastName: string;
    gender: string;
    dob: string;
    phoneNumber: string;
    emailId: string;
    country: string
    address: string;
    [key: string]: any;
}