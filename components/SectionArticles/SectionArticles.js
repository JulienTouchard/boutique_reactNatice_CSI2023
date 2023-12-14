import React, { useEffect } from "react"
import BoutiqueContext from "../../BoutiqueContext"
import CardItem from "../CardItem/CardItem"
import { Text, View } from "react-native"


const SectionArticles = (props)=>{
    const boutiqueContext = React.useContext(BoutiqueContext)
    useEffect(()=>{
        console.dir(boutiqueContext);
    },[])
    
    return(
        <View>
            <Text>Mes fabuleux articles : </Text>
            {
                boutiqueContext.articlesApp.map((value,index)=>{
                    return(
                        <CardItem key={index} id={value.id}>{value.id}</CardItem>
                    )
                })
            }
        </View>
    )
}
export default SectionArticles