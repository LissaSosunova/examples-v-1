var inputsData = {
    rows: [
        [
            {
                title: "Name",
                type: "text",
                placeholder: "Name",
                class: "inputs removable",
                id: "01",
                value: null,
                required: true,
                tagName: "input"
            },
            {
                title: "Email",
                type: "email",
                placeholder: "e-mail",
                class: "inputs removable",
                id: "02",
                value: null,
                required: true,
                tagName: "input"
            },
            {
                title: "Text",
                type: "text",
                placeholder: "Text",
                class: "textarea removable",
                id: "03",
                value: null,
                required: false,
                tagName: "input"
            },
            {
                title: "checkbox_1",
                type: "checkbox",
                placeholder: "select it",
                class: "input-checkbox removable",
                id: "04",
                value: "select it",
                required: false,
                tagName: "input"
            }
        ],
        [
            {
                title: "button1",
                type: "button",
                class: "submit removable",
                id: "btnOK",
                innerHTML: "OK",
                tagName: "button",
                action: {
                    event: 'click',
                    name: 'OK',
                    goAhead: function () {
                        var fields = document.querySelectorAll('input');
                        fields.forEach(function (item) {
                            if(item.value === ""){
                                console.log('Вы не заполнили поле: ' + item.placeholder + ' ему будет присвоено значение по умолчанию');
                                item.value = 'default';
                            }else if(!(item.type==='submit')){
                                localStorage.setItem(item.placeholder, item.value);
                            }

                        });
                    }
                }
            },
            {
                title: "button2",
                type: "button",
                class: "cancel removable",
                id: "btnCancel",
                innerHTML: "CANCEL",
                tagName: "button",
                action: {
                    event: 'click',
                    name: 'cancel'
                },
                goAhead: function () {
                    var fields = document.querySelectorAll('.removable');
                    console.log('do');
                    fields.forEach(function (item) {
                        if(!(item.value === "DO it")){
                            item.remove();
                        }

                    });
                    localStorage.clear();
                }
            }
        ]
    ],
    default: {
        text: {
            title: "default title",
            type: "text",
            class: "input-checkbox",
            value: "",
            tagName: "input"
        },
        button: {
            title: "default button",
            type: "button",
            class: "button-submit",
            innerHTML: "default",
            tagName: "button",
            action: {
                event: 'click',
                name: null
            }

        }
    }
};