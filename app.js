// function* iTerate(){
//  let iNdex = 0;
//  while(true){
//      yield iNdex++;
//  }
 
// }

// const   gen = iTerate();
// console.log(gen.next().value);
// console.log(gen.next().value);


// const data = [
//     {
//         name : 'John doe',
//         age : 32,
//         gender : 'male',
//         lookingFor : 'female',
//         location : 'Boston MA',
//         image  :   'http://randomuser.me/api/portraits/men/82.jpg'
//     },
//     {
//         name : 'John Therap',
//         age : 39,
//         gender : 'male',
//         lookingFor : 'female',
//         location : 'Boston MA',
//         image  :   'http://randomuser.me/api/portraits/men/8.jpg'
    
//     },
//     {
//         name : 'Darlene Wood',
//         age : 23,
//         gender : 'female',
//         lookingFor : 'male',
//         location : 'Boston MA',
//         image  :   'http://randomuser.me/api/portraits/women/22.jpg'
    
//     }
// ];

// const profiles = profileIterator(data);
// document.getElementById('next').addEventListener('click',nextProfile);

//function next profile


//Profile Iterator 
// function  profileIterator(profiles) {
//     let nextIndex = 0;
//     return {
//         next: function(){
//             return nextIndex < profiles.length ? 
//             {value: profiles[nextIndex++], done:false} :
//             {done:true}
//         }
//     };
// }

// $.ajax({
//     url: 'https://randomuser.me/api/',
//     dataType: 'json',
//     success: function(data) {
//       console.log(data);
//     }
//   });

  document.getElementById('next').addEventListener('click',function(e){
    
    //const number = document.querySelector('input[type="number"]').value;

    const xhr = new XMLHttpRequest();
    xhr.open('get',`https://randomuser.me/api/`,true);
    xhr.onload = function(){
        if(this.status === 200){
            const response = JSON.parse(this.responseText);
            console.log(response);
            
            let output= '';
            if(response.info.results === 1){
                nextProfile(response.results[0]);

            } else {
                //output += '<li>something Went wrong </li>';
            }
        }
    };

    xhr.send();
    e.preventDefault();
});

function nextProfile(currentProfile){

    //const currentProfile = profiles.next().value;

    document.getElementById('profileDisplay').innerHTML = `
    <ul class = "list-group">
    <li class = "list-group-item">Name : ${currentProfile.name.title +" "+currentProfile.name.first+" "+currentProfile.name.last}</li>
    <li class = "list-group-item">Age : ${currentProfile.dob.age}</li>
    <li class = "list-group-item">Location : ${currentProfile.location.country}</li>
    <li class = "list-group-item">Gender : ${currentProfile.gender}</li>
    <li class = "list-group-item">Email : ${currentProfile.email}</li>
    </ul>
    `;
    document.getElementById('imageDisplay').innerHTML = `
    <img src = "${currentProfile.picture.large}">`;
}
    