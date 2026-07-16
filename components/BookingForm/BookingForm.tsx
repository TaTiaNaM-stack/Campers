'use client';

import { useState, FormEvent } from 'react';
import { CamperRequest } from '@/types/types';
import styles from './BookingForm.module.css';

export default function BookingForm() {
  const [formData, setFormData] = useState<CamperRequest>({
    name: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Sending booking data:', formData);
    // Тут в будущем будет отправка запроса api.post('/booking', formData)
    alert('Booking submitted successfully!');
    setFormData({ name: '', email: '' }); // Очистка после отправки
  };

  return (
    <div className={styles.formContainer}>
      <h3 className={styles.formTitle}>Book your campervan now</h3>
      <p className={styles.formSubtitle}>Stay connected! We are always ready to help you.</p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Name*"
          required
          value={formData.name}
          onChange={handleChange}
          className={styles.input}
        />
        
        <input
          type="email"
          name="email"
          placeholder="Email*"
          required
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
        />

        <button type="submit" className={styles.submitBtn}>
          Send
        </button>
      </form>
    </div>
  );
}