//create map
const map = L.map('mapid').setView([-23.3382024,-46.8437658], 15);

//create and add TileLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    //create icon
    const icon = L.icon({
        iconUrl:"/images/map-marker.svg",
        iconSize:[58,68],
        iconAnchor:[29,68],
    })

let marker;

//Create and add marker
map.on('click',(event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng


    //remove icon
    marker && map.removeLayer(marker)

    //add icon Layer
  
    marker = L.marker([lat,lng], {icon})
    .addTo(map);
})

//Add campo fotos
function addPhotoField(){
    //pegar container de fotos #images
    const container = document.querySelector('#images')
    //Pegar o container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar o clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)
    //verificar se o campo está vazio... se sim, não add ao container de imagens
    const input = newFieldContainer.children[0]

    if (input.value == ""){
        return
    }
    //limpar campo antes de add ao container de imagens
    input.value = ""
    
    //Adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)

}

//Deletando campo fotos
function deleteField(event){
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2){
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    //deletar campo
    span.parentNode.remove()
}

//seleção sim ou Não
function toggleSelect(event){
 
    //retirar class .active (dos botões)
    document.querySelectorAll('.button-select button')
    .forEach(button => button.classList.remove('active'))
    
    //colocar class .active no botão clicado
    const button = event.currentTarget
    button.classList.add("active")
    
    //atualizar input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')

    //verificar se é sim ou Não
    input.value = button.dataset.value

}