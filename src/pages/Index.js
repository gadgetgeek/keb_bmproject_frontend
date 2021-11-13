import {useState} from "react"
import {Link} from "react-router-dom"

const Index = (props) => {

     // state to hold form data
  const [newForm, setNewForm] = useState({
    name: "",
    url: ""

})

//handleChange function to sync input with state
const handleChange = (event) => {
    // make a copy of state
    const newState = {...newForm}
    // update the newState
    newState[event.target.name] = event.target.value
    // update the state
    setNewForm(newState)
}

// handleSubmit function for when form is submitted
const handleSubmit = (event) => {
    // prevent the page from refreshing
    event.preventDefault()
    // pass the form data to createPeople function
    props.createBookmark(newForm)
    // reset the form to empty
    setNewForm({
        name: "",
        url: ""
  })
}

const form = (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newForm.name}
        name="name"
        placeholder="name"
        onChange={handleChange}
      />
      <input
        type="text"
        value={newForm.url}
        name="url"
        placeholder="URL to Bookmark"
        onChange={handleChange}
      />
      <input type="submit" value="Add BM" />
    </form>
  );

  if (props.bookmark) {
    return (
      <section>
        {form}
        {props.bookmark.map((bookmark) => {
          return (
            <div key={bookmark._id} className="bookmark">
              <Link to={`/bookmark/${bookmark._id}`}>
                <h1>{bookmark.title}</h1>
              </Link>
              <a href={bookmark.url} alt={bookmark.url} />
            </div>
          );
        })}
      </section>
    );
  } else {
    return (
      <section>
        {form}
        <h1>Please wait...its coming</h1>
      </section>
    );
  }
}
 export default Index