import { Alert } from 'react-native';

const showError = err => {
  Alert.alert('Ocorreu um Problema', `Mensagem: ${err}`);
};

const loginMessage = {
  'auth/weak-password': 'Senha muito fraca.',
  'auth/operation-not-allowed': 'Operação não é possível.',
  'auth/invalid-email': 'E-mail inválido.',
  'auth/email-already-in-use': 'E-mail já cadastrado.',
  'auth/wrong-password': 'Senha incorreta.',
  'auth/user-not-found': 'Usuário não encontrado.',
  'auth/user-disabled': 'Usuário foi desativado.',
};

export { showError, loginMessage };
