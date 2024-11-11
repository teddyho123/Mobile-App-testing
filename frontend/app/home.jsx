import { Button, View } from "react-native";


export default function Home() {

  return (
    <View>
      <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center", paddingTop: "150px", paddingBottom:"300px"}}> 
        <h1>Liar liar, pants on fire</h1>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", }}> <Button title="Click me" onPress={() => {alert("uwu")}} /> </View>
    </View>
  );
}
