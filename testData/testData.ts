// import { ContactUsPage } from "../pages/ContactUsPage";
// import { SignUpPage } from "../pages/SignUpPage";

export const TEST_DATA = {
    login:{
        name: 'auto1',
        email: 'autouser1@gmail.com',
        pass : 'Admin1234'
    },
     InvalidUserData:{
        email: 'autouser@gmail.com',
        pass : 'Admin12345'
    },
    user :{
        name: 'auto6',
        firstname: 'autouser6',
        lastname: 'user6',
        email: 'autouser6@gmail.com',
        pass : 'Admin1234',
        company : 'C_demo'
    },

    userdetails:{
        day : '21',
        month : 'March',
        year : '2020',
        address : "gigaplex, Airoli",
        country : 'Australia',
        state : 'maharashtra',
        city : 'city1',
        zipcode : '555555',
        mobNo : '989898989898'
    },

    urls : 
    {
        products : '/products',
        cart : '/view_cart',
        SignUp : '/login',
        login : '/login',
        testcases : '/test_cases',
        apiTesting : '/api_list',
        contactUs : '/contact_us',
        accountcreated : '/account_created',
        deleteAccount : '/delete_account',
    },

    ContactUs:
    {
        name : 'ABC',
        email : 'rahulpdhule@gmail.com',
        subject : 'testing Contact Us functionality',
        message : 'Entered correct details and uploaded file successfully'
    },
    search: {
    productName: 'Blue Top'
    },
   
}