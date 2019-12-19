import server from '../Server';

export const initSessionStudent = (userData) => {
    return server.post('/login/student', userData).then((res) => {
        const data = res.data;

        console.log('token', data)
        return Promise.resolve(data)
    }).catch((e) => {
        return Promise.reject(e)
    })
}

export const initSessionTeacher = (email) => {
    return server.post('/login/teacher', { email: email }).then((res) => {
        const token = res.data.token
        console.log('res.data.token', token);
        console.log('Aaaaaaa', token);
        return Promise.resolve(token)
    }).catch((error) => {
        return Promise.reject(error)
    });
}