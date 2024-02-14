import { StyleSheet, Text, TouchableOpacity, FlatList, View, Image, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from './App/Header';
import Product from './App/Product';
import productData from './App/data';
import { addToCart } from './App/redux/action';
import { useDispatch, useSelector } from 'react-redux';
const App = () => {
  const products = productData.products
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.reducer)
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = (item) => {
    console.log(item);
    dispatch(addToCart(item))
  }
  useEffect(() => {
    if (cartItems && cartItems.length) {
      products.forEach(item => {
        cartItems.forEach(element => {
          if (element.id == item.id) {
            setIsAdded(true)
          }
        });
      })
    }
  }, [cartItems])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{}}>
        <Header />
        <FlatList
          data={products}
          renderItem={(item) => {

            return (
              <View style={{ borderBottomWidth: 2, padding: 10, margin: 10, marginTop: 10 }}>
                <Product items={item} />
              </View>
            )
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

})
export default App