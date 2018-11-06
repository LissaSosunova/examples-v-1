var fs = require('fs');

function filereader(fsRef, path) {
    return new Promise(function (resolve, reject) {
        fsRef.readFile(path, 'utf8', function (e, d) {

            if (e) reject(e);

            else resolve(JSON.parse(d));
        })
    })
}

var pathToFile = "mock/api/chat/postmes.json";

// асинхронное чтение
function readText(reqData) {
    fs.readFile(pathToFile, "utf8",
        function(error,data){

            if(error) throw error; // если возникла ошибка

            writeText(pathToFile, data, reqData);

        });
}

function writeText(path, data, val) {
    var oldData = JSON.parse(data).arr1;
    console.log(oldData);
    for (var i = 0; i < oldData.length; i++){
        var newArr = oldData.concat(JSON.parse(val));

    }
    var refresh = {
        "arr1": newArr
    };


    fs.writeFile(path, JSON.stringify(refresh));
}



function testGetRequest(req, res) {
    var servicePromise = filereader(fs, './mock/api/test/get.json');

    servicePromise
        .then((response) => {
            console.log("GET", './api/test/get.json');
            return response;
        }, (error) => {
            console.log("GET - ERROR", './api/test/get.json', error);
        })
        .then((response) => {
            res.json(response);
        });
}

function testPostRequest(req, res) {
    var servicePromise = filereader(fs, './mock/api/test/post.json');

    servicePromise
        .then((response) => {
            console.log("POST", './api/test/post.json');
            
            return response;
        }, (error) => {
            console.log("POST - ERROR", './api/test/post.json', error);
        })
        .then((response) => {
            res.json(response);
        });
}

function postMessage(req, res) {
    var promissForReadingFile = filereader(fs, pathToFile);
    var newData = req.body;
    var newArr;

    promissForReadingFile
        .then((response) => {
            var oldData = response.messages;

            for (var i = 0; i < response.messages.length; i++){
                newArr = response.messages.concat(newData);
            }
            var refresh = {
                "messages": newArr
            };
            fs.writeFile(pathToFile, JSON.stringify(refresh));
            return newArr;
        }, (error) => {
            console.log("POST - ERROR", pathToFile, error);
        })
        .then((response) => {
            res.json(response);
        });
}

function getChat(req, res) {
    var servicePromise = filereader(fs, pathToFile);
    servicePromise
        .then((response) => {
            return response;
        })
        .then((response) => {
            res.json(response);
        });
}

function getMenu(req, res) {
    var servicePromise = filereader(fs, './mock/api/menu/menu.json');
    servicePromise
        .then((response) => {
            return response;
        })
        .then((response) => {
            res.json(response);
        });
}

function aboutProject(req, res) {
    var servicePromise = filereader(fs, './mock/api/about/about_project.json');
    servicePromise
        .then((response) => {
            return response;
        })
        .then((response) => {
            res.json(response);
        });
}

function contacts(req, res) {
    var servicePromise = filereader(fs, './mock/api/contacts/contacts.json');
    servicePromise
        .then((response) => {
            return response;
        })
        .then((response) => {
            res.json(response);
        });
}

function getBooks(req, res) {
    var path = './mock/api/collections/books/get.json';
    var servicePromise = filereader(fs, path);

    servicePromise
        .then((response) => {
            return response;
        }, (error) => {
        })
        .then((response) => {
            res.json(response);
        });
}

function getUser(req, res) {
    let servicePromise = filereader(fs, './mock/api/users/'+ req.params.id +'/user_pattern/get.json');

    servicePromise
        .then((response) =>{

            return new Promise(function(resolve, reject){
                let contactsArr = [],
                    oneUser = {},
                    stop = 0,
                    length = response.user.contacts.length,
                    data = response;
                for (let i =0; i < length; i++){
                    let key = response.user.contacts[i].id;
                    let newUserContactes = filereader(fs, './mock/api/users/'+ key +'/user_pattern/get.json');
                    newUserContactes
                        .then((response) =>{
                            oneUser = {
                                "name": response.user.name,
                                "id": response.user.id,
                                "avatar": response.user.avatar
                            };
                            contactsArr.push(oneUser);
                            stop = stop + 1;
                            if(length === stop){
                                data.user.contacts = contactsArr;
                                response = data;
                                resolve(response);
                            }
                            return contactsArr;
                        })
                }
            })
                .then((response) => {
                    res.json(response.user);
                });
        })
}


module.exports = { testGetRequest, testPostRequest, getMenu, aboutProject, contacts, getBooks, getUser, postMessage, getChat };