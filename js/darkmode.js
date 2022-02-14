const darkbutton = document.getElementById('darkbtn');

darkbutton.onclick = function(){
    document.body.classList.toggle('bg-dark')
    document.body.classList.toggle('darkshadow')
    // console.log('click');//debugging
    document.getElementById('navbartop').classList.toggle('bg-dark')
    document.getElementById('darkbtn').classList.toggle('darkbutttonmain')
    document.getElementById('services').classList.toggle('claadark')
    document.getElementById('lang').classList.toggle('claadark')
    document.getElementById('prog').classList.toggle('claadark')
    // document.getElementById('home').classList.toggle('claadark')
    document.getElementById('about').classList.toggle('claadark')
    document.getElementById('bg1').classList.toggle('bg-dark2')
    document.getElementById('bg2').classList.toggle('bg-dark2')
    document.getElementById('bg3').classList.toggle('bg-dark2')
    document.getElementById('bg4').classList.toggle('bg-dark2')
    document.getElementById('bg5').classList.toggle('bg-dark2')
    document.getElementById('dett').classList.toggle('darkbutttonmain2')
}