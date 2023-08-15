import { useEffect, useState } from "react";


const TimeStamp = ({ post, review, comment }) => {
  let postDate;
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
      if (Math.floor(elapsed) === 1) {
        return Math.floor(elapsed) + " year ago";
      } else {
        return Math.floor(elapsed) + " years ago";
      }
    }

    elapsed = secs / 2592000;
    if (elapsed > 1) {
      if (Math.floor(elapsed) === 1) {
        return Math.floor(elapsed) + " month ago";
      } else {
        return Math.floor(elapsed) + " months ago";
      }
    }

    elapsed = secs / 86400;
    if (elapsed > 1) {
      if (Math.floor(elapsed) === 1) {
        return Math.floor(elapsed) + " day ago";
      } else {
        return Math.floor(elapsed) + " days ago";
      }
    }

    elapsed = secs / 3600;
    if (elapsed > 1) {
      if (Math.floor(elapsed) === 1) {
        return Math.floor(elapsed) + " hour ago";
      } else {
        return Math.floor(elapsed) + " hours ago";
      }
    }

    elapsed = secs / 60;
    if (elapsed > 1) {
      if (Math.floor(elapsed) === 1) {
        return Math.floor(elapsed) + " minute ago";
      } else {
        return Math.floor(elapsed) + " minutes ago";
      }
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