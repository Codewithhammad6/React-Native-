// App.js 
import { SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import TrendingPlaces from './components/TrendingPlaces';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards/>
        <ElevatedCards/>
  <ScrollView horizontal showsHorizontalScrollIndicator={false} >
       <TrendingPlaces/>
        <TrendingPlaces/>
        <TrendingPlaces/>
</ScrollView>
<ContactList/>
<ActionCard/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
