let ErrorMessage =({foodItems})=>{
  return <>
  {foodItems.length == 0 ? <h4>I am still hungry</h4> : null}
  </>
}

export default ErrorMessage;