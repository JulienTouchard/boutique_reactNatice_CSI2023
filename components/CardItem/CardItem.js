import React, { useEffect } from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import BoutiqueContext from '../../BoutiqueContext';
const CardItem = (props) => {
    const boutiqueContext = React.useContext(BoutiqueContext);
    const article = boutiqueContext.articlesApp[props.id];
    const img = "";
    useEffect(()=>{
        /* img = require(article.url); */
    },[img])
    return (
        <Card>
            <Card.Title title="Card Title" subtitle="Card Subtitle"  />
            <Card.Content>
                <Text variant="titleLarge">{article.name}</Text>
                <Text variant="bodyMedium">{article.description}</Text>

            </Card.Content>
            <Card.Cover source={img} />
            <Card.Actions>
                
                <Button>Achat Immediat</Button>
            </Card.Actions>
        </Card>
    )
}
export default CardItem