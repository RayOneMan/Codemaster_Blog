import "./PostId.scss";

export default function PostItem({ id, body, title }) {
  return (
    <div className="post__item">
      <div className="post__content">
        <div className="post__title">ID: {id}. {title} </div>
        <div className="post__text">
          {body}
        </div>
      </div>
    </div>
  );
}
