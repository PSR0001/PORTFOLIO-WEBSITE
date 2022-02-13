let editCode2 = document.getElementById('infocode');

function cardbase2(description){
    
    
    return `
<!-- card start -->
<div class="col-lg-10">
    <div style="background-color:#a3d0f8b3;" class=" d-flex justify-content-between  border rounded p-3 my-3">
        <div class="icon pr-2"><i class="icon-frame far fa-credit-card bg-dark text-light"></i>
        </div>
        <div class="content">
            <div >
                <h5>My Experiences</h5>
            </div>
            <div class=" ">
                <p>${description}</p>
            </div>
        </div>
    </div>
</div>
<!-- card end -->
`
}
document.getElementById('code01').addEventListener('click',()=>{
    // console.log("clickme")
    let des="";
    editCode2.innerHTML = cardbase2(des);
})