import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, Image} from 'react-native';
import MyButton from './src/components/Button/myButton';
import { images } from './src/components/url/imagesUrl.js';

export default function App() {
  const [url,setUrl] = useState('start');
  return (
    <View style={styles.container}>
      <Image style={{height:110,width:210}} source={require('./src/components/img/logo.jpg')}></Image>
      <Image style={{height:300,width:400,marginTop:20}} source={images[url]}></Image>
      <View style={{flexDirection:'row'}}>
        <MyButton title={'patrick'} onPress={()=>setUrl('patrick')} style={styles.patrickButton} textStyle={styles.patrickText}/>
        <MyButton title={'spongeBob'} onPress={()=>setUrl('spongeBob')} style={styles.spongeBobButton} textStyle={styles.spongeBobText}/>
      </View>
      <View style={{flexDirection:'row'}}>
        <MyButton title={'crabBoss'} onPress={()=>setUrl('crabBoss')} style={styles.crabBossButton} textStyle={styles.crabBossText}/>
        <MyButton title={'squidWard'} onPress={()=>setUrl('squidWard')} style={styles.squidWardButton} textStyle={styles.squidWardText}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:70,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  patrickButton:{
    margin:20,
    height:50,
    width:120,
    backgroundColor:'white',
    borderColor:'pink',
    borderWidth:3,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
  },
  patrickText:{
    color:'pink',
    fontSize:22,
    textAlign:'center',
  },
  spongeBobButton:{
    margin:20,
    height:50,
    width:120,
    backgroundColor:'white',
    borderColor:'#E1E100',
    borderWidth:3,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
  },
  spongeBobText:{
    color:'#E1E100',
    fontSize:22,
    textAlign:'center',
  },
  crabBossButton:{
    marginRight:20,
    height:50,
    width:120,
    backgroundColor:'white',
    borderColor:'#F75000',
    borderWidth:3,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
  },
  crabBossText:{
    color:'#F75000',
    fontSize:22,
    textAlign:'center',
  },
  squidWardButton:{
    marginLeft:20,
    height:50,
    width:120,
    backgroundColor:'white',
    borderColor:'#00BB00',
    borderWidth:3,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
  },
  squidWardText:{
    color:'#00BB00',
    fontSize:22,
    textAlign:'center',
  }
});
