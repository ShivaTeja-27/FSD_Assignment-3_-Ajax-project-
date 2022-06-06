
// trending list for Gifs

// // const api_key = "WKkG8WUEnvcU51jxyX2u7TfXvg85iuBJ"

// for GIF
var callapiT = new XMLHttpRequest()
callapiT.open("GET", "https://giphy.p.rapidapi.com/v1/gifs/trending?api_key=WKkG8WUEnvcU51jxyX2u7TfXvg85iuBJ&rating=g");


callapiT.setRequestHeader('Access-Control-Allow-Origin', '*');
callapiT.setRequestHeader('Access-Control-Allow-Credentials', 'true');
callapiT.setRequestHeader("X-RapidAPI-Host", "giphy.p.rapidapi.com");
callapiT.setRequestHeader("X-RapidAPI-Key", "2f60557be0msh0edf34ea542c00dp1266d4jsn8f005413147d");

callapiT.onreadystatechange = () => {
	if (callapiT.status === 200 && callapiT.readyState === 4) {
		const responseTrending = JSON.parse(callapiT.responseText);
		console.log(responseTrending)

		let outputTrending = '';


		responseTrending.data.forEach(Titem => {

			outputTrending += `

			<div id="cont-item" class="card mb-3" style="width:15rem" id = "cont-item">
			  <div class=" card-body p-3"> 
			  
			  <a href=${Titem.url} > <img id="GifImage-Border" src="${Titem.images.fixed_height_small.url}">
			  </a>
			  </div>

			  <div>
			  <p class="card-text p-2" id="gifnamesize"><b>Sticker name:</b> ${Titem.title} </p>

			  <p class="card-text p-2" id="gifnamesize"><b>ID of Gif:</b> ${Titem.id} </p>

			  </div>
			</div>
			
			`
		})


		const Trendingcontainer = document.querySelector('#TrendingListGif')

		Trendingcontainer.innerHTML += outputTrending
		
	}
	}
	
	callapiT.send()

	// var TrendingGifDisplay = document.querySelector('#GifDisplay')
		
		/////////////////////////////////////////////////////
		
		/////////////////////////////////////////////////////
		