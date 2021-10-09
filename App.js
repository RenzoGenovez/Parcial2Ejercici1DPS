import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity,TextInput,Platform, } from 'react-native';
import { WebView } from 'react-native-webview';
import { TouchableOpacity as TO } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer,  useIsFocused} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons'; 
import ReactPlayer from 'react-player';
import { Video, AVPlaybackStatus } from 'expo-av';

//_________________________________________________________________________________________________________________________

import Constants from 'expo-constants';
import serie from './assets/serie.png';
import pelis from './assets/pelis.jpg';
import proximamente from './assets/proximamente.jpg';

//PELICULAS
//MARVEL
import marvel1 from './assets/Peliculas/Marvel/marvel1.jpg';
import marvel2 from './assets/Peliculas/Marvel/marvel2.jpg';
import marvel3 from './assets/Peliculas/Marvel/marvel3.jpg';
import marvel4 from './assets/Peliculas/Marvel/marvel4.png';
import marvel5 from './assets/Peliculas/Marvel/marvel5.jpg';
import marvel6 from './assets/Peliculas/Marvel/marvel6.jpg';

//TERROR
import terror1 from './assets/Peliculas/Terror/terror1.jpg';
import terror2 from './assets/Peliculas/Terror/terror2.jpg';
import terror3 from './assets/Peliculas/Terror/terror3.jpg';
import terror4 from './assets/Peliculas/Terror/terror4.jpg';
import terror5 from './assets/Peliculas/Terror/terror5.jpg';
import terror6 from './assets/Peliculas/Terror/terror6.png';

//ACCION
import accion1 from './assets/Peliculas/Accion/accion1.jpg';
import accion2 from './assets/Peliculas/Accion/accion2.jpg';
import accion3 from './assets/Peliculas/Accion/accion3.jpg';
import accion4 from './assets/Peliculas/Accion/accion4.jpg';
import accion5 from './assets/Peliculas/Accion/accion5.jpg';
import accion6 from './assets/Peliculas/Accion/accion6.jpg';

//SERIES
//ANIMADA
import seriesanimadas1 from './assets/Series/Animadas/seriesanimadas1.jpg';
import seriesanimadas2 from './assets/Series/Animadas/seriesanimadas2.jpg';
import seriesanimadas3 from './assets/Series/Animadas/seriesanimadas3.png';
import seriesanimadas4 from './assets/Series/Animadas/seriesanimadas4.jpg';
import seriesanimadas5 from './assets/Series/Animadas/seriesanimadas5.gif';

//COMEDIA
import seriecomedia1 from './assets/Series/Comedia/seriecomedia1.jpg';
import seriecomedia2 from './assets/Series/Comedia/seriecomedia2.jpg';
import seriecomedia3 from './assets/Series/Comedia/seriecomedia3.jpg';
import seriecomedia4 from './assets/Series/Comedia/seriecomedia4.jpg';
import seriecomedia5 from './assets/Series/Comedia/seriecomedia5.jpg';

//TERROR
import serieterror1 from './assets/Series/Terror/serieterror1.jpg';
import serieterror2 from './assets/Series/Terror/serieterror2.jpg';
import serieterror3 from './assets/Series/Terror/serieterror3.jpg';
import serieterror4 from './assets/Series/Terror/serieterror4.jpg';
import serieterror5 from './assets/Series/Terror/serieterror5.jpg';

//ESTRENOS VARIADOS
import estrenos1 from './assets/Estrenos/estrenos1.jpg';
import estrenos2 from './assets/Estrenos/estrenos2.jpg';
import estrenos3 from './assets/Estrenos/estrenos3.jpg';
import estrenos4 from './assets/Estrenos/estrenos4.jpg';
import estrenos5 from './assets/Estrenos/estrenos5.jpg';


//___________________________________________________________________________________________________________________


function Pelis(){
  return (
    
    <View style={{flex: 1, justifyContent:'center', alignItems: 'center' }}>
    <Image source={pelis} style={{ width: 140, height: 140 }} />
    <text>︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻</text>
    <ScrollView horizontal={false}>
    <ul>Super Herores</ul>
    <ScrollView horizontal={true}>
    
    <Image source={marvel1} style={{ width: 150, height: 200 }} /> 
    |
    <Image source={marvel2} style={{ width: 150, height: 200 }} />
    |
    <Image source={marvel3} style={{ width: 150, height: 200 }} />
    |
    <Image source={marvel4} style={{ width: 150, height: 200 }} />
    |
    <Image source={marvel5} style={{ width: 150, height: 200 }} />
    |
    <Image source={marvel6} style={{ width: 150, height: 200 }} />
  
    </ScrollView>
    <ul>Terror</ul>
    <ScrollView horizontal={true}>
    <Image source={terror1} style={{ width: 150, height: 200 }} /> 
    |
    <Image source={terror2} style={{ width: 150, height: 200 }} />
    |
    <Image source={terror3} style={{ width: 150, height: 200 }} />
    |
    <Image source={terror4} style={{ width: 150, height: 200 }} />
    |
    <Image source={terror5} style={{ width: 150, height: 200 }} />
      |
    <Image source={terror6} style={{ width: 150, height: 200 }} />

    </ScrollView>
    <ul>Accion</ul>
    <ScrollView horizontal={true}>
    <Image source={accion1} style={{ width: 150, height: 200 }} /> 
    |
    <Image source={accion2} style={{ width: 150, height: 200 }} />
    |
    <Image source={accion3} style={{ width: 150, height: 200 }} />
    |
    <Image source={accion4} style={{ width: 150, height: 200 }} />
    |
    <Image source={accion5} style={{ width: 150, height: 200 }} />
      |
    <Image source={accion6} style={{ width: 150, height: 200 }} />
    
    </ScrollView>
</ScrollView>
    </View> 
  );
}

function Serie(){
  return (
    <View style={{flex: 1, justifyContent:'center', alignItems: 'center' }}>
     <Image source={serie} style={{ width: 298, height: 74 }} />
      <text>︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻</text>
    <ScrollView horizontal={false}>
    <ul>Animadas</ul>
    <text>********************************************************************</text>
    <div><Image source={seriesanimadas1} style={{ width: 150, height: 200 }} /></div> 
    <text>********************************************************************</text>
    <Image source={seriesanimadas2} style={{ width: 150, height: 200 }} />
    <text>********************************************************************</text>
    <Image source={seriesanimadas3} style={{ width: 150, height: 200 }} />
    <text>********************************************************************</text>
    <Image source={seriesanimadas4} style={{ width: 150, height: 200 }} />
    <text>********************************************************************</text>
    <Image source={seriesanimadas5} style={{ width: 150, height: 200 }} />
    <text>********************************************************************</text>
  

    <ul>Comedia</ul>
    <text>********************************************************************</text>
    <Image source={seriecomedia1} style={{ width: 150, height: 200 }} /> 
    <text>********************************************************************</text>
    <Image source={seriecomedia2} style={{ width: 150, height: 200 }} />
    <text>********************************************************************</text>
    <Image source={seriecomedia3} style={{ width: 150, height: 200 }} />
    <text>********************************************************************</text>
    <Image source={seriecomedia4} style={{ width: 150, height: 200 }} />
    <text>********************************************************************</text>
    <Image source={seriecomedia5} style={{ width: 150, height: 200 }} />


   
    <ul>Terror</ul>
   <text>********************************************************************</text>
    <Image source={serieterror1} style={{ width: 150, height: 200 }} /> 
    <text>********************************************************************</text>
    <Image source={serieterror2} style={{ width: 150, height: 200 }} />
    <text>********************************************************************</text>
    <Image source={serieterror3} style={{ width: 150, height: 200 }} />
    <text>********************************************************************</text>
    <Image source={serieterror4} style={{ width: 150, height: 200 }} />
    <text>********************************************************************</text>
    <div><Image source={serieterror5} style={{ width: 150, height: 200 }} /></div>
    
</ScrollView>
    </View>
  );
}




function Proxi(){
  return (
    <View style={{flex: 1, justifyContent:'center', alignItems: 'center' }}>
    <Image source={proximamente} style={{ width: 140, height: 100 }} />
     <text>︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻︻</text>
    <ScrollView horizontal={false}>
    <text>Proximos Estrenos De Deries Y Peliculas</text>
   
</ScrollView>
    </View>
  );
}

//_______________________________________________________________________________________________________________________

const Tab = createBottomTabNavigator();

function Mytabs(){
  return(
    <Tab.Navigator
    initialRouteName= "Pelis"
    >

    <Tab.Screen
    name= "Peliculas"
    component ={Pelis}
    options={{
      TabBarLabel: 'Peliculas',
    }}
    />

     <Tab.Screen
    name= "Series"
    component ={Serie}
    options={{
      TabBarLabel: 'Series',
    }}
    />

     <Tab.Screen
    name= "Proximamente"
    component ={Proxi}
    options={{
      TabBarLabel: 'Proximamente',
    }}
    /> 
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
    <Mytabs/>
    </NavigationContainer>
  );
}
