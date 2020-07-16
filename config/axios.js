import axios from 'axios';

const clienteAxios=axios.create({
    baseURL: process.env.backend
});

export default clienteAxios;