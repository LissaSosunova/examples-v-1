function getForm(options) {
    inputsData.rows.forEach(row => {
        var section = document.createElement('div');
        row.forEach(element => {
            renderElement({
                elementSource: element,
                target: section,
                type: "input"
            })
        });
        var place = document.querySelector('#place');
        place.appendChild(section);
    });

}

