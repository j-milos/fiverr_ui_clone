import s from "./Orders.module.scss"

function Orders() {

  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  return (
    <div  className={s.orders}>
      <div className={s.container}>
        <div className={s.title}>
          <h1>Orders</h1>
        </div>
        <table>
        <tbody>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img  className={s.img} src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </td>
            <td>Stunning concept art</td>
            <td>59.<sup>99</sup></td>
            <td>13</td>
            <td>
              <img className={s.message} src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img  className={s.img} src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </td>
            <td>Stunning concept art</td>
            <td>59.<sup>99</sup></td>
            <td>13</td>
            <td>
              <img className={s.message} src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img  className={s.img} src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </td>
            <td>Stunning concept art</td>
            <td>59.<sup>99</sup></td>
            <td>13</td>
            <td>
              <img className={s.message} src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img  className={s.img} src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </td>
            <td>Stunning concept art</td>
            <td>59.<sup>99</sup></td>
            <td>13</td>
            <td>
              <img className={s.message} src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img  className={s.img} src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </td>
            <td>Stunning concept art</td>
            <td>59.<sup>99</sup></td>
            <td>13</td>
            <td>
              <img className={s.message} src="/img/message.png" alt="" />
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Orders 