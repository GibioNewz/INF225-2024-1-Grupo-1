import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const SearchBar = ({ onSearch, onClear }) => {
    const [query, setQuery] = useState('');
  
    const handleSearch = () => {
      onSearch(query);
    };
  
    const handleClear = () => {
      setQuery('');
      onClear();
    };
  
    return (
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button variant="outline-success" onClick={handleSearch}>
          Search
        </Button>
        <Button variant="outline-secondary" onClick={handleClear}>
          Clear
        </Button>
      </Form>
    );
  };
  SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired,
  };
  export default SearchBar;