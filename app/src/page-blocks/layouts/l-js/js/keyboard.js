class SpecKey{
    constructor(inner){
        var keyOne = document.createElement('div');
        keyOne.classList.add('key');
        this.innerHTML = inner;
    }
}
var keys = [
    [1,2,3,4,5,6,7,8,9,0],
    [
        {en: 'q', ru: 'й', ua: 'й'},
        {en: 'w', ru: 'ц', ua: 'ц'},
        {en: 'e', ru: 'у', ua: 'у'},
        {en: 'r', ru: 'к', ua: 'к'},
        {en: 't', ru: 'е', ua: 'е'},
        {en: 'y', ru: 'н', ua: 'н'},
        {en: 'u', ru: 'г', ua: 'г'},
        {en: 'i', ru: 'ш', ua: 'ш'},
        {en: 'o', ru: 'щ', ua: 'щ'},
        {en: 'p', ru: 'з', ua: 'з'},
        {en: '[', ru: 'х', ua: 'х'},
        {en: ']', ru: 'ъ', ua: 'ї'}
    ],
    [
        {en: 'a', ru: 'ф', ua: 'ф'},
        {en: 's', ru: 'ы', ua: 'і'},
        {en: 'd', ru: 'в', ua: 'в'},
        {en: 'f', ru: 'а', ua: 'а'},
        {en: 'g', ru: 'п', ua: 'п'},
        {en: 'h', ru: 'р', ua: 'р'},
        {en: 'j', ru: 'о', ua: 'о'},
        {en: 'k', ru: 'л', ua: 'л'},
        {en: 'l', ru: 'д', ua: 'д'},
        {en: ';', ru: 'ж', ua: 'ж'},
        {en: '"', ru: 'э', ua: 'є'}
    ],
    [
        {en: 'z', ru: 'я', ua: 'ф'},
        {en: 'x', ru: 'ч', ua: 'і'},
        {en: 'c', ru: 'с', ua: 'в'},
        {en: 'v', ru: 'м', ua: 'а'},
        {en: 'b', ru: 'и', ua: 'п'},
        {en: 'n', ru: 'т', ua: 'р'},
        {en: 'm', ru: 'ь', ua: 'о'},
        {en: ',', ru: 'б', ua: 'л'},
        {en: '.', ru: 'ю', ua: 'д'},
        {en: '\/', ru: '\/', ua: '\/'}
    ],
    [new SpecKey('space').innerHTML, new SpecKey('clear').innerHTML, new SpecKey('esc').innerHTML, new SpecKey('backspace').innerHTML, { type: 'switcher' }]
];

class Keyboard {
    constructor(options) {
        this.options = options;

        this.options.lang = this.options.lang || 'en';
        this.options.keyboardClass = this.options.keyboardClass || 'keyboard';
    }
    rerender() {
        if (document.querySelector('.' + this.options.keyboardClass)){
            document.querySelector('.' + this.options.keyboardClass).remove();
        }
        this.render();
    }
    render(targetInput) {
        var options = this.options;
        var self = this;
        if(document.querySelector('.' + options.keyboardClass)){
            return;
        }

        this.keyboard = document.createElement('div');
        var line;
        this.keyboard.classList.add(options.keyboardClass);

        options.keys.forEach(function(row) {
            //do rows
            line = document.createElement('div');
            line.classList.add('row-keyboard');
            row.forEach(function(key){
                if(key.type) {
                    var switcher = new LangSwticher(['en','ru', 'ua'], self);
                    switcher.render(line);
                } else {
                    new Key({
                        target: line,
                        symbol: key,
                        lang: options.lang
                    });
                }
            });
            self.keyboard.appendChild(line);
        });

        this.keyboard.addEventListener('click', function(event) {
            if(event.target.innerHTML === 'backspace'){
                var content = inputKeyboard.value;
                content.split('');
                var contentNew = '';
                for(var i=0; i<content.length-1; i++){
                    contentNew += content[i];
                }
                inputKeyboard.value = contentNew;
            }else if (event.target.innerHTML === 'space'){
                inputKeyboard.value += ' ';
            }else if(event.target.innerHTML === 'clear'){
                inputKeyboard.value = '';
                inputKeyboard.placeholder = "начните вводить текст";
            }else if(event.target.innerHTML === 'esc'){
                this.remove();
                inputKeyboard.value = '';
            }else if(event.target.classList.contains('key')&&
                !(event.target.innerHTML === 'backspace')&&
                !(event.target.innerHTML === 'space')&&
                !(event.target.innerHTML === 'esc')&&
                !(event.target.innerHTML === 'clear')&&
                !(event.target.innerHTML === 'cups')){
                inputKeyboard.value += event.target.innerHTML;
            }
        });

        document.querySelector(options.target).appendChild(this.keyboard);
    }

    remove() {
        this.keyboard.remove();
    }
}

class LangSwticher {
    constructor(arr, keyboard) {
        this.arr = arr;
        this.keyboard = keyboard
    }

    render(target) {
        var switcher = document.createElement('select');
        switcher.classList.add('select');
        var self = this;

        switcher.id = 'switcher';
        this.arr.forEach(function(lang){
            var option = document.createElement('option');
            option.innerHTML = lang;
            option.value = lang;
            if(self.keyboard.options.lang === lang) {
                option.selected = true;
            }

            switcher.appendChild(option);
        });

        switcher.addEventListener('change', function(event) {
            this.keyboard.options.lang = switcher.value;

            this.keyboard.rerender();
        }.bind(this));

        target.appendChild(switcher);
    }
}

class Key {
    constructor(options) {

        var key = document.createElement('div');
        key.classList.add('key');
        key.innerHTML = options.symbol[ options.lang ] || options.symbol;
        options.target.appendChild(key);
    }
}