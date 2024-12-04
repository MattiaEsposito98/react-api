import ImgNotFound from '../../assets/ImgNotFound.png'
import style from './Card.module.css'

export default function Card({ className = '', title = '', content = '', image, tags = [], published }) {

  return (
    published &&
    <div className={`${style.card} ${className}`}>
      <img className={style.image} src={image || ImgNotFound} alt="" />
      <div className={style.card_body}>
        <h3 className={style.card_title}>{title || "Titolo"}</h3>
        <div>
          {tags.map((tag, i) => (
            <span key={i} className={`${style.span} ${style[tag]}`}>
              {tag}
            </span>
          ))}
        </div>

        <p className={style.card_description}>  {content || "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus provident fuga quas eligendi deleniti officiis sint minus sed nemo perspiciatis."}</p>
        <button className={style.button}>Leggi di più </button>
      </div>
    </div >


  )
}