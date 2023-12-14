import React, { useEffect } from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import BoutiqueContext from '../../BoutiqueContext';
const CardItem = (props) => {
    const boutiqueContext = React.useContext(BoutiqueContext);
    const article = boutiqueContext.articlesApp[props.id];
    return (
        <Card>
            <Card.Title title={article.name} subtitle={article.price+" €"}  />
            <Card.Content>
                <Text variant="titleLarge">{article.qte} articles restants</Text>
                <Text variant="bodyMedium">{article.description}</Text>
            </Card.Content>
            <Card.Cover source={article.url} resizeMode={`cover`}
            style={{flexDirection: 'column',height:300,width:150}}
            />
            <Card.Actions>
                <Button>Achat Immediat</Button>
            </Card.Actions>
        </Card>
    )
}
export default CardItem