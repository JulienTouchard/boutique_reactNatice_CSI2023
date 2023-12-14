import { View, Text } from "react-native"
import { Drawer, MD3Colors } from "react-native-paper"

const Header = () => {
    return (
        <Drawer.Section title="Some title">
            <Drawer.Item
                label="Gallery"
                /* active={active === 'first'}
                onPress={() => setActive('first')} */
            />
            <Drawer.Item
                label="Cart"
                icon={require('../../assets/icons/cart-shopping-solid.svg')}
                iconColor="#FF000"
                /* active={active === 'second'}
                onPress={() => setActive('second')} */
            />
        </Drawer.Section>
    )
}
export default Header