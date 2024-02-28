import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


import { enablePromise, openDatabase } from 'react-native-sqlite-storage'

var db = openDatabase(
  { name: "test.db", location: "default" },
  () => {
    console.log("Database Created")
  },
  (error) => {
    console.error(error)
    throw Error("Could not connect to database")
  }
)

enablePromise(true)

function App(): React.JSX.Element {


  const [users, setUsers] = useState([])

  const createTable = async () => {
    const userPreferencesQuery = `
     CREATE TABLE IF NOT EXISTS User (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(50) NOT NULL,
      email VARCHAR(100) NOT NULL,
      age INT
  );
  `
    const contactsQuery = `
    INSERT INTO User (username, email, age) VALUES
    ('john_doe', 'john@example.com', 30),
    ('alice_smith', 'alice@example.com', 25),
    ('bob_jones', 'bob@example.com', 40);
  `
    try {
      const connection = db
      connection.executeSql(userPreferencesQuery);
      connection.executeSql(contactsQuery);




    } catch (err) {
      console.log({ err });
    }
  }

  const getData = async () => {
    const getQuery = `SELECT * FROM User;`;

    const tableNames: any = [];

    try {
      const connection = await db
      const result = await connection.executeSql(getQuery);

      result?.forEach((result) => {
        for (let index = 0; index < result.rows.length; index++) {
          console.log(result.rows.item(index))
          tableNames.push(result.rows.item(index))
        }
      })
      setUsers(tableNames)
    } catch (err) {
      console.log({ err });
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

      <TouchableOpacity style={styles.button} onPress={createTable}><Text style={styles.buttonText}>Create Table</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={getData}><Text style={styles.buttonText}>Load Data</Text></TouchableOpacity>
      {
        users.map(({ username, email, age }: any, index) => {
          return <View key={index} style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.nameText}>{username}</Text>
            <Text style={styles.nameText}>{email}</Text>
            <Text style={styles.nameText}>{age}</Text>
          </View>
        })
      }

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: { marginVertical: 10, backgroundColor: 'lightblue', borderRadius: 15, padding: 10, paddingHorizontal: 20 },
  buttonText: { color: "black", fontSize: 12 },
  nameText: { marginVertical: 5, fontSize: 14, paddingHorizontal: 5 }
});

export default App;