import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  ScrollView, 
  TouchableOpacity, 
  FlatList,
  SafeAreaView
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import useStore from '../store/userStore';
const HomeScreen = () => {
  const navigation = useNavigation();
const {user} = useStore()
  // Sample data for featured items
  const featuredItems = [
    { id: '1', title: 'Premium Membership', description: 'Unlock exclusive features', price: '$9.99/mo' },
    { id: '2', title: 'Weekly Challenge', description: 'Join now to win prizes', price: 'Free' },
    { id: '3', title: 'New Workout Plan', description: '30-day fitness program', price: '$19.99' },
  ];

  // Sample data for recent activity
  const recentActivity = [
    { id: '1', action: 'Completed Workout', time: '2 hours ago' },
    { id: '2', action: 'Earned Badge', time: 'Yesterday' },
    { id: '3', action: 'Shared Progress', time: '2 days ago' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Welcome back!</Text>
            <Text style={styles.userName}>{user?.name}</Text> {/* Replace with actual user name */}
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image 
              source={require('../assets/images.jpg')} 
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>

        {/* Stats Cards */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Workouts</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>8</Text>
            <Text style={styles.statLabel}>Hours</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>24</Text>
            <Text style={styles.statLabel}>Points</Text>
          </View>
        </View>

        {/* Featured Section */}
        <Text style={styles.sectionTitle}>Featured</Text>
        <FlatList
          horizontal
          data={featuredItems}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.featuredCard}>
              <View style={styles.featuredContent}>
                <Text style={styles.featuredTitle}>{item.title}</Text>
                <Text style={styles.featuredDesc}>{item.description}</Text>
                <Text style={styles.featuredPrice}>{item.price}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.featuredList}
        />

        {/* Quick Actions */}
        <View>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        </View>
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>Start Workout</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>Track Progress</Text>
          </TouchableOpacity>
        </View>

        {/* Recent Activity */}
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        <View style={styles.activityContainer}>
          {recentActivity.map(item => (
            <View key={item.id} style={styles.activityItem}>
              <View style={styles.activityDot} />
              <View style={styles.activityContent}>
                <Text style={styles.activityAction}>{item.action}</Text>
                <Text style={styles.activityTime}>{item.time}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  greeting: {
    fontSize: 18,
    color: '#7f8c8d',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginTop: 5,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#3498db',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  statCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    width: '30%',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
  },
  featuredList: {
    paddingBottom: 10,
  },
  featuredCard: {
    backgroundColor: '#3498db',
    borderRadius: 12,
    padding: 20,
    width: 200,
    marginRight: 15,
    height: 150,
    justifyContent: 'flex-end',
  },
  featuredContent: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 8,
    padding: 10,
  },
  featuredTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  featuredDesc: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 5,
  },
  featuredPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3498db',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  actionButton: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    width: '48%',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  actionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3498db',
  },
  activityContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 30,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  activityDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#3498db',
    marginRight: 15,
  },
  activityContent: {
    flex: 1,
  },
  activityAction: {
    fontSize: 16,
    color: '#2c3e50',
    marginBottom: 3,
  },
  activityTime: {
    fontSize: 14,
    color: '#95a5a6',
  },
});

export default HomeScreen;