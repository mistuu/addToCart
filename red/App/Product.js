import { StyleSheet, Text, TouchableOpacity, FlatList, View, Image, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from './Header';
import productData from './data';
import { addToCart,removeFromCart } from './redux/action';
import { useDispatch, useSelector } from 'react-redux';

const Product = (props) => {
    const products = props.items.item
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.reducer)
    const [isAdded, setIsAdded] = useState(false)

    const handleAddToCart = (item) => {
        console.log(item);
        dispatch(addToCart(item))
    }
    const handleRemoveFromCart = (item) => {
        console.log(item);
        dispatch(removeFromCart(item.id))
    }
    useEffect(() => {
       let result=cartItems.filter(element=>{
            return element.id==products.id
       })
       if(result.length){
            setIsAdded(true)
       }else{
        setIsAdded(false)
       }
    }, [cartItems])


    return (
        <View style={{ borderBottomWidth: 2, padding: 10, margin: 10, marginTop: 10 }}>
            <View style={{ flexDirection: 'row', margin: 5 }}>
                <Image source={{ uri: products?.thumbnail }}
                    style={{ height: 100, width: 100 }} />
                <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontSize: 25 }}>{products?.title}</Text>
                    <Text style={{ fontSize: 25 }}>{products?.brand}</Text>
                    <Text style={{ fontSize: 25 }}>{products?.price}</Text>
                </View>
            </View>
            {
                isAdded ?
                    <TouchableOpacity onPress={() => handleRemoveFromCart(products)} style={{ alignItems: 'center', padding: 10, backgroundColor: 'red' }}>
                        <Text>Remove From Cart</Text>
                    </TouchableOpacity> :
                    <TouchableOpacity onPress={() => handleAddToCart(products)} style={{ alignItems: 'center', padding: 10, backgroundColor: 'blue' }}>
                        <Text>Add to Cart</Text>
                    </TouchableOpacity>

            }
        </View>
    )
}

const styles = StyleSheet.create({

})
export default Product