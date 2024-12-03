
// import React from "react";
// import { StyleSheet, View, Text, Image } from "react-native";
// import { useLocalSearchParams } from "expo-router";
// import products from "@/assets/data/products"; // Replace with your user data

// const UserDetailScreen = () => {
//   const { id } = useLocalSearchParams();
//   const user = products.find((item) => item.id.toString() === id);

//   if (!user) {
//     return <Text>User not found</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       <Image source={{ uri: user.image }} style={styles.image} />
//       <Text style={styles.name}>{user.name}</Text>
//       <Text style={styles.status}>{user.isOnline ? "Online" : "Offline"}</Text>
//       <Text style={styles.description}>{user.description || "No description available."}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 20,
//   },
//   image: {
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//     marginBottom: 20,
//   },
//   name: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   status: {
//     fontSize: 18,
//     color: "gray",
//     marginBottom: 20,
//   },
//   description: {
//     fontSize: 16,
//     textAlign: "center",
//   },
// });

// export default UserDetailScreen;


import React from "react";
import { StyleSheet, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import products from "@/assets/data/products"; // Replace with your user data
import CardItem from "@/components/CartItem";
import Button from "@/components/Button";
import { router } from "expo-router";
 // Assuming the correct path to CardItem

const UserDetailScreen = () => {
  const { id } = useLocalSearchParams(); // Gets the ID from the route params
  const user = products.find((item) => item.id.toString() === id);

  if (!user) {
    return <View style={styles.notFoundContainer}><Text style={styles.notFoundText}>User not found</Text></View>;
  }

  return (
    <View style={styles.container}>
      <CardItem
        image={{ uri: user.image }}
        name={user.name}
        description={user.description}
        isOnline={user.isOnline}
        hasActions={true} // Shows action buttons like Heart, Close, etc.
      />


<Button
        title="Start Chat"
        onPress={() => {
          // Navigate to the chat screen
          // Replace '/chat-screen' with the actual path to the chat screen
          router.push('/chat');
        }}
      />

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  notFoundContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  notFoundText: {
    fontSize: 18,
    color: "red",
  },
});

export default UserDetailScreen;
