
import CommentsIndex from '../CommentsIndex/CommentsIndex';
import Avatar from '../UserInfo/Avatar';
import './PostIndex.scss';


const PostIndex = ({ posts }) => {


  return (
    <div className="posts-index-container">
      {posts?.map((post, i) => (
        <div className='post-index-item' key={i} >
          <div className='post-index-title'>
            {/* {post.title} */}
          </div>
          <div className='post-index-description'>
            {/* {post.description} */}
          </div>
        </div>
      ))}

        {/* FOR TESTING PURPOSES */}
        <div className='post-index-item' >
          <div className='post-section'>
            <div className='post-index-title'>
              This is a title. This is a title. This is a title. This is a title. This is a title. This is a title. This is a title. 
            </div>
            <div className='author-info'>
              <Avatar />
              <div className='author-username'>
                exampleofafairlylongusername
              </div>
            </div>
            <div className='post-index-description'>
              this is some actual text like yo wtf is this font hahahaha this is a real text post haha well this is a superlongword text box hello yes haha word hello okay this is some actual text like yo wtf is this font hahahaha this is a real text post haha well this is a superlongword text box hello yes haha word hello okay
            </div>
          </div>
          <div className='post-comment-separator' />
          <CommentsIndex />
        </div>



        <div className='post-index-item' >
          <div className='author-info'>
            <Avatar />
            <div className='author-username'>
              exampleofafairlylongusername
            </div>
          </div>
          <div className='post-index-title'>
            This is a title. This is a title. This is a title. This is a title. This is a title. This is a title. This is a title. 
          </div>
          <div className='post-index-description'>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
          </div>
          <div className='post-comment-separator' />
        </div>

        <div className='post-index-item' >
          <div className='author-info'>
            <Avatar />
            <div className='author-username'>
              exampleofafairlylongusername
            </div>
          </div>
          <div className='post-index-title'>
            This is a title. This is a title. This is a title. This is a title. This is a title. This is a title. This is a title. 
          </div>
          <div className='post-index-description'>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
          </div>
          <div className='post-comment-separator' />
        </div>

        <div className='post-index-item' >
          <div className='author-info'>
            <Avatar />
            <div className='author-username'>
              exampleofafairlylongusername
            </div>
          </div>
          <div className='post-index-title'>
            This is a title. This is a title. This is a title. This is a title. This is a title. This is a title. This is a title. 
          </div>
          <div className='post-index-description'>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
          </div>
          <div className='post-comment-separator' />
        </div>
    </div>
  )
};

export default PostIndex;