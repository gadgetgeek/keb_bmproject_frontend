import {useState, useEffect} from "react"
import { useParams, useNavigate } from "react-router-dom";

const Show = (props) => {
  // grab the navigate function
  const navigate = useNavigate()
  // get the params object
  const params = useParams();
  // grab the id from params
  const id = params.id;
  // grab people from props
  const bookmark = props.bookmark;
  // create state for form
  const [editForm, setEditForm] = useState({})
  // useEffect to set state to the existing person, when the data is available
  useEffect(() => {
      if(props.bookmark){
          const book = bookmark.find((b) => b._id === id);
          setEditForm(book)
      }
  }, [props.bookmark])

  if (props.bookmark) {
    // grab the target person from the bookmark array
    const book = bookmark.find((b) => b._id === id);
    
    // handleChange function for form
    const handleChange = (event) => {
      // create a copy of the state
      const newState = {...editForm}
      // update the newState
      newState[event.target.name] = event.target.value
      // update the state
      setEditForm(newState)
    }

    // handleSubmit for form
    const handleSubmit = (event) => {
      // prevent the refresh
      event.preventDefault()
      // pass the form data to updateBookmark
      props.updatePeople(editForm, book._id)
      // redirect people back to index
      navigate("/")
    }

    const removeBookmark = () => {
      props.deleteBookmark(book._id)
      navigate("/")
    }

    const form = (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.title}
          name="title"
          placeholder="Website"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.url}
          name="url"
          placeholder="URL"
          onChange={handleChange}
        />
        <input type="submit" value="Create Bookmark" />
      </form>
    );

    return (
      <div className="bookmark">
        <a href={bookmark.url} alt={bookmark.url}><h1>{bookmark.title}</h1></a>
        <div>{form}</div>
        <button onClick={removeBookmark}>DELETE</button>
      </div>
    );
  } else {
    return <h1>No Bookmark</h1>;
  }
};

export default Show;