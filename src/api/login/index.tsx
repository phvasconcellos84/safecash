const API = {
    login: {
        user: 'phvasconcellos84@gmail.com',
        password: '123456'
    }
}

const LoginAPI = {

    DoLogin: (user: string, password: string) => {
        if (user === API.login.user && password === API.login.password) 
            return true;

        return false;
    }
}

export default LoginAPI;