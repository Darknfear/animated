import { StyleSheet,Dimensions } from 'react-native';
const { width,height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems:"center",
        justifyContent :"flex-end"
       
    },
    img : {
        flex : 1,
        height : null,
        width : null,

    },
    view : {
        height : height/3,
    },
    button : {
        width : width - 50,
        height : height /14,
        marginHorizontal : 20,
        borderRadius : 20,
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : "white"
    }
});

export default styles;