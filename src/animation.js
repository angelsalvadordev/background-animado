const elementBG = document.getElementById('image-animation'),
    rangeChangePos = 25

let bgPosX = 50,
    bgPosY = 50,
    mousePosX,
    mousePosY

elementBG.style.backgroundPositionX = `${bgPosX}%`
elementBG.style.backgroundPositionY = `${bgPosY}%`

elementBG.addEventListener('mousemove', e => {

    mousePosX = e.clientX
    mousePosY = e.clientY

    elementBG.style.backgroundPositionX = `${bgPosX + mousePosX / rangeChangePos}%`

    elementBG.style.backgroundPositionY = `${bgPosY + mousePosY / rangeChangePos}%`

})