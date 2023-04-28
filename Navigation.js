export default function myStack() {
    return (
        <HomepageStack.Navigator initialRouteName='Homepage'>
            <HomepageStack.Screen name='Homepage' component={Homepage}/>
            <HomepageStack.Screen name='PokemonPage' component={PokemonPage}/>
        </HomepageStack.Navigator>
    )
}