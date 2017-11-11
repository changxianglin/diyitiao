var el = document.querySelector('#content')
el.addEventListener('blur', function() {
    var data = el.value
    if (navigator.onLine) {
        saveOnline(data)
    } else {
            localStroage.setItem('data', data)
    }
})

window.online = function() {
    var data = localStroage.getItem('data')
    if (!!data) {
        saveOnline(data)
    }
}
function saveOnline(data) {
    var xhr = new XMLHttpRequest()
    xhr.open('POST', '/savedata')
    xhr.send('data=' + data)
}
