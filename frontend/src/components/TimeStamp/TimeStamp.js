import { useEffect, useState } from "react";


const TimeStamp = ({ post, review, comment }) => {
  let postDate = new Date(post.createdAt);
  if (post) {
    postDate = new Date(post.createdAt);
  } else if (review) {
    postDate = new Date(review.createdAt);
  } else if (comment) {
    postDate = new Date(comment.createdAt);
  }
  const [timeAgo, setTimeAgo] = useState();

  const calcTimeAgo = postDate => {
    const secs = Math.floor((new Date() - postDate) / 1000);

    let elapsed = secs / 31536000;
    if (elapsed > 1) {
      return Math.floor(elapsed) + " year(s) ago";
    }

    elapsed = secs / 2592000;
    if (elapsed > 1) {
      return Math.floor(elapsed) + " month(s) ago";
    }

    elapsed = secs / 86400;
    if (elapsed > 1) {
      return Math.floor(elapsed) + " day(s) ago";
    }

    elapsed = secs / 3600;
    if (elapsed > 1) {
      return Math.floor(elapsed) + " hour(s) ago";
    }

    elapsed = secs / 60;
    if (elapsed > 1) {
      return Math.floor(elapsed) + " minute(s) ago";
    }

    return Math.floor(secs) + " second(s) ago";
  }

  useEffect(() => {
    if (postDate) setTimeAgo(calcTimeAgo(postDate));
  }, [postDate])

  return (
    <div className='timestamp'>
      {"about " + timeAgo}
    </div>
  );
};

export default TimeStamp;