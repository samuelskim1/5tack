import PostIndexItem from "./PostIndexItem";
import './PostIndex.scss';
import { useEffect } from "react";
import { useRef } from "react";


const PostIndex = ({ posts, type }) => {
  const shadow = useRef();
  
  const handleScroll = () => {
    const scrollPosition = window.scrollY; // => scroll position
    if (shadow && scrollPosition >= 130 && scrollPosition <= 170) {
      shadow.current.style.height = scrollPosition - 80 + "px";
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  if (!posts) {
    return (
      <div>
        No posts have been made yet :(
      </div>
    )
  }

  return (
    <div className="posts-index-container">
      {!type && (
        <div id="game-show-shadow-anchor">
          <div id="game-show-shadow" ref={shadow} />
        </div>
      )}
      {posts.map((post, idx) => (
        <PostIndexItem post={post} key={post + idx} type={type} />
      ))}
    </div>
  )
};

export default PostIndex;