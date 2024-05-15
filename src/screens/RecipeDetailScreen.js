import { StyleSheet, Text, View, Image, SafeAreaView, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { colors } from '../constants/Constant'
import { FontAwesome } from '@expo/vector-icons'

const RecipeDetailScreen = ({ route, navigation }) => {
    const { item } = route.params

    return (
        <View style={{ backgroundColor: item.color, flex: 1 }}>

            <SafeAreaView style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 18, marginTop: 10 }} >
                <Pressable onPress={ () => navigation.goBack() }>
                    <FontAwesome name='arrow-circle-left' size={28} color={colors.COLOR_LIGHT} />
                </Pressable>

                <Pressable>
                    <FontAwesome name='heart-o' size={28} color={colors.COLOR_LIGHT} />
                </Pressable>
            </SafeAreaView>

            <View style={{ backgroundColor: colors.COLOR_LIGHT, flex: 1, marginTop: 200, borderTopLeftRadius: 56, borderTopRightRadius: 56, alignItems: 'center', paddingHorizontal: 16 }}>
                <View style={{ height: 300, width: 300, position: 'absolute', top: -150 }}>
                    <Image source={item.image}  style={{ height: "100%", width: "100%", resizeMode: 'contain' }} />
                </View>

                {/* name */}
                <Text style={{ marginTop: 160, fontSize: 28, fontWeight: 'bold' }}>{item.name}</Text>

                <View style={{ flex: 1 }}>
                    <ScrollView showsVerticalScrollIndicator={false} >

                        {/* description */}
                        <Text style={{ marginVertical: 16, fontSize: 20 }}>{item.description}</Text>

                        {/* extra details */}
                        <View style={{ width: "100%" ,flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ backgroundColor: "rgba(255, 0, 0, 0.38)", paddingHorizontal: 20, paddingVertical: 26, borderRadius: 8, alignItems: 'center', width: 120 }}>
                                <Text style={{ fontSize: 40 }}>⏰</Text>
                                <Text style={{ fontSize: 20, fontWeight: 400 }}>{item.time}</Text>
                            </View>

                            <View style={{ backgroundColor: "rgba(135, 206, 235, 0.8)", paddingHorizontal: 20, paddingVertical: 26, borderRadius: 8, alignItems: 'center', width: 120 }}>
                                <Text style={{ fontSize: 40 }}>🥣</Text>
                                <Text style={{ fontSize: 20, fontWeight: 400 }}>{item.difficulty}</Text>
                            </View>

                            <View style={{ backgroundColor: "rgba(255, 165, 0, 0.48)", paddingHorizontal: 20, paddingVertical: 26, borderRadius: 8, alignItems: 'center', width: 120 }}>
                                <Text style={{ fontSize: 40 }}>🔥</Text>
                                <Text style={{ fontSize: 20, fontWeight: 400 }}>{item.calories}</Text>
                            </View>
                        </View>

                        {/* ingredients */}
                        <View style={{ alignSelf: 'flex-start', marginVertical: 22 }}>
                            <Text style={{ fontSize: 22, fontWeight: "600", marginBottom: 6 }}>Ingredients:</Text>

                            {
                                item.ingredients.map(
                                    (ingredient, index) => (
                                        <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 4 }}>
                                            <View style={{ backgroundColor: item.color, height: 10, width: 10, borderRadius: 5 }}></View>
                                            <Text style={{ fontSize: 18, marginLeft: 6 }}>{ingredient}</Text>
                                        </View>
                                    )
                                )
                            }
                        </View>

                        {/* steps */}
                        <View style={{ alignSelf: 'flex-start', marginVertical: 22 }}>
                            <Text style={{ fontSize: 22, fontWeight: "600", marginBottom: 10 }}>Steps:</Text>

                            {
                                item.steps.map(
                                    (step, index) => (
                                        <View key={index} style={{ flexDirection: 'row', marginBottom: 6 }}>
                                            <Text style={{ fontSize: 18 }}> {index + 1}. </Text>
                                            <Text style={{ fontSize: 18, marginLeft: 6 }}>{step}</Text>
                                        </View> 
                                    )
                                )
                            }
                        </View>
                    </ScrollView>
                </View>

            </View>
        </View>
    )
}

export default RecipeDetailScreen

const styles = StyleSheet.create({})