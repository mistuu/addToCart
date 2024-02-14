import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
const Header = (props) => {
    const cartData = useSelector((state) => state.reducer)
    const [cartItems, setCartItems] = useState(0)

    useEffect(() => {
        setCartItems(cartData.length)
    }, [cartData])

    return (
        <View style={{}}>
            <Text style={{ fontSize: 30, textAlign: 'right', padding: 10, backgroundColor: 'orange' }}>
                <View style={{backgroundColor:"red",borderRadius:15,height:40,width:40}}>
                    <Text style={{ fontSize: 30,color:'white' }}>
                        {cartItems}
                    </Text>
                </View>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({

})
export default Header