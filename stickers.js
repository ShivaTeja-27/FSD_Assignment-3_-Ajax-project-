// // just open gifs page from stickers home page using gif button

const GifButtonInStickersPage = document.querySelector('#Gif-Page-Btn-in-Stickers')
GifButtonInStickersPage.addEventListener('click', (e) => {
	e.preventDefault()
	// console.log(HomeGifBtn)

    window.open('gifs.html');
})


// // Stickers JavaScript start

const SearchButtonSticker = document.querySelector('#searchBtnSticker')
SearchButtonSticker.addEventListener('click', (e) => {
	e.preventDefault()
	// console.log(SearchButtonSticker)

	const UserInputSticker = document.getElementById('textInput2').value

	const Vanish_textInput2 = document.getElementById('textInput2');

	console.log(Vanish_textInput2.value);

	Vanish_textInput2.value = '';


	const api_key = "WKkG8WUEnvcU51jxyX2u7TfXvg85iuBJ"


	const xhr = new XMLHttpRequest()

	//FOR Stickers
	xhr.open('GET', `https://giphy.p.rapidapi.com/v1/stickers/search?api_key=${api_key}&q=${UserInputSticker}&rating=g`)

	xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
	xhr.setRequestHeader('Access-Control-Allow-Credentials', 'true');
	xhr.setRequestHeader("X-RapidAPI-Host", "giphy.p.rapidapi.com");
	xhr.setRequestHeader("X-RapidAPI-Key", "2f60557be0msh0edf34ea542c00dp1266d4jsn8f005413147d");

	xhr.onreadystatechange = () => {
		if (xhr.status === 200 && xhr.readyState === 4) {
			const response = JSON.parse(xhr.responseText);
			console.log(response)


			
			let output = '';

				
				response.data.forEach(items => {


					output += `

					<div id="cont-item-Sticker" class="card mb-3" style="width:15rem" id = "cont-item">
				  <div class=" card-body p-3"> 
				  
				  <a href=${items.url} > <img src="${items.images.fixed_height_small.url}">
				  </a>
				  </div>

				  <div>
				  <p class="card-text p-2" id="Stickernamesize"><b>Sticker name:</b> ${items.title} </p>

				  <p class="card-text p-2" id="stickernamesize"><b>ID of Gif:</b> ${items.id} </p>
				  
				  </div>

				</div>
				
				`
				})
				

					const container = document.querySelector('#gridview')

					container.innerHTML = output

		}
	}

	xhr.send()

})

