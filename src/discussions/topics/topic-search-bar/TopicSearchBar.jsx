import SearchField from '@edx/paragon/dist/SearchField';
import React from 'react';

function TopicSearchBar() {
  return (
    <div className="d-flex flex-row card-header p-1">
      <div className="flex-fill m-1">
        <SearchField
          inputLabel=""
          placeholder="Find a topic"
          onSubmit={() => null}
        />
      </div>
    </div>
  );
}

export default TopicSearchBar;
