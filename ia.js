document.addEventListener('DOMContentLoaded', function () {
    const messageForm = document.getElementById('messageForm')

    messageForm.addEventListener('submit', function(event) {
        event.preventDefault()
        const question = document.getElementById('messageInput').value
        consultaGemini(question)
    })

    function consultaGemini(question) {
        const keyGoogle = 'AIzaSyBZaybh57iVi23jcLvzuIrabNG4f3td60A'
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${keyGoogle}`

        const requestData = {
            contents: [
                {
                    parts: [
                        {
                            text: `${question}`
                        }
                    ]
                }
            ]
        }

        const requestOptions = {
            method:'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(requestData)
        }

        fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => {
            const responseTextIa = data.candidates[0].content.parts[0].text
            respostaIa(responseTextIa)
        })
        .catch(error => {
            console.error('Error: ', error)
            respostaIa("Erro ao processar a solicitação.")
        })
    }

    function respostaIa(responseTextIa) {
        const iaResponse = document.getElementById('iaResponse')
        iaResponse.textContent = responseTextIa 
    }
})

// async function translateText(text, translateTo) {
//     const url = `https://api.mymemory.translated.net/get?q=${text}&langpair=pt|en`

//     const response = await fetch(url)
//     const data = await response.json()

//     if (data.responseStatus === 200) {
//         return data.responseData.translatedText
//     } else {
//         throw new Error('Erro ao traduzir o texto.')
//     }
// }


// function respostaIa(responseTextIa) {
//     const iaResponse = document.getElementById('iaResponse')
//     iaResponse.textContent = responseTextIa 


//     translateText(responseTextIa, (translatedText) => {
//         const responseEnElement = document.querySelector('translate')
//         responseEnElement.innerText = translatedText
//     })
// }
