const options = {
    dragging: false,
    touchZoom:false,
    doubleClickZoom:false,
    scrollWheelZoom:false,
    zoomControl:false
}

//create map
const map = L.map('mapid', options).setView([-23.3382024,-46.8437658], 15);

//create and add TileLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    //create icon
    const icon = L.icon({
        iconUrl:"./public/images/map-marker.svg",
        iconSize:[58,68],
        iconAnchor:[29,68],
        popupAnchor:[170,2]

    })

//create and add TileLayer
L   
.marker([-23.3382024,-46.8437658],{icon})
.addTo(map)

/* image gallery */

function selectImage(event){
    
    const button = event.currentTarget

    //Remove classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeAtiveClass)
    
    function removeAtiveClass(button) {
        button.classList.remove("active")
    }
    
    //Seleciona imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector('.orphanage-details > img')
    //Atulizar container img
    imageContainer.src = image.src

    //Add classe .active para este botão
    button.classList.add("active")
}