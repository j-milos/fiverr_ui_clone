import s from "./Message.module.scss";
import { Link } from "react-router-dom";

function Message() {
  return (
    <div className={s.message}>
      <div className={s.container}>
        <span className={s.breadcrumbs}>
          <Link to="/messages"> MESSAGES {">"}</Link> JOHN DOE {">"}
        </span>
        <div className={s.messages}>
          <div className={s.item}>
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              rerum qui facere voluptatum aliquid nobis magnam quaerat adipisci!
              Sint officiis in accusantium laudantium! Qui aut ad fugiat debitis
              eveniet eos.
            </p>
          </div>
          <div className={`${s.item} ${s.owner}`}>
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              rerum qui facere voluptatum aliquid nobis magnam quaerat adipisci!
              Sint officiis in accusantium laudantium! Qui aut ad fugiat debitis
              eveniet eos.
            </p>
          </div>
          <div className={s.item}>
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              rerum qui facere voluptatum aliquid nobis magnam quaerat adipisci!
              Sint officiis in accusantium laudantium! Qui aut ad fugiat debitis
              eveniet eos.
            </p>
          </div>
          <div className={`${s.item} ${s.owner}`}>
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              rerum qui facere voluptatum aliquid nobis magnam quaerat adipisci!
              Sint officiis in accusantium laudantium! Qui aut ad fugiat debitis
              eveniet eos.
            </p>
          </div>
          <div className={s.item}>
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              rerum qui facere voluptatum aliquid nobis magnam quaerat adipisci!
              Sint officiis in accusantium laudantium! Qui aut ad fugiat debitis
              eveniet eos.
            </p>
          </div>
          <div className={`${s.item} ${s.owner}`}>
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              rerum qui facere voluptatum aliquid nobis magnam quaerat adipisci!
              Sint officiis in accusantium laudantium! Qui aut ad fugiat debitis
              eveniet eos.
            </p>
          </div>
        </div>
        <hr />
        <div className={s.write}>
          <textarea
            name=""
            placeholder="Write a message"
            id=""
            cols={30}
            rows={10}
          ></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Message;
