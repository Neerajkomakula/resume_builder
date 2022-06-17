function skillsfun() {

    let node = document.createElement("input");
    node.type = "text";
    node.classList.add('skill_cls');
    node.classList.add('form-control');
    let skillobj = document.getElementById("skill_id");
    let btnobj = document.getElementById("skill_btn");

    skillobj.insertBefore(node, btnobj);


}

function expfun() {

    let node = document.createElement("input");
    node.type = "text";
    node.classList.add('exp_cls');
    node.classList.add('form-control');
    let expobj = document.getElementById("exp_id");
    let btnobj = document.getElementById("exp_btn");

    expobj.insertBefore(node, btnobj);


}

function edufun() {

    let node = document.createElement("input");
    node.type = "text";
    node.classList.add('edu_cls');
    node.classList.add('form-control');
    let eduobj = document.getElementById("edu_id");
    let btnobj = document.getElementById("edu_btn");

    eduobj.insertBefore(node, btnobj);


}


function create(a) {

    let bt = document.getElementById("registration");
        bt.style.display = "none";
    if (a == 1) {
        

        let cvobj = document.getElementById("cv");
        cvobj.style.display = "block";
    }
    else{
        let cvobj = document.getElementById("template_2")
        cvobj.style.display = "block";
    }


    let fnameobj_f = document.getElementById("Fname").value;


   // let fnameobj_r = document.getElementById("fname_r");
    let fnameobj_r;
    if (a == 2) {
        fnameobj_r = document.getElementById("fname_2");
        
    }
    else {
        fnameobj_r = document.getElementById("fname_r");
    }

    fnameobj_r.innerHTML = fnameobj_f;


    let lnameobj_f = document.getElementById("Lname").value;
    
    let lnameobj_r;
    if(a==2){
        lnameobj_r = document.getElementById("last");
     
    }
    
    else{
        lnameobj_r = document.getElementById("lname_r");
    }
    


    lnameobj_r.innerHTML = lnameobj_f;

    
    let num_f = document.getElementById("ContactNum").value;
    let num_r;
    if(a==2)
    {
        num_r = document.getElementById("num");
    }
    else{
        num_r = document.getElementById("num_r");
    }
  
    num_r.innerHTML = num_f;
    


    let obj1 = document.getElementById("Email").value;
    let obj2;
    if(a==2)
    {
        obj2 = document.getElementById("mail");
    }
    else{
         obj2 = document.getElementById("email_r");
    }
   
    obj2.innerHTML = obj1;



    let linkd_f = document.getElementById("Linkedin").value;
    let linkd_r;
    if(a == 2)
    {
        linkd_r = document.getElementById("linkedin");
    }
    else{
        linkd_r = document.getElementById("linkedin_r");
    }
    linkd_r.innerHTML = linkd_f;

    let addr_f = document.getElementById("Address").value;
    let addr_r;
    if(a == 2)
    {
        addr_r = document.getElementById("address");
    }
    else{
        addr_r = document.getElementById("address_r");
    }
    
    addr_r.innerHTML = addr_f;

    let obj_f = document.getElementById("objective").value;
    let obj_r;

    if(a == 2)
    {
        obj_r = document.getElementById("objective_2");
    }
    else{
        obj_r = document.getElementById("obj_r");
    }

   
    obj_r.innerHTML = obj_f;


    let skill_f = document.getElementsByClassName("skill_cls");

    let str = "";

    for (let i of skill_f) {
        str = str + `<li>${i.value} </li>`;
    }
    if(a==2)
    {
        document.getElementById("skills_2").innerHTML = str;
    }
    else{
        document.getElementById("skills_r").innerHTML = str;
    }
    


    let exp_f = document.getElementsByClassName("exp_cls");

    let str1 = "";

    for (let i of exp_f) {
        str1 = str1 + `<li>${i.value} </li>`;
    }
    if(a == 2)
    {
        const newLocal_1 = "exp_2";
        document.getElementById(newLocal_1).innerHTML = str1;
    }
    else{
        document.getElementById("exp_r").innerHTML = str1;
    }
    

    let edu_f = document.getElementsByClassName("edu_cls");

    let str2 = "";

    for (let i of edu_f) {
        str2 = str2 + `<li>${i.value} </li>`;
    }
    if(a == 2)
    {
        document.getElementById("edu_2").innerHTML = str2;
    }
    else{
        document.getElementById("edu_r").innerHTML = str2;
    }
    

    



}
function printpage() {
    let pr_obj = document.getElementById("print_btn");
    pr_obj.style.visibility = "hidden";

    window.print();
    pr_obj.style.visibility = "visible";
}