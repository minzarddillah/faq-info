import React from 'react';
import { View, Text } from 'react-native';
import { Picker } from 'native-base';

import styles from './SelectOptions.style';

const SelectOptions = ({
  data, onValueChange, selectedValue, label, enabled
}) => {

  const renderLabel = selectedValue === '' ? '' : label;
  const emptyLabel = data.length === 0 ? `${label} I18n.t('NotAvailable')` : `Select ${label}`;
  const getValueLabelColor = () => {
    return {
      color: selectedValue === '' ? '#999999' : '#000000'
    };
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{renderLabel}</Text>
      <Picker
        mode="dropdown"
        enabled
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        style={getValueLabelColor()}
      >
        <Picker.Item label={emptyLabel} value="" />
        {
          data.map((obj, index) => {
            return (
              <Picker.Item key={index} label={obj.name} value={obj.id.toString()} />
            );
          })
        }
      </Picker>
    </View>
  );
};

export default SelectOptions;

SelectOptions.defaultProps = {
  data: [{ id: '1', name: 'Salon' }]
};