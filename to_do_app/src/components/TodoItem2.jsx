function Todoitem2() {
  let todoName = 'go to college';
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
export default Todoitem2;
