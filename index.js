 
const HomeGifBtn = document.querySelector('#Gif-Page-Btn')
HomeGifBtn.addEventListener('click', (e) => {
	e.preventDefault()
	// console.log(HomeGifBtn)

    window.open('gifs.html');
})



const HomeStickerBtn = document.querySelector('#Sticker-Page-Btn')
HomeStickerBtn.addEventListener('click', (e) => {
	e.preventDefault()
	// console.log(HomeStickerBtn)

    window.open('stickers.html');
})