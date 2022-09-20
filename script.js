let url = 'https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL'

function convertUSD() {
    let input = document.getElementById('valUSD')
    let valor = input.value

    fetch(url).then((res) => {
        return res.json()
    }).then((data) => {
        let low = data.USDBRL.low

        document.getElementById('resultUSD').innerHTML = 'R$' + (low * valor).toFixed(2)
    })


}

function convertEUR() {
    let input = document.getElementById('valEUR')
    let valor = input.value

    fetch(url).then((res) => {
        return res.json()
    }).then((data) => {
        let low = data.EURBRL.low

        document.getElementById('resultEUR').innerHTML = 'R$' + (low * valor).toFixed(2)
    })
}