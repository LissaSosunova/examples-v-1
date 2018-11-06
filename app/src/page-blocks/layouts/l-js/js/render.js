function createInput(elementSource) {

    var input = document.createElement('input');

    if(elementSource.type === 'checkbox'){
        return createCheckbox(elementSource);
    }

    input.type = elementSource.type;
    input.value = elementSource.value;
    input.placeholder = elementSource.placeholder;
    input.id = elementSource.id;
    input.className = elementSource.class;
    input.required = elementSource.required;
    return input;
}

function createButton(elementSource) {

    var button = document.createElement('button');
    button.type = elementSource.type;
    button.title = elementSource.title;
    button.innerHTML = elementSource.innerHTML;
    button.id = elementSource.id;
    button.className = elementSource.class;
    button.required = elementSource.required;

    button.addEventListener(elementSource.action.event, function(){
        // console.log(elementSource.action.name);
        elementSource.goAhead();
    });


    return button;
}


var createHandlers = {
    input: createInput,
    button: createButton,
    default: function () {
        
    }
};

function createCheckbox(elementSource) {
    var div = document.createElement('div');
    var input = document.createElement('input');
    var span = document.createElement('span');
    input.type = elementSource.type;
    input.id = elementSource.id;
    input.className = elementSource.class;
    input.required = elementSource.required;
    span.innerHTML += elementSource.value;

    div.appendChild(input);
    div.appendChild(span);
    return div;
}
function renderElement(options) {
    // var defaulElement = new defaulElementConstructor(options.elementSource.tagName, inputsData);
    var br = document.createElement('br');
    var element = createHandlers[options.elementSource.tagName](options.elementSource);

    options.target.appendChild(element);
    options.target.appendChild(br);
}

function defaulElementConstructor(source, data) {
    var element = document.createElement(source.tagName);
    console.log(data);

    return element;
}

