//testing the functionality of the Gemini API in a server action. This will be used to generate recipe feedback based on user input.
'use client'
import { useState } from 'react';
import { generateRecipeFeedback} from '../actions/gemini'; //importing the server action function we created to call the Gemini API

export default function TestPage() {
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleTest = async () => {

    setLoading(true);
    try {
      // Calling the function we imported
      const result = await generateRecipeFeedback("Give me a 1-sentence tip for making better matcha.");
      setResponse(result);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setResponse("Connection failed. Check your terminal!");
    }
    setLoading(false);
  };

  return ( //simple UI to trigger the test and display the response
    <div style={{ padding: '40px', color: 'black', backgroundColor: 'white', minHeight: '100vh' }}>
      <h1 style={{ color: 'black' }}>Matcha Lab Gemini Connection Test</h1>
      <button 
        onClick={handleTest}
        disabled={loading}
        style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#4BAF50', color: 'white', border: 'none', borderRadius: '5px' }}
      >
        {loading ? 'Asking Gemini...' : 'Click to Test AI'}
      </button>
      
      {response && (
        <div style={{ marginTop: '20px', padding: '15px', background: '#f0f0f0', borderRadius: '8px' }}>
          <strong>Gemini says:</strong> {response}
        </div>
      )}
    </div>
  );
}
