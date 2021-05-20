
let mainLink = process.env.REACT_APP_TRIVIA_API

interface initialSettingProp {
    triviaDifficulty: string,
    questionAmount: number,
    triviaType: string, 
}

export default function client(
    triviaSettings:initialSettingProp ,
    customConfig = {},
) {
    const config = {
        method: 'GET',
        ...customConfig,
    }
    let { triviaDifficulty, questionAmount, triviaType } = triviaSettings
    const settings = `.php?amount=${questionAmount}&difficulty=${triviaDifficulty}&type=${triviaType}`

    return window
        .fetch(`${mainLink}${settings}`, config)
        .then(async response => {
            if (response.ok) {
                return await response.json()
            } else {
                const errorMessage = await response.text()
                return Promise.reject(new Error(errorMessage))
            }
        })
}