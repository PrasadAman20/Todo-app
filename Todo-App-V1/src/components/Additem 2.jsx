function Additem2() {
  let name = "Buy paneer";
  let date = "24/9/2024";
  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-6">{name}</div>
        <div class="col-4">{date}</div>
        <div class="col-1">
          <button type="button" class="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Additem2;
