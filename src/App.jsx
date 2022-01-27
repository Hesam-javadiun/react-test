import React from 'react';
import './App.css';
import useSquidGame from './hooks';
import validate from './validation';

export default function App() {
  const { register, submit, gameStatus, isLoading, history } =
    useSquidGame(validate);

  if (isLoading) return <span>loading...</span>;
  if (gameStatus !== 'IN_PROGRESS') return <span>{gameStatus}</span>;
  //
  return (
    <div>
      <label>
        Marble bet count:
        <input {...register('number')} /> 
      </label>

      <label>
        is Odd:
        <input {...register('checkbox')} />
      </label>

      <button {...submit}>submit</button>
      <pre>
        <code>{JSON.stringify(history, null, 2)}</code>
      </pre>
    </div>
  );
}
