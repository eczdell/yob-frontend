
import React, { useState } from 'react';

import { EuiComboBox, EuiFormRow } from '@elastic/eui';

const options = [
  {
    label: 'Kathmandu',
  },
  {
    label: 'Birjung',
  },
  {
    label: 'Dang',
  },
  {
    label: 'Nepaljung',
  },
  {
    label: 'Jumla',
  },
  {
    label: 'Jhapa',
  },
];

export default () => {
  const [selectedOptions, setSelected] = useState([options[2]]);

  const onChange = (selectedOptions) => {
    // We should only get back either 0 or 1 options.
    setSelected(selectedOptions);
  };

  const onCreateOption = (searchValue = []) => {
    const normalizedSearchValue = searchValue.trim().toLowerCase();

    if (!normalizedSearchValue) {
      return;
    }

    const newOption = {
      label: searchValue,
    };

    // Select the option.
    setSelected([newOption]);
  };

  return (
    <EuiFormRow
      label="Destination"
      helpText="Select an occupation from the list. If your occupation isn’t available, create a custom one.">
      <EuiComboBox
        placeholder="Select a single option"
        singleSelection={{ asPlainText: true }}
        options={options}
        selectedOptions={selectedOptions}
        onChange={onChange}
        onCreateOption={onCreateOption}
        customOptionText="Add {searchValue} as your occupation"
      />
    </EuiFormRow>
  );
};