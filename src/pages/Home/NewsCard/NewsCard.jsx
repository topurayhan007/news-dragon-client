import moment from "moment/moment";
import React from "react";
import { Button, Card, CardImg, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShare,
  FaShareAlt,
  FaStar,
  FaStarHalf,
} from "react-icons/fa";
import Rating from "react-rating";

const NewsCard = ({ news }) => {
  const { _id, title, author, details, image_url, total_view, rating } = news;
  return (
    <Card className="mb-4 rounded-0">
      <Card.Header className="rounded-0 d-flex align-items-center gap-3">
        <Image src={author?.img} style={{ height: "40px" }} roundedCircle />
        <div className="flex-grow-1">
          <h6 className="m-0 mb-1 fw-bold">{author?.name}</h6>
          <p className="m-0 text-secondary">
            <small>{moment(author?.published_date).format("YYYY-MM-DD")}</small>
          </p>
        </div>
        <div className="text-secondary d-flex gap-2">
          <FaRegBookmark />
          <FaShareAlt />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}...{" "}
              <Link to={`/news/${_id}`}>Read More</Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted rounded-0 d-flex">
        <div className="flex-grow-1 d-flex align-items-center gap-2">
          <Rating
            placeholderRating={rating.number}
            readonly
            emptySymbol={<FaRegStar />}
            placeholderSymbol={<FaStar className="text-warning" />}
            fullSymbol={<FaStar />}
          ></Rating>
          {rating?.number}
        </div>
        <div className="d-flex gap-2 align-items-center">
          <FaEye /> {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
