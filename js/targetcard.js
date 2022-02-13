let editCode = document.getElementById('hover--code');

function cardbase(description){
    
    
    return `
<!-- card start -->
<div class="col-lg-10">
    <div style="background-color:#faf8ff;" class=" d-flex justify-content-between  border rounded p-3 my-3">
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


// target one card
document.getElementById('target1').addEventListener('click',()=>{
    // console.log("clickme")
    let des="C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or 'C with Classes'";
    editCode.innerHTML = cardbase(des);
})

// target 2 card
document.getElementById('target2').addEventListener('click',()=>{
    // console.log("clickme")
    let des="The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript. ";
    editCode.innerHTML = cardbase(des);
})
document.getElementById('target3').addEventListener('click',()=>{
    // console.log("clickme")
    let des="Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.";
    editCode.innerHTML = cardbase(des);
})
document.getElementById('target4').addEventListener('click',()=>{
    // console.log("clickme")
    let des="JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries.";
    editCode.innerHTML = cardbase(des);
})
document.getElementById('target5').addEventListener('click',()=>{
    // console.log("clickme")
    let des="Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.";
    editCode.innerHTML = cardbase(des);
})
document.getElementById('target6').addEventListener('click',()=>{
    // console.log("clickme")
    let des="PHP is a general-purpose scripting language geared towards web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1994. The PHP reference implementation is now produced by The PHP Group. ";
    editCode.innerHTML = cardbase(des);
})
document.getElementById('target7').addEventListener('click',()=>{
    // console.log("clickme")
    let des="Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.";
    editCode.innerHTML = cardbase(des);
})
document.getElementById('target8').addEventListener('click',()=>{
    // console.log("clickme")
    let des="Three.js is a cross-browser JavaScript library and application programming interface used to create and display animated 3D computer graphics in a web browser using WebGL.";
    editCode.innerHTML = cardbase(des);
})
document.getElementById('target9').addEventListener('click',()=>{
    // console.log("clickme")
    let des="MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. ";
    editCode.innerHTML = cardbase(des);
})
