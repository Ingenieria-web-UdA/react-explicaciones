import { useEffect, useState } from "react"

export default function Home() {
  const [counter, setCounter] = useState<number>(0);
  const [error, setError] = useState<string>('');

  const increaseCounter = () => {
    setCounter(counter + 1);
  };
  const decreaseCounter = () => {
    setCounter(counter - 1);
  };

  useEffect(()=>{
    if(counter<=10){
      setError('');
    } else if (counter > 10 && counter < 15){
      setError('Alerta: el contador está aumentando');
    } else if (counter >= 15 && counter < 20){
      setError('Alerta: el contador está aumentando mucho');
    } else{
      setError('ERROR: el contador es demasiado grande');
    }
  }, [counter]);

  return (
  <div className="flex flex-col w-full items-center p-8 gap-5">
    <span>Valor del contador: {counter}</span>
    <div className="flex gap-4">
      <button onClick={increaseCounter} className="bg-gray-900 text-white px-3 py-2 rounded-lg hover:bg-gray-700 shadow-lg">Aumentar</button>
      <button onClick={decreaseCounter} className="bg-gray-900 text-white px-3 py-2 rounded-lg hover:bg-gray-700 shadow-lg">Disminuir</button>
    </div>
    {counter > 10 && (
      <span className="text-red-500 font-bold text-4xl">{error}</span>
    )}
  </div>
  );
}
