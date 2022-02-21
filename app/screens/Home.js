import React from 'react';

import { View, Text, Image } from 'react-native';
import styles from '../styles/style';
import Rate from '../components/Rate';

const Home = () => {

    return (
        <View style={{flex: 1, alignItems:'flex-start', backgroundColor:'#FFF'}}>
           <Text style={styles.cardText}>Today's deal</Text>
            <View style={{alignSelf: 'center'}}>
                <Image
                    source={require('../images/slide1.jpg')}
                />    
            </View>    
            <Text style={styles.cardText}>Best Sellers</Text>

            <View style={{flexDirection: 'row'}}> 
                <View>
                    <View style={{marginLeft: 17}}>
                        <Image
                            source={require('../images/vintage.png')}
                        />    
                    </View>  
                <View>
                    <View>
                        <Text style={{marginLeft:17, fontSize: 12,  color: '#000'}}>Vintage Bra & Pant</Text>
                    </View>  
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{marginLeft:17, fontSize: 12,  color: '#000'}}>$100</Text>
                        <Text style={{marginLeft:17, fontSize: 12,  color: '#0037BA'}}>$121.86</Text>
                    </View>
                    <View style={{marginLeft:17, alignSelf: 'flex-start'}}>
                        <Rate />
                    </View>
                </View>
            </View>
                <View>
                    <View style={{marginLeft: 17}}>
                        <Image
                            source={require('../images/adidas.png')}
                        />    
                    </View>  
                    <View>
                        <View>
                            <Text style={{marginLeft:17, fontSize: 12,  color: '#000'}}>Vintage Bra & Pant</Text>
                        </View>  
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{marginLeft:17, fontSize: 12,  color: '#000'}}>$100</Text>
                            <Text style={{marginLeft:17, fontSize: 12,  color: '#0037BA'}}>$121.86</Text>
                        </View>
                        <View style={{marginLeft:17, alignSelf: 'flex-start'}}>
                            <Rate />
                        </View>
                    </View>
                </View>
            </View>            
        </View>
    )
}

export default Home;