import react from "react";
import {View, Text, StyleSheet, Image, ScrollView} from "react-native";

const Tugas01 = () => {
    return (
        <>
        <ScrollView>
        <View style={{ backgroundColor:"black" }} >
             <Image source={require('./assets/Rey.jpeg')} style={style.gambar} />
             <Text style={style.tekssaya }>Reynata Prajnadi T</Text>
             <Text style={style.tekssaya }>70376</Text>
         </View>

         <View style={{ backgroundColor:"black" }} >
             <Image source={require('./assets/Louis.jpeg')} style={style.gambar} />
             <Text style={style.tekssaya }>Louis Gabriel H</Text>
             <Text style={style.tekssaya }>70250</Text>
         </View>

         <View style={{ backgroundColor:"black" }} >
             <Image source={require('./assets/Edo.jpeg')} style={style.gambar} />
             <Text style={style.tekssaya }>Mohammad Rasyedo M</Text>
             <Text style={style.tekssaya }>71358</Text>
         </View>

         <View style={{ backgroundColor:"black" }} >
             <Image source={require('./assets/Icad.jpeg')} style={style.gambar} />
             <Text style={style.tekssaya }>Richard paskah</Text>
             <Text style={style.tekssaya }>70286</Text>
         </View>

         <View style={{ backgroundColor:"black" }} >
             <Image source={require('./assets/Tio.jpeg')} style={style.gambar} />
             <Text style={style.tekssaya }>Michael Tio</Text>
             <Text style={style.tekssaya }>70515</Text>
         </View>
        </ScrollView>
        </>
        // <View style={{ backgroundColor:"black" }} >
        //     <Image source={require('./assets/akiong.png')} />
        //     <Text style={style.tekssaya }>Hello ini dari halaman Tugas01</Text>
        //     <Text style={style.tekssaya }>123456</Text>
        // </View>
    );
}

const style = StyleSheet.create({
    tekssaya: {
        color:"white",
        fontWeight:"bold",
        textAlign:"center"
    },

    gambar: {
        width: 250,
        height: 250,
        alignSelf: 'center',
        marginVertical: 10
    }
});

export default Tugas01;