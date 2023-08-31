const enumScreens = {
    auth: {name: 'auth', title: 'Auth'},
    dashboard: {name: 'dashboard', title: 'Home'},
    addValue: {name: 'addValue', title: 'Cadastra novo valor'},
    config: {name: 'config', title: 'Configuração'},
    person: {name: 'person', title: 'Pessoas'},
    addPerson: {name: 'addPerson', title: 'Cadastra nova pessoa'},
    preload: {name: 'preload', title: 'Preload'},
};

const enumMessageType = {
    OK: 'OK',
    OKCANCEL: 'OKCANCEL',
    CONFIRM: 'CONFIRM',
    CLOSE: 'CLOSE',
    JUSTMESSAGE: 'JUSTMESSAGE',
    ERROR: 'ERROR',
    ALERT: 'ALERT',
};

export {enumScreens, enumMessageType};
