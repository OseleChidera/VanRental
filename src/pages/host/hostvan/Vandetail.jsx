import React from 'react'
import styles from '../../../styles/host van/hostvandetail.module.css'
export default function Vandetail() {
  return (
    <div>
      <div className={styles["detail"]}>
        <label htmlFor='vanname'>name:</label> <input type="text" name="vanname" id="vanname" defaultValue={'modest explorer'}/>
      </div>
      <div className={styles["detail"]}>
        <label htmlFor='vanprice'>category:</label>$<input type='number' Value='60' min={50}max={500} id='vanprice' name='vanprice'/>/day
      </div>
      <div className={styles["detail"]}>
        <label>description:</label>
          <textarea resize='false'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nihil, corporis alias molestiae exercitationem rerum illo minima consequuntur, autem voluptates consectetur? Soluta voluptatem natus iusto tempore deleniti. Laudantium, voluptates quaerat?
                  Ex error voluptates aut possimus, nihil libero suscipit voluptas neque officia ad repellat est doloremque repellendus necessitatibus mollitia voluptate delectus modi a, dolor sunt. Tempore, ducimus nisi? Laboriosam, iure nihil.
                  Quisquam neque vitae hic. Possimus, asperiores facilis ipsum enim fugiat iusto quos optio molestiae nulla, sequi provident voluptates modi corrupti inventore officiis temporibus natus nemo voluptatibus eveniet aspernatur maiores! Ex?
                  Maxime sunt numquam dicta nostrum molestias repudiandae doloribus cumque quo? Optio minus molestiae velit facilis provident, debitis est, quidem eveniet explicabo iusto sunt obcaecati similique ab, delectus harum temporibus! Porro?
                  Odio ipsam vitae et, quam sit facilis accusamus corporis? Eligendi incidunt, quam temporibus at, labore delectus earum facilis eaque ut repellendus consequatur quasi doloremque inventore blanditiis suscipit cupiditate quia autem.
                  Nisi vel harum molestias numquam consequuntur voluptatum a et. Repudiandae vel a molestias consectetur ad nulla ducimus, ab corrupti. Nisi quae expedita molestiae sit possimus tenetur eveniet vero mollitia quidem.
                  Aut, eum provident tenetur temporibus vel labore et suscipit voluptatibus aperiam, numquam blanditiis necessitatibus cupiditate quam debitis itaque earum. At aspernatur ex dignissimos provident assumenda, nulla quo excepturi laudantium. Qui!
              </textarea>
      </div>
      <div className={styles["detail" , "options"]}>
        <label>visibility:</label> 
          
          <label className={styles["option"]}  for="public-tab"><input type="radio" id="public-tab" name="tab" checked/>Public</label>
          
          
          <label className={styles["option"]} for="private-tab"><input type="radio" id="private-tab" name="tab"/>Private</label>
      </div>
      <div className="button">
        <button className={styles['save']}>Save</button>
      </div>
    </div>
  )
}
