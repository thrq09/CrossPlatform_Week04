import React, { useState } from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { Switch as PaperSwitch } from "react-native-paper";
import userData from "./data.json";
import styles from "./styles";

const images = {
  "Reynata Prajnadi T": require("./assets/Rey.jpeg"),
  "Louis Gabriel H": require("./assets/Louis.jpeg"),
  "Mohammad Rasyedo M": require("./assets/Edo.jpeg"),
  "Richard Paskah": require("./assets/Icad.jpeg"),
  "Michael Tio": require("./assets/Tio.jpeg"),
  "Calvin Rustiano": require("./assets/akiong.png"),
  "M Rafi Caesy Susanto": require("./assets/Keshi.jpeg"),
};

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? "black" : "white" }]}>
      <PaperSwitch value={isDarkMode} onValueChange={toggleTheme} style={{ margin: 20 }} />
      
      <ScrollView>
        {userData.map((users) => {
          const userImage = images[users.name] || images["Default"];
          return (
            <View style={[styles.card, { backgroundColor: isDarkMode ? "#222" : "#fff" }]} key={users.id}>
              <Image source={userImage} style={styles.avatar} />
              <View>
                <Text style={[styles.boldText, { color: isDarkMode ? "white" : "black" }]}>{users.name}</Text>
                <Text style={{ color: isDarkMode ? "white" : "black" }}>{users.id}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
