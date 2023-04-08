function Random({ min, max }) {
  const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div className="d-flex justify-content-start align-items-center w-50 border p-2 mb-2">
      Random value between {min} and {max} = {randomValue}    </div>
  );
}

export default Random;
