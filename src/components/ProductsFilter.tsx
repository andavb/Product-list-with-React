import React, { useState, ChangeEvent } from 'react';
import types from '../interfaces/Type';
import { Filter } from '../interfaces/Filter';
import { Form } from 'react-bootstrap';

interface ProductFilterProps {
  filter: any;
  onFilterChange: (object: Filter) => void;
}

function ProductFilter({
  filter: initialFilter,
  onFilterChange,
}: ProductFilterProps) {
  const [filter, setFilter] = useState(initialFilter);

  const handleOnTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value, name } = event.target;

    const change = {
      [name]: types[value],
    };

    setFilterAndChange({ ...filter, ...change });
  };

  const handleOnSearchChanged = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    const change = {
      [name]: value,
    };

    setFilterAndChange({ ...filter, ...change });
  };

  const setFilterAndChange = (updatedFilter: Filter) => {
    setFilter({ ...filter, ...updatedFilter });
    onFilterChange(updatedFilter);
  };

  return (
    <div className="products-filter">
      <Form.Control
        type="text"
        name="searchQuery"
        className="search"
        placeholder="Search..."
        value={filter.searchQuery?.toString()}
        onChange={handleOnSearchChanged}
      />

      <Form.Select
        name="type"
        value={filter.type.id}
        onChange={handleOnTypeChange}
        className="select"
      >
        {Object.keys(types).map((key) => (
          <option key={key} value={key}>
            {types[key].id}
          </option>
        ))}
      </Form.Select>
    </div>
  );
}

export default ProductFilter;
