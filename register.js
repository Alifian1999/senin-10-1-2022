const validasi= function(event){
    console.log('tes');
    event.prevenetDefault()
    let email = document.querySelector('.input-email').value
    let password = document.querySelector('.inpassword').value
    let firstName = document.querySelector('.input-firstname').value
    let countryOrRegion = document.querySelector('#countryOrRegion').value

    if(email==''){
        return alert ('email tidak boleh kosong')
    }else if(password==''){
        return alert('password tidak boleh kosong')
    }else if(firstName==''){
        return alert('firstname wajib di isi')
    }else if(countryOrRegion==''){
        return alert('Select country or Region wajib di isi')
    }
}