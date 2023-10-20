import React from 'react';
import { View, Text, Image, TouchableOpacity }
    from 'react-native';
import { SafeAreaView }
    from 'react-native-safe-area-context';
import { DrawerItemList }
    from '@react-navigation/drawer';
import User from '../assets/user.jpg';


const Profile = (props) => {

    return (
        <SafeAreaView>
            <View
                style={{
                    height: 200,
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottomColor: "#f4f4f4",
                    borderBottomWidth: 1,
                }}
            >
                <Image
                    source={User}
                    style={{
                        height: 130,
                        width: 130,
                        borderRadius: 65,
                    }}
                />

                <Text
                    style={{
                        fontSize: 22,
                        marginVertical: 6,
                        fontWeight: "bold",
                        color: "#111",
                    }}
                >
                    Deepanshu
                </Text>
                <Text
                    style={{
                        fontSize: 16,
                        color: "#111",
                    }}
                >
                    Web Developer & App Developer
                </Text>
            </View>

            <DrawerItemList {...props} />
            <TouchableOpacity style={{
                backgroundColor: "red",
                width: "50%",
                height: 50,
                alignItems: "center",
                margin: 55
            }}>
                <Text style={{
                    fontSize: 16,
                    color: 'white',
                    marginTop: 14
                }}>Sign Out
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default Profile;
