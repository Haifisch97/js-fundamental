
    let myCodeMirror = CodeMirror.fromTextArea(document.querySelector('#myTextArea'), {
        lineNumbers: true,
        mode: 'javascript',
        theme: 'dracula'
    });
    document.querySelector('#runButton').addEventListener('click', function() {
        try {
            let result = eval(myCodeMirror.getValue());
            document.querySelector('#console').innerHTML += JSON.stringify(result) + '<br>';
        } catch (e) {
            document.querySelector('#console').innerHTML += e.message + '<br>';
        }
    });
    const cealrEditor = document.querySelector('.btn-clear-editor');
    cealrEditor.addEventListener('click', () => {
        myCodeMirror.setValue('');
    });




