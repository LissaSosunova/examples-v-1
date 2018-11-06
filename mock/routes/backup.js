// var arr = response.user.contacts;
// var cont = [];
// for (var i =0; i < arr.length; i++){
//     var name;
//     var newarr = filereader(fs, './mock/api/users/'+ arr[i] +'/get.json');
//     newarr
//         .then((response) =>{
//             name = response.user.title;
//             return name;
//         })
//         .then((name) =>{
//             cont.push(name);
//             return cont;
//         })
//         .then((cont) =>{
//             userData.contacts = cont;
//             console.log(userData);
//             return res.json(userData);
//         })
// }


// arr.forEach(function (item) {
//     var title = filereader(fs, './mock/api/users/'+ item +'/get.json');
//     title
//         .then((response) =>{
//             var friend = new Object();
//             friend.id = item;
//             friend.name = response.user.title;
//             console.log(friend);
//             return friend;
//         });
//     cont = arr.map(title);
//     var results = Promise.all(cont);
//     results.then(data => // or just .then(console.log)
//         console.log(data) // [2, 4, 6, 8, 10]
//     );
// })




// let cont = [];
// arr.forEach(function (item) {
//     var pathes = filereader(fs, './mock/api/users/'+ item +'/get.json');
//     pathes
//         .then((response) => {
//             // console.log(response.user.title);
//             cont.push(response.user.title);
//             // console.log(cont);
//             return cont;
//         })
//     var data = Promise.all(pathes);
//     console.log(data);
// });


// function getNames(arr) {
//     let cont = [];
//     arr.forEach(function (item, i) {
//         var pathes = filereader(fs, './mock/api/users/'+ item +'/get.json');
//         pathes
//             .then((response) => {
//                 cont.push(response.user.title);
//                 console.log(cont);
//                 return cont;
//             })
//     });
//     return cont;
// }


// function testPostMessage(req, res) {
//     var promissForReadingFile = filereader(fs, pathToFile);
//     var newData = req.body;
//
//     promissForReadingFile
//         .then((response) => {
//             var newArr = response;
//
//             for (var i = 0; i < response.messages.length; i++){
//                 newArr.messages = response.messages.concat(newData);
//             }
//             var refresh = {
//                 "messages": newArr.messages
//             };
//             fs.writeFile(pathToFile, JSON.stringify(refresh));
//             return newArr;
//         }, (error) => {
//             console.log("POST - ERROR", pathToFile, error);
//         })
//         .then((response) => {
//             res.json(response);
//         });
// }