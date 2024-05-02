document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('login')
    
    const validarLogin = async () => {
        const username = document.getElementById('username').value
        const password = document.getElementById('password').value

        const urlLogin = 'https://back-login.vercel.app/usuarios'

        const listUsers = await fetch(urlLogin)

        const objUsers = await listUsers.json()

        if (username === '' || password === '') {
            alert('Por Favor Preencha todos os Campos !!')
        } else {
            let validaUser = false

            objUsers.forEach(user => {
                if (user.email === username && user.senha === password) {
                    validaUser = true
                    window.location.href = '../src/screens/home.html'
                }
            })

            if (!validaUser) {
                alert('Por favor verifique o email e senha !!')
            }
        }
    };

    button.addEventListener('click', () => {
        validarLogin()
    })
})
