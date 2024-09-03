export const mockFetch = (email, password) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (email === 'test@test.com' && password === 'password123') {
      resolve({ success: true });
    } else {
      reject(new Error('Неверный адрес электронной почты или пароль'));
    }
  }, 2000);
});
