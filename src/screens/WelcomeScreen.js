import { View, Text, Image, TouchableOpacity } from "react-native"

export default WelcomeScreen = ({ navigation }) => {
    return(
        <View style={{ flex: 1, alignItems: "center" }}>
            <Image source={require("../../assets/portrait-person-holding-fast-food-burger.png")} style={{ height: 550, width: 400, marginTop: 50 }} />

            <Text style={{ color: "#f96163", fontSize: 22, fontWeight: "bold" }}>
                40k+ Premium Recipes
            </Text>

            <Text style={{ color: "#3c444c", fontSize: 42, fontWeight: "bold", marginTop: 44, marginBottom: 40 }}>
                Cook Like A Chef
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate("RecipeList")} style={{ backgroundColor: "#f96163", borderRadius: 18, paddingVertical: 18, width: "80%", alignItems: "center" }}>
                <Text style={{fontSize: 18, color: "white", fontWeight: "700" }}>Let's Go</Text>
            </TouchableOpacity>
        </View>
    )
}