import './FormSearch.css'

function Search({ changeHandle, searchText }) {
    return(
        <form className="formSearch">
            <input
                type="text"
                name="search"
                className="formSearch-control"
                placeholder="buscar proyecto ..."
                value={searchText}
                onChange={changeHandle}>
                </input>
        </form>
    );
}

export default Search;