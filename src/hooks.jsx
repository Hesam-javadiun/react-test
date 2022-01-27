import React, { useEffect, useRef, useState } from 'react';
import { useCallback } from 'react';

export default function useSquidGame(valitate) {
  const [inputValue, setInputValue] = useState('');
  const [guesserMarbles, setGuessertMarbles] = useState(10);
  const [hiderMarbles, setHiderMarbles] = useState(10);
  const [isOdd, setIsOdd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('IN_PROGRESS');
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (guesserMarbles >= 20) setStatus('WIN');
    if (guesserMarbles === 0) setStatus('LOOSE');
  }, [guesserMarbles]);

  const onClick = () => {
    setLoading(true);
    valitate(isOdd, parseInt(inputValue)).then(res => {
      console.log(res)
      console.log(guesserMarbles, hiderMarbles)
      const resultArray = [
        guesserMarbles + res >= 0 ? guesserMarbles + res : 0,
        hiderMarbles - res >= 0 ? hiderMarbles - res : 0,
      ];
      setGuessertMarbles(guesserMarbles + res >= 0 ? guesserMarbles + res : 0);
      setHiderMarbles(hiderMarbles - res >= 0 ? hiderMarbles - res : 0);
      setHistory([...history, resultArray]);
      setLoading(false);
    });
  };
  const submit = { onClick, disabled: loading };

  const register = inputType => {
    const ref = useRef(null);
    useEffect(() => {
      if (inputType === 'number') {
        ref.current.value = '';
      }
    }, [history]);

    const onChangeCheckBox = event => setIsOdd(event.currentTarget.checked);
    const onChangeInput = event => setInputValue(event.currentTarget.value);

    return {
      type: inputType,
      ref: ref,
      onChange: inputType === 'checkbox' ? onChangeCheckBox : onChangeInput,
      disabled: loading,
    };
  };

  return {
    register,
    submit,
    isLoading: loading,
    gameStatus: status,
    history,
  };
}
