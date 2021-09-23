$(document).ready(function() {
    let elemOptionSelected = $('#my_select').find('option:selected');
    if (elemOptionSelected.length) {
        $('#value').val(elemOptionSelected.val());
        $('#description').val(elemOptionSelected.text());
    }

    $('#my_select').change(function () {
        let elemOptionSelected = $(this).find('option:selected');
        if (elemOptionSelected.length) {
            $('#value').val(elemOptionSelected.val());
            $('#description').val(elemOptionSelected.text());
        }
    });
    $('#btn-add').click(function () {
        let value=$('#value').val();
        let descripcion=$('#description').val();
        if (!value) {
            alert("Debe completar el valor para el nuevo elemento");
            return;
        }
        if (!descripcion) {
            alert("Debe completar la descripcion para el nuevo elemento");
            return;
        }
        let elemSelect = $('#my_select');
        let newElemOption = $('<option></option>');
        newElemOption.val(value);
        newElemOption.text(descripcion);
        elemSelect.append(newElemOption);
        elemSelect.find('option:selected').prop("selected");
        newElemOption.prop('selected', true);
    });
    $('#btn-update').click(function () {
        let elemOptionSelected = $('#my_select').find('option:selected');
        if (elemOptionSelected.length && elemOptionSelected.val()) {
            let value=$('#value').val();
            let descripcion=$('#description').val();
            if (!value) {
                alert("Debe completar el valor para editar el elemento");
                return;
            }
            if (!descripcion) {
                alert("Debe completar la descripcion para editar el elemento");
                return;
            }
            elemOptionSelected.val(value);
            elemOptionSelected.text(descripcion);
        } else {
            alert("Debe seleccionar un elemento");
            return;
        }
    });
    $('#btn-remove').click(function () {
        let elemOptionSelected = $('#my_select').find('option:selected');
        if (elemOptionSelected.length && elemOptionSelected.val()) {
            elemOptionSelected.remove();
            $('#my_select').trigger('change');
        } else {
            alert("Debe seleccionar un elemento");
            return;
        }
    });

});