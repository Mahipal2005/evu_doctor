// fill in javascript code here
let name=document.getElementById('name')
let doctor_id=document.getElementById('doctor_id')
let Specialization=document.getElementById('specialization')
let Experience=document.getElementById('experience')
let email=document.getElementById('email')
let mobile=document.getElementById('mobile')

let form=document.querySelector('form')

data=[]

let tbody=document.querySelector('tbody')
form.addEventListener('submit',function(event){
    event.preventDefault();
    obj={}
    obj.name=name.value
    obj.doctorid=doctor_id.value
    obj.department = Specialization.value
    obj.Experience=Experience.value
    obj.email= email.value
    obj.mobile=mobile.value

    data.push(obj)
    tbody.innerHTML=null
    data.map(ele =>{
        let row=document.createElement('tr')
        let tdname=document.createElement('td')
        let tddoc=document.createElement('td')
        let tdspe=document.createElement('td')
        let tdexperience=document.createElement('td')
        let tdemail=document.createElement('td')
        let tdmob=document.createElement('td')
        let tdrole=document.createElement('td')
        let tddelete=document.createElement('button')
        tddelete.style.backgroundColor='red'

        tdname.innerText=ele.name
        tddoc.innerText=ele.doctorid
        tdspe.innerText=ele.department
        tdexperience.innerText=ele.Experience
        tdemail.innerText=ele.email
        tdmob.innerText=ele.mobile
        tdrole.innerText=myfun(Number(tdexperience.innerText))
        // console.log(tdrole.innerText)
        tddelete.innerText="delete"

        row.append(tdname,tddoc,tdspe,tdexperience,tdemail,tdmob,tdrole,tddelete)
        tbody.append(row)
        tddelete.addEventListener('click',function(){
            row.innerHTML=""
        })   
        function myfun(experience){
            if(experience > 5){
                return "Senior"
            }
            else if(experience<= 5 && experience>=2){
                return "Junior"
            }
            else if(experience<2){
                return "Trainee"
            }
        }
    })

})