const validasi= function(event){
    
    let email = document.getElementById('input-email').value
    let password = document.getElementById('inpassword').value
    let firstName = document.getElementById('input-firstname').value
    let countryOrRegion = document.getElementById('countryOrRegion').value

    if(email==''){
        return alert ('email tidak boleh kosong')
    }else if(password==''){
        return alert('password tidak boleh kosong')
    }else if(firstName==''){
        return alert('firstname wajib di isi')
    }else if(countryOrRegion==''){
        return alert('Select country or Region wajib di isi')
    }

    event.prevenetDefault()
}