// Find as many improvements to the code as possible.

import { useEffect, useState, useMemo } from "react";

/**
 * The aim is to create a simple component that will show a button with the number '2' in it.
 *
 * Each time the button is clicked the number will be incremented. The button label will also include an
 * indication of whether the number is a prime number. When the window hosting the component loses focus
 * the button text will change to red, and when it gains focus the button text will change to green
 *
 * NOTE: a prime number is an integer which is only divisible by 1 and itself.
 */
export default function PrimeCounter() {
  const [count, setCount] = useState(2);
  const [isPrime, setIsPrime] = useState(false);
  const [isFocussed, setIsFocussed] = useState(true);

  // if (isFocussed) {
  //   useEffect(() => {
  //     for (let check = count - 1; check > 1; check--) {
  //       if (count % check === 0) {
  //         setIsPrime(false);
  //         return;
  //       }
  //     }
  //     setIsPrime(true);
  //   }, [isPrime]);
  // }

  useEffect(() => {
    function checkIsPrime(number: number) {
      if (number <= 1) return false;
      for (let check = 2; check <= Math.sqrt(number); check++) {
        if (number % check == 0) {
          return false;
        }
        return true;
      }
    }

    setIsPrime(checkIsPrime(count)!);
  }, [count]);

  const onClick = useMemo(() => () => setCount(count + 1), []);

  useEffect(() => {
    function setBlur() {
      setIsFocussed(false);
    }

    function setFocus() {
      setIsFocussed(true);
    }

    window.addEventListener("blur", setBlur);
    window.addEventListener("focus", setFocus);

    return () => {
      window.removeEventListener("blur", setBlur);
      window.removeEventListener("focus", setFocus);
    };
  }, []);

  return (
    <button onClick={onClick} style={{ color: isFocussed ? "green" : "red" }}>
      {count} is{isPrime ? "" : " not"} a prime number
    </button>
  );
}
