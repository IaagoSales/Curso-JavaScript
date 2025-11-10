// Lista de tarefas // Aprendizado

const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const   tarefas = document.querySelector('.tarefas');

function criaLi(){
    const li = document.createElement('li');
    return li;
};

inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!inputTarefa.value) return
        criaTarefa(inputTarefa.value);
    };
}); // keypress = pressionar tecla, keyup = pressionar e soltar a tecla, keydown = pressionar e segurar a tecla pressionada

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
};

function criaBotaoApagar(li){
    li.innerText += '';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    // botaoApagar.classList.add('apagar');
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar está tarefa');
    li.appendChild(botaoApagar);

};

function criaTarefa(textoInput){
    const li = document.createElement('li');
    li.innerText = textoInput; 
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li)
    salvarTarefas();
};

btnTarefa.addEventListener('click', function(){
    if(!inputTarefa.value) return
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e){
    const el = e.target;
    
    if(el.classList.contains('apagar')){
        el.parentElement.remove();
         salvarTarefas();
    };
});

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for(let tarefa of liTarefas){
        const tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); // replace = altera a 'tarefa '// trim = remove o espaça na array
        listaDeTarefas.push(tarefaTexto); // push = puxa algo que voce precisa.
    }

const tarefasJSON = JSON.stringify(listaDeTarefas);
localStorage.setItem('tarefas', tarefasJSON);

}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas); // Convertendo de volta para um objeto JavaScript.
    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();

