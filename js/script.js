LuasKelilingPersegi = () => {
    let sisi = document.getElementById('sisiPersegi').value;
    let luas = sisi*sisi;
    let keliling = sisi*4;
    document.getElementById('luasKelilingPersegi').innerHTML = "<b><p>Luas : " + luas + " m2</p><p>Keliling : " + keliling + " m</p></b>";
    document.getElementById('luasKelilingPersegi').style.display = "flex";
    document.getElementById('luasKelilingPersegi').style.flexDirection = "column";
}

resetValue = () => {
    document.getElementById('sisiPersegi').value = null;
    document.getElementById('luasKelilingPersegi').style.display = "none";
}