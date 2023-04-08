function BoxColor(props) {
  const { r, g, b } = props;

  return (
    <div
      style={{ backgroundColor: `rgb(${r},${g},${b})` }}
      className="d-flex justify-content-center align-items-center w-50 border p-2 mb-2 "
    >
      rgb({r},{g},{b}) <br />#{r.toString(16)}
      {g.toString(16)}
      {b.toString(16)}
    </div>
  );
}

export default BoxColor;
