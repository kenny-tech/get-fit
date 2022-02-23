import React from 'react';
import { TextInput } from 'react-native';

import styles from '../styles/style';

const SearchInput = () => {
    return (
        <TextInput
            style={styles.search}
            placeholder='Search'
        />
    )
}

export default SearchInput;