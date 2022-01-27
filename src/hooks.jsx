import React, { useEffect, useRef, useState } from 'react';
import { useCallback } from 'react';

export default function useSquidGame(valitate) {
  const [inputValue, setInputValue] = useState("");
  const [marbles, setMarbles] = useState(10);
  const [isOdd, setIsOdd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('IN_PROGRESS');
  const [history, setHistory] = useState([]);
  
  useEffect(() => {
    if(marbles >= 20) setStatus("WIN")
    if(marbles  === 0) setStatus("LOOSE")
  }, [marbles])

  

  const onClick = useCallback(() => {
    setLoading(true);
    setHistory([...history, [0, 1]]);
    valitate(isOdd, inputValue).then(res => {
      const resultArray = [
        marbles + res >= 0 ? marbles + res : 0,
        marbles - res >= 0 ? marbles - res : 0,
      ];
      setMarbles(marbles + res >= 0 ? marbles + res : 0);
      setHistory([...history, resultArray]);
      setLoading(false);
      console.log(res);
    })
  },[]);
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
      disabled: loading ,
    };
  };

  return {
    register: register,
    submit: submit,
    isLoading: loading,
    gameStatus: status,
    history: history,
  };
  }
