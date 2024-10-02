import React, { useState } from 'react';
import { NewsletterHostname } from '../utils/constants';

type ISubscriptionWidget = { categoryId: number };

const SubscriptionWidget: React.FC<ISubscriptionWidget> = ({ categoryId }) => {
  const [inProgress, setInProgress] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInProgress(true);
    const email = e.currentTarget['subscriber-email']?.value;
    if (!email) {
      alert('Please enter an email address.');
      setInProgress(false);
      return;
    }

    // Send the email to the server
    setTimeout(async () => {
      const url = `${NewsletterHostname}/v1/subscriptions`;
      try {
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify({
            categoryId,
            email,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const bodyText = await response.text();

        if (response.ok) {
          const msg = JSON.parse(bodyText);
          alert(msg.data);
          setInProgress(false);
          return;
        }
        console.error(bodyText);
        alert(`Something went wrong! Kindly try again.`);
      } catch (error) {
        alert(`Something went wrong! Kindly try again.`);
      }
      setInProgress(false);
    }, 0);
  };

  return (
    <>
      <form
        method="post"
        className=" mb-20"
        style={{ textAlign: 'center' }}
        onSubmit={handleSubmit}
      >
        <label
          className={' rounded-pill'}
          style={{ backgroundColor: '#D3D3D3' }}
          htmlFor="subscriber-email"
        >
          <input
            type="email"
            id="subscriber-email"
            name="subscriber-email"
            placeholder="Enter your email"
            className={'btn rounded-pill'}
            style={{
              backgroundColor: '#D3D3D3',
              textAlign: 'left',
              width: '450px',
              border: 'none',
            }}
            required
          ></input>
          <button
            disabled={inProgress}
            type="submit"
            className={'btn btn-lg btn-success rounded-pill'}
            style={{
              width: '150px',
            }}
          >
            {' '}
            Subscribe
          </button>
        </label>
      </form>
    </>
  );
};

export default SubscriptionWidget;
