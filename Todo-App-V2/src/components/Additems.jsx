import Additem from "./Additem";

const Additems = ({ addItems }) => {
  return (
    <div className="items-conatiner">
      {addItems.map((items) => (
        <Additem name={items.names} date={items.dueDate}></Additem>
      ))}
    </div>
  );
};
export default Additems;
