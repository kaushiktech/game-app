import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key:'fd725ca534ec4951ac9dae20d1a8ae59'
    }
})