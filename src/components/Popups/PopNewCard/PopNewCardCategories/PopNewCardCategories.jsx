export const PopNewCardCategories = ({newTask,setNewTask}) => {
  return (
    <div className="pop-new-card__categories categories">
      <p className="categories__p subttl">Категория</p>
      <div className="categories__themes">
        <label htmlFor="">
          Web Design
          <input
            onChange={(e) => {
              setNewTask({ ...newTask, topic: e.target.value });
            }}
            type="radio"
            name=""
            value="Web Design"
          />
        </label>
        <label htmlFor="">
          {" "}
          Copywriting
          <input
            onChange={(e) => {
              setNewTask({ ...newTask, topic: e.target.value });
            }}
            type="radio"
            name=""
            value="Copywriting"
          />
        </label>
        <label htmlFor="">
          {" "}
          Research
          <input
            onChange={(e) => {
              setNewTask({ ...newTask, topic: e.target.value });
            }}
            type="radio"
            name=""
            value="Research"
          />
        </label>

        {/*  <div className="categories__theme _orange _active-category">
                <p className="_orange">Web Design</p>
            </div>
            <div className="categories__theme _green">
                <p className="_green">Research</p>
            </div>
            <div className="categories__theme _purple">
                <p className="_purple">Copywriting</p>
            </div> */}
      </div>
    </div>
  );
};
