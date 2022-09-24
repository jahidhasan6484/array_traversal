let array = [00, 10, 20, 30]

const renderArray = () => {
    if (array.length > 0) {
        array.forEach((data, index) => {
            const show_data = document.getElementById('show_data');
            const div = document.createElement("div");
            div.innerHTML = `
        <p id=${index}>${data}</p>
        `;
            show_data.appendChild(div);
        })
    } else {
        const show_data = document.getElementById('show_data');
        const div = document.createElement("div");
        div.innerHTML = `
        <p>No data left in the array</p>
        `;
        show_data.appendChild(div);
    }
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

    const integer_input = parseInt(insert_input_indexEl);
    const float_data = parseFloat(insert_input_dataEl);

    if (insert_input_indexEl == '' || insert_input_indexEl > array.length || integer_input < 0) {
        alert(`Please add index between 0 to ${array.length}`)
    } else if (insert_input_dataEl == '') {
        alert("Please enter a number")
    } else if (integer_input >= 0 && integer_input === array.length) {
        const show_data = document.getElementById('show_data');
        show_data.innerHTML = "";

        array[integer_input] = float_data;
        renderArray()
    } else if (integer_input >= 0 && integer_input <= array.length) {

        for (let i = array.length - 1; i >= 0; i--) {
            if (i >= integer_input) {
                array[i + 1] = array[i];
                if (i === integer_input) {
                    const show_data = document.getElementById('show_data');
                    show_data.innerHTML = "";

                    array[i] = float_data;
                    renderArray()
                }
            }
        }
    }
}

const handleRemove = () => {
    const remove_input_indexEl = document.getElementById('remove_input_index').value;
    const integer_input = parseInt(remove_input_indexEl);

    if (integer_input >= 0 && integer_input < array.length) {
        for (let i = integer_input; i < array.length - 1; i++) {
            array[i] = array[i + 1];
        }
        const show_data = document.getElementById('show_data');
        show_data.innerHTML = "";
        array.length = array.length - 1;
        renderArray()
    } else {
        alert(`Please add index between 0 to ${array.length}`)
    }
}


renderArray()