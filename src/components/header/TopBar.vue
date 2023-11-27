
import SearchBar from './SearchBar.vue';
import UserMenu from './UserMenu.vue';

<template>
    <div id = "Top">
        <div id = "Left">
            <button id = "Logo">
                TicketPort
            </button>
        </div>
        <div id = "Center">
            <SearchBar/>
        </div>
        <div id = "Right">
            <UserMenu/>
            <button id = "Button">
                Logout
            </button>
        </div>
    </div>
</template>

<style>
#Button{
    margin-top: 40px;
    background-color: rgb(28, 40, 51);
    color: white;
    padding: 5px;
    height: 30px;
    border-radius: 10px;
}

#Top{
    display: flex;
    background-color: rgb(61, 93, 133);
    color: white;
    padding: 5px;
    height: 50px;
    border-radius: 10px;
}

#Logo{
    border-width: 0px;
    font-size: 2em;
    background-color: rgb(61, 93, 133);
    color: white;
    padding: 5px;
    height: 30px;
    padding-right: 25px;
    border-radius: 10px;
}

#Left{
    float:left;
}

#Center{
    float: center;
    margin-top: 10px;
    width: auto;
    align-items: center;
    justify-content: center;
}

#Right{
    margin-top: -30px;
    float: right;
    width: 200px;
}
</style>