var xbtc = new XMLHttpRequest();
xbtc.open('GET', 'https://api.bitcoinaverage.com/ticker/global/USD/', true);
xbtc.onreadystatechange = function(){
	if(xbtc.readyState == 4){
		var ticker = JSON.parse(xbtc.responseText);
		price = ticker.last;
		document.getElementById('btc').innerHTML = "$" + price;
	}
};
xbtc.send();