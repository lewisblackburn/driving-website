// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sendContactForm = async (data: any) => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();

    return result;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error sending contact form:', error);
  }
};
