import React from 'react';
import ReactPaginate from 'react-paginate';
import { Select } from '@blueprintjs/select';
import { Button, MenuItem } from '@blueprintjs/core';
import find from 'lodash/find';

const numPerPage = [
  { label: '1 Per Page', value: 1 },
  { label: '3 Per Page', value: 3 },
  { label: '6 Per Page', value: 6 },
  { label: '10 Per Page', value: 10 },
];

const showNumChoices = (selection, { handleClick, index, modifiers }) => {
  return (
    <MenuItem
      key={index}
      text={selection.label}
      onClick={handleClick}
      active={modifiers.active}
    />
  );
};

const NumPerPageChoice = ({ perPage, handleNumPerPageChange }) => {
  return (
    <div
      style={{
        width: '100%',
        border: '1px solid grey',
        borderLeft: 'none',
        height: '50px',
        display: 'inherit',
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}
    >
      <Select
        items={numPerPage}
        itemRenderer={showNumChoices}
        onItemSelect={handleNumPerPageChange}
        filterable={false}
      >
        <Button
          text={find(numPerPage, ['value', perPage]).label}
          rightIcon="caret-down"
          className="pagination-button"
          // fill={true}
          alignText="left"
        />
      </Select>
    </div>
  );
};

const Pagination = ({ perPage, handleNumPerPageChange, pageCount }) => {
  return (
    <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
      <ReactPaginate
        containerClassName={'pagination'}
        pageRangeDisplayed={2}
        pageCount={pageCount === 0 ? 1 : pageCount}
        marginPagesDisplayed={2}
        pageClassName={'pagination-page'}
        previousClassName={'pagination-previous'}
        nextClassName={'pagination-next'}
        nextLabel={'>'}
        previousLabel={'<'}
        previousLinkClassName={'previous-link'}
        nextLinkClassName={'next-link'}
        activeClassName={'active-page'}
      />
      <NumPerPageChoice
        perPage={perPage}
        handleNumPerPageChange={handleNumPerPageChange}
      />
    </div>
  );
};

export default Pagination;
