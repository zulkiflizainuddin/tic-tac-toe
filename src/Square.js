function Square({value, onClick}) {
  return (
    <button
      className="square"
      onClick={onClick}>  
        {value}
      </button>
  )                                                                           // to register the click and value assign to the squares
}

export default Square;
