import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import Header from './components/Header/Header';
import articles from './articles';
import BoutiqueContext from './BoutiqueContext';
const App = () => {
  const [state,setState] = React.useState({
    articlesApp: articles,
    panier: [],
  })
  
  const qteDecrement = (id) => {
    if (state.articlesApp[id].qte > 0) {
      let tmpArticles = state.articlesApp.map((value, index) => {
        if (id === index) {
          value.qte--;
        }
        return value;
      })
      let tmpPanier = [];
      let stop = false;
      if (state.panier.length > 0) {
        tmpPanier = state.panier.map(element => {
          if (element.idPanier === id) {
            element.qtePanier++;
            stop = true;
          }
          return element;
        });
      }
      if (!stop) tmpPanier = [...tmpPanier, { "idPanier": id, "qtePanier": 1 }];
      setState({
        ...state,
        articlesApp: tmpArticles,
        panier: tmpPanier,
      })
    }
  }
  const qteIncrement = (id) => {
    const tmpPanier = state.panier;
    const tmpArticles = state.articlesApp;
    tmpPanier.map((value, index) => {
      if (id === value.idPanier) {
        tmpPanier[index].qtePanier--;
        if (tmpPanier[index].qtePanier === 0) {
          tmpPanier.splice(index, 1);
        }
        tmpArticles[id].qte++;
        setState({
          ...state,
          articlesApp: tmpArticles,
          panier: tmpPanier
        })
      }
    })
  }
  return (
    <BoutiqueContext.Provider value={{...state,
    'qteDecrement':(id)=>qteDecrement(id),
    'qteIncrement':(id)=>qteIncrement(id)
    }}>
      <SafeAreaView>
        <ScrollView>
          <Header></Header>
          <Text style={styles.exempleText}>Hello world!</Text>
        </ScrollView>
      </SafeAreaView>
    </BoutiqueContext.Provider>
  );
}
const styles = StyleSheet.create({
  exempleText: {
    fontWeight: "900",
    fontSize: 48,
    padding: 8,
    color: "#000000",
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
