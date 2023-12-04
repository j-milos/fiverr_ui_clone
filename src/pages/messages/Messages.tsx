import { Link } from "react-router-dom";
import s from "./Messages.module.scss";

function Messages() {
  const message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae harum reiciendis fuga nulla, soluta minima odio recusandae unde optio eum temporibus assumenda sed molestias. Repellat quasi at molestias veritatis neque! `;

  return (
    <div className={s.messages}>
      <div className={s.container}>
        <div className={s.title}>
          <h1>Messages</h1>
        </div>
        <table>
          <tbody>
            <tr>
              <th>Buyer</th>
              <th>Last Message</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
            <tr className={s.active}>
              <td>John Doe</td>
              <td>
                <Link to="/message/123" className="link">
                  {message.substring(0, 100)}...
                </Link>
              </td>
              <td>1 day ago</td>
              <td>
                <button>Mark as Read</button>
              </td>
            </tr>
            <tr className={s.active}>
              <td>John Doe</td>
              <td>
                <Link to="/message/123" className="link">
                  {message.substring(0, 100)}...
                </Link>
              </td>
              <td>1 day ago</td>
              <td>
                <button>Mark as Read</button>
              </td>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>
                <Link to="/message/123" className="link">
                  {message.substring(0, 100)}...
                </Link>
              </td>
              <td>1 day ago</td>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>
                <Link to="/message/123" className="link">
                  {message.substring(0, 100)}...
                </Link>
              </td>
              <td>1 day ago</td>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>
                <Link to="/message/123" className="link">
                  {message.substring(0, 100)}...
                </Link>
              </td>
              <td>1 day ago</td>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>
                <Link to="/message/123" className="link">
                  {message.substring(0, 100)}...
                </Link>
              </td>
              <td>1 day ago</td>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>
                <Link to="/message/123" className="link">
                  {message.substring(0, 100)}...
                </Link>
              </td>
              <td>1 day ago</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Messages;
