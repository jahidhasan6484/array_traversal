let array = [00, 10, 20, 30]

const renderArray = () => {
    array.forEach((data, index) => {
        const show_data = document.getElementById('show_data');
        const div = document.createElement("div");
        div.innerHTML = `
        <p id=${index}>${data}</p>
        `;
        show_data.appendChild(div);
    })
}

const handleSearch = () => {
    const search_input_indexEl = document.getElementById('search_input_index').value;

    if (search_input_indexEl == '') {
        alert("Please enter an index")
    } else {
        const highlightEl = document.getElementById(search_input_indexEl);

        if (search_input_indexEl >= 0 && search_input_indexEl < array.length) {
            highlightEl.classList.add("highlight");

            setTimeout(() => {
                highlightEl.classList.remove("highlight");
            }, 2000)

        } else {
            alert("Please enter a valid index")
        }
    }

}

const handleInsert = () => {
    const insert_input_indexEl = document.getElementById('insert_input_index').value;
    const insert_input_dataEl = document.getElementById('insert_input_data').value;

    if (insert_input_indexEl == '' || insert_input_indexEl > array.length || insert_input_indexEl < 0) {
        alert(`Please add index between 0 to ${array.length}`)
    } else if (insert_input_dataEl == '') {
        alert("Please enter a number")
    } else if (parseInt(insert_input_indexEl) >= 0 && parseInt(insert_input_indexEl) === array.length) {
        const show_data = document.getElementById('show_data');
        show_data.innerHTML = "";

        array[parseInt(insert_input_indexEl)] = parseFloat(insert_input_dataEl);
        renderArray()
    } else if (parseInt(insert_input_indexEl) >= 0 && parseInt(insert_input_indexEl) <= array.length) {

        for (let i = array.length - 1; i >= 0; i--) {
            if (i >= parseInt(insert_input_indexEl)) {
                array[i + 1] = array[i];
                if (i === parseInt(insert_input_indexEl)) {
                    const show_data = document.getElementById('show_data');
                    show_data.innerHTML = "";

                    array[i] = parseFloat(insert_input_dataEl);
                    renderArray()
                }
            }
        }
    }
}

renderArray()