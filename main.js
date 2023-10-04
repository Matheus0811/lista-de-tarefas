$(document).ready(function () {
    // Evento de envio do formulário
    $('#task-form').submit(function (e) {
        e.preventDefault(); // Impede o envio do formulário padrão
        var taskText = $('#task-input').val().trim(); // Pega o texto da tarefa

        if (taskText !== '') {
            // Cria um novo item de lista com a tarefa
            var listItem = $('<li>' + taskText + '</li>');
            $('#task-list').append(listItem);

            // Limpa o campo de entrada
            $('#task-input').val('');
        }
    });

    // Evento de clique nos itens da lista
    $('#task-list').on('click', 'li', function () {
        $(this).toggleClass('completed'); // Adiciona ou remove a classe "completed"
    });
});