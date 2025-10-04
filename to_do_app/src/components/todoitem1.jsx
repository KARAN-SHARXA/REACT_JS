function Toddoitem1() {
  let todoName = ' Buy Milk';
  let tododate = '4/8/20203';

  return (
    <div className="container text-center">
      {/* row 2 */}
      <div className="row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{tododate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default Toddoitem1;
