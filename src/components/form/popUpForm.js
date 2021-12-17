import { htmlIdGenerator } from '@elastic/eui';
import React, { useState, Fragment,useRef } from 'react';

import {
  EuiButton,
  EuiButtonEmpty,
  EuiFieldText,
  EuiForm,
  EuiFormRow,
  EuiModal,
  EuiModalBody,
  EuiModalFooter,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiRange,
  EuiSwitch,
  EuiSuperSelect,
  EuiText,
  EuiCheckboxGroup,
  EuiLink,
  EuiSpacer,

} from '@elastic/eui';

import DatePicker from './datepicker'
import ComboBox from './combobox.js'
import Confirmation from './confirmation.js'
import ComboBoxFrom from './combobox-from.js'



export default () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  // const onSwitchChange = () =>
  //   setIsSwitchChecked((isSwitchChecked) => !isSwitchChecked);

  const closeModal = () => setIsModalVisible(false);

  const showModal = () => setIsModalVisible(true);



  const idPrefix = useRef(htmlIdGenerator()());
  const [isSwitchChecked, setIsSwitchChecked] = useState(false);
  const checkboxes = [
    {
      id: `${idPrefix.current}0`,
      label: 'Pick',
    },
    {
      id: `${idPrefix.current}1`,
      label: 'Drop',
    },
  ];
  const [checkboxIdToSelectedMap, setCheckboxIdToSelectedMap] = useState({
    [`${idPrefix.current}1`]: true,
  });

  const onSwitchChange = () => {
    setIsSwitchChecked(!isSwitchChecked);
  };

  
  const onCheckboxChange = (optionId) => {
    const newCheckboxIdToSelectedMap = {
      ...checkboxIdToSelectedMap,
      ...{
        [optionId]: !checkboxIdToSelectedMap[optionId],
      },
    };

    setCheckboxIdToSelectedMap(newCheckboxIdToSelectedMap);
  };


  const superSelectOptions = [
    {
      value: 'option_one',
      inputDisplay: 'Option one',
      dropdownDisplay: (
        <Fragment>
          <strong>Option one</strong>
          <EuiText size="s" color="subdued">
            <p className="euiTextColor--subdued">
              Has a short description giving more detail to the option.
            </p>
          </EuiText>
        </Fragment>
      ),
    },
    {
      value: 'option_two',
      inputDisplay: 'Option two',
      dropdownDisplay: (
        <Fragment>
          <strong>Option two</strong>
          <EuiText size="s" color="subdued">
            <p className="euiTextColor--subdued">
              Has a short description giving more detail to the option.
            </p>
          </EuiText>
        </Fragment>
      ),
    },
    {
      value: 'option_three',
      inputDisplay: 'Option three',
      dropdownDisplay: (
        <Fragment>
          <strong>Option three</strong>
          <EuiText size="s" color="subdued">
            <p className="euiTextColor--subdued">
              Has a short description giving more detail to the option.
            </p>
          </EuiText>
        </Fragment>
      ),
    },
  ];

  const formSample = (
    <EuiForm id="modalFormId" component="form">

<EuiFormRow label="Name" helpText="I am some friendly help text.">
        <EuiFieldText name="first" />
      </EuiFormRow>

      <EuiFormRow label="Mobile Number" >
        <EuiFieldText name="last" />
      </EuiFormRow>

      <ComboBoxFrom />
      <ComboBox />

      <EuiFormRow
        label="datepicker"
        labelAppend={
          <EuiText size="xs"> 
            <EuiLink>Link to some help</EuiLink>
          </EuiText>
        }>
        <DatePicker />


      </EuiFormRow>



      <EuiSpacer />

      <EuiCheckboxGroup
        options={checkboxes}
        idToSelectedMap={checkboxIdToSelectedMap}
        onChange={onCheckboxChange}
        legend={{
          children:
            'Do you want Pick and drop ?',
        }}
      />

      <EuiSpacer />

      {/* <EuiButton type="submit" fill>
        Save form
      </EuiButton> */}
      <Confirmation />


    </EuiForm>
  );

  // const onSuperSelectChange = (value) => {
  //   setSuperSelectValue(value);
  // };

  let modal;

  if (isModalVisible) {
    modal = (
      <EuiModal onClose={closeModal} initialFocus="[name=popswitch]">
        <EuiModalHeader>
          <EuiModalHeaderTitle>
            <h1>Modal title</h1>
          </EuiModalHeaderTitle>
        </EuiModalHeader>

        <EuiModalBody>{formSample}</EuiModalBody>

        <EuiModalFooter>
          <EuiButtonEmpty onClick={closeModal}>Cancel</EuiButtonEmpty>

          <EuiButton type="submit" form="modalFormId" onClick={closeModal} fill>
            Save
          </EuiButton>
        </EuiModalFooter>
      </EuiModal>
    );
  }
  return (
    <div>
      <EuiButton onClick={showModal}>Go For It</EuiButton>
      {modal}
    </div>
  );
};