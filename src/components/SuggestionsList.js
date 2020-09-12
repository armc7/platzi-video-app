import React from 'react';
import { FlatList } from 'react-native';

import Layout from './SuggestionsListLayout';
import Empty from './Empty';
import Separator from './Separator';
import Suggestion from './Suggestion';

const SuggestionsList = ({ movies }) => {
  const keyExtractor = (item) => item.id.toString();

  const renderEmpty = () => <Empty text="There are not suggestions" />;

  const separator = () => <Separator />;

  return (
    <Layout>
      <FlatList
        data={movies}
        ItemSeparatorComponent={separator}
        keyExtractor={keyExtractor}
        ListEmptyComponent={renderEmpty}
        renderItem={({ item }) => <Suggestion {...item} />}
      />
    </Layout>
  );
};

export default SuggestionsList;