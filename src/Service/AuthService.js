
import axios from 'axios';
import { delay } from 'q';



export default class AuthService {

    static isUsuarioAutenticado() {

        const token = sessionStorage.getItem('app-token');
        if (token) {
            return true;
        } else {
            return false;
        }
    }


    static userId() {

        if (sessionStorage.getItem('app-token') != null) {
         
            var urlsplit = Buffer.from(sessionStorage.getItem('app-token'), 'base64').toString('ascii').split('{"sub":"')[1];
            var cpf = urlsplit.substr(0, urlsplit.indexOf('"'));
        }
        const id = cpf;
        console.log("temos que o id é ", id)

        if (id) {
            return id;
        } else {
            return false;
        }
    }



}

