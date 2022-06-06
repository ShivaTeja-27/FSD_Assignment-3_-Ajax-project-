// // just open Stickers page from stickers home page using gif button in it

const StickerButtonInStickersPage = document.querySelector('#Sticker-Page-Btn-in-Gif-page')
StickerButtonInStickersPage.addEventListener('click', (e) => {
	e.preventDefault()
	// console.log(HomeGifBtn)

    window.open('stickers.html');
})



// // Gifs- JavaScript start

const SearchButtonGif = document.querySelector('#searchBtnGif')
SearchButtonGif.addEventListener('click', (e) => {
	e.preventDefault()
	// console.log(SearchButtonGif)
	

	const UserInputGif = document.getElementById('textInput').value
	
	const Vanish_textInput1 = document.getElementById('textInput');
	
	console.log(Vanish_textInput1.value);
	
	
	// console.log(UserInput)
	
	const api_key = "WKkG8WUEnvcU51jxyX2u7TfXvg85iuBJ"
	
	// for GIF
	const xhr = new XMLHttpRequest()
	xhr.open('GET', `https://giphy.p.rapidapi.com/v1/gifs/search?api_key=${api_key}&q=${UserInputGif}&rating=g`)
	
	xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
	xhr.setRequestHeader('Access-Control-Allow-Credentials', 'true');
	xhr.setRequestHeader("X-RapidAPI-Host", "giphy.p.rapidapi.com");
	xhr.setRequestHeader("X-RapidAPI-Key", "2f60557be0msh0edf34ea542c00dp1266d4jsn8f005413147d");
	
	xhr.onreadystatechange = () => {
		if (xhr.status === 200 && xhr.readyState === 4) {
			const response = JSON.parse(xhr.responseText);
			console.log(response)
			
			var output = '';
			
			
			response.data.forEach(item => {
				
				output += `
				
				<div id="cont-item" class="card mb-3" style="width:15rem" id = "cont-item">
				<div class=" card-body p-3"> 
				
				<a href=${item.url} > <img id="GifImage-Border" src="${item.images.fixed_height_small.url}">
				</a>
				</div>
				
				<div>
				<p class="card-text p-2" id="gifnamesize"><b>Sticker name:</b> ${item.title} </p>
				
				<p class="card-text p-2" id="gifnamesize"><b>ID of Gif:</b> ${item.id} </p>
				</div>
				</div>
				
				`
			})
			const container = document.querySelector('#gridview')
			container.innerHTML = output
			
			
			
			
			Vanish_textInput1.value = '';
			
			
		}
	}
	
	xhr.send()
	
})
