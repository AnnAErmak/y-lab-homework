import React, { useState } from 'react';
import cn from 'classnames';
import styles from './AuthForm.module.css';
import { mockFetch } from '../../ulis/mockFetch.js';

function AuthForm() {
  const [email, setEmail] = useState('test@test.com');
  const [password, setPassword] = useState('password123');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await mockFetch(email, password);
      if (response.success) {
        alert('Аутентификация успешна!');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Аутентификация</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>Электронная почта:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={cn(styles.input, { [styles.errorInput]: error })}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="password" className={styles.label}>Пароль:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={cn(styles.input, { [styles.errorInput]: error })}
          />
        </div>
        {error && <div className={styles.error}>{error}</div>}
        <button onClick={handleSubmit} disabled={loading} className={styles.button}>
          {loading ? 'Загрузка...' : 'Войти'}
        </button>
      </form>
    </div>
  );
}
export default AuthForm;
