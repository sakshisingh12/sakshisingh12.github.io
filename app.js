var baseUrl = "https://api.coinranking.com/v2/coins"
var proxyUrl = "https://cors-anywhere.herokuapp.com/"
var apiKey = "coinranking04893fe638ec725759669c769506a9285fab0ee606714b18"

fetch(`${proxyUrl}${baseUrl}`,{
	method: "GET",
	headers: {
		'Content-Type':'application/json',
		'x-access-token': '${apiKey}',
		'Access-Control-Allow-Origin': '*'
	}
}).then((response) => {
	if(response.ok){
		response.json().then((json) => {
			console.log(json.data.coins)

			let coinsData = json.data.coins

			if(coinsData.length > 0){
				var cryptoCoin = ""
			}

			coinsData.forEach((coin) => {
				cryptoCoin += "<tr>"
				cryptoCoin += `<td> ${coin.uuid} </td>`;
				cryptoCoin += `<td> ${coin.btcPrice} </td>`;
				cryptoCoin += `<td> ${coin.rank} </td>`;
				cryptoCoin += `<td> ${coin.tier} </td>`;
				cryptoCoin += `<td> ${coin.name} </td>`;
				cryptoCoin += `<td> ${Math.round(coin.price)} Billion </td>`;
				cryptoCoin += `<td> ${coin.symbol} </td>`;"<tr>";
			})

			document.getElementById("data").innerHTML = cryptoCoin
		})
	}
}).catch((error) => {
	console.log(error)
})