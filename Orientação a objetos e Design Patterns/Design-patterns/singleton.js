var SETTINGS = {
    api = 'http:...',
    trackJsToken = '12345'
}

// --Exemplo--

function MyApp() {
    
    if (!MyApp.instace) {
        MyApp.instace = this;
    }

    return MyApp.instace;
}